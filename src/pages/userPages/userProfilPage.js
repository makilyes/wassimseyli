import React, { useEffect, useState } from 'react';
import {get, useForm} from "react-hook-form";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import './userPages.styles.scss'
import {ToastContainer,toast} from "react-toastify";
import axios from '../../axiosinterceptor'
import { useDispatch, useSelector } from 'react-redux';

function UserProfilPage(props) {

    const {register, handleSubmit, formState: {errors},setValue} = useForm()
    const {isSubmitted, isSubmitSuccessful} = useForm();
    const [userState,setUserState]=useState(null)
    const user = useSelector(state => state.userReducer?.user);

    const [image, setImage] = useState(null);

    const dispatch = useDispatch()
    const updateUserState = (data) => {
        dispatch({
            type: 'UPDATE_USER',
            payload: data
        })
    }

    const getUser=async() =>{
        const response = await axios.get(`http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/getUser/${sessionStorage.getItem("userId")}`);
        if(response.status===200) {
            updateUserState(response.data)
            setUserState(response.data)
        }
        else {
            toast("Error fetching user information", {
                type: "error",
              });
        }
        
    }
    

    const handlePhoto = (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result)
        };
      };

    const updateProfile = async (data) => {
        if (sessionStorage.getItem("userId") !== null) {

          const body ={
              email : data.email,
              image : image || userState?.name,
              address : data.adress,
              name : data.fullname,
              userType : "Client",
              password : '-',
              phone : data.phone
          }
          try {
            const id=sessionStorage.getItem("userId");
            const response = await axios.post(
              `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/user/${id}` ,body
            );
            if (response.status == 200) {
                toast("Profile Updated Successfully", {
                    type: "success",
                  });
                sessionStorage.setItem('userId',response.data.id);
                sessionStorage.setItem('username',response.data.username);
                updateUserState(response.data)
            } else {
              toast("Error Updating Profile", {
                type: "error",
              });
            }
          } catch (err) {
            toast(err.response.data.message, {
              type: "error",
            });
          }
        }
      };

      useEffect(()=>{
          getUser()
      },[])
    
      useEffect(() => {
        setValue("fullname", userState?.name)
        setValue("phone", userState?.phone) 
        setValue("adress" , userState?.address)
        setValue("email" ,userState?.email )
    },[register,handleSubmit,userState]);



    return (
        <div className='RegisterComponent'>

            {isSubmitSuccessful && <div className='alert-success'> Merci pour votre inscription</div>}
            <form className='registerForm' onSubmit={handleSubmit(updateProfile)} >
                <p className='title'>Update your profile</p>
                <Avatar className='avatarUserProfil' src={image || userState?.image} size={90} icon={<UserOutlined />} />
                <input className='designInput'
                       type="text"
                       id='fullname'
                       name='fullname'
                       placeholder='Full Name...'
                       {...register("fullname", {required: true})} />
                {errors.fullname && <span className='errorForm'>Name is required</span>}
                <input className='designInput'
                       type="text"
                       id='adress'
                       name='adress'
                       placeholder='Adress...'
                       {...register("adress", {required: true})} />
                {errors.adress && <span className='errorForm'>Address is required</span>}
                <input className='designInput'
                       type="email"
                       id='email'
                       name='email'
                       placeholder='Email...'
                       {...register("email", {required: true})} />
                {errors.email && <span className='errorForm'>Email is required</span>}
                <input className='designInput'
                       type="file"
                       id='profilImage'
                       name='profilImage'
                       placeholder='Image...'
                       onChange={handlePhoto}

                      />
                <input className='designInput'
                       type="text"
                       id='phone'
                       name='phone'
                       placeholder='Phone...'

                       {...register("phone", {required: true})} />
                {errors.phone && <span className='errorForm'>Phone is required</span>}

                <CustomButtonComponent
                    btnText="Update"
                />
            </form>

            <ToastContainer/>
        </div>
    );
}

export default UserProfilPage;