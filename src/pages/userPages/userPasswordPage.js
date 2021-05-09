import React, { useEffect } from 'react';
import {useForm} from "react-hook-form";
import logoFull from "../../assests/logoFull.jpg";
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import {ToastContainer,toast} from "react-toastify";
import axios from '../../axiosinterceptor'

function UserPasswordPage(props) {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const {isSubmitted, isSubmitSuccessful} = useForm();

    const updatePassword = async (data) => {
        if (sessionStorage.getItem("userId") != null) {

          if(data.password != data.confirmPassword) {
            toast("Passwords Don't Match", {
                type: "error",
              });
              return ;
          }  
          const body ={
              newPassword : data.password
          }
          try {
            const id=sessionStorage.getItem("userId");
            const response = await axios.post(
              `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/user/updatePassword/${id}` ,body
            );
            if (response.status == 200) {
                toast("Password Updated Successfully", {
                    type: "success",
                  });
            } else {
              toast(response.data.message, {
                type: "error",
              });
            }
          } catch (err) {
            toast("Error updating password", {
              type: "error",
            });
          }
        }
      };
    
      useEffect(() => {

    },[register,handleSubmit]);


    return (
        <div className='RegisterComponent'>
            <p className='or-word'>Change your<span
                className='spanFree'>password</span></p>
            <div>
                {isSubmitSuccessful && <div className='alert-success'> Merci pour votre inscription</div> }
                <form className='registerForm'  onSubmit={handleSubmit(updatePassword)}  >
                    <p className='title'>Enter your new password</p>
                    <input className='designInput'
                           type="password"
                           id='password'
                           name='password'
                           placeholder='password...'
                           {...register("password", {required: true})} />
                    {errors.password && <span className='errorForm'>Password is required</span>}
                    <input className='designInput'
                           type="password"
                           id='confirmPassword'
                           name='confirmPassword'
                           placeholder='confirm password ...'
                           {...register("confirmPassword", {required: true})} />
                    {errors.confirmPassword && <span className='errorForm'>Confirm Password is required</span>}
                    <CustomButtonComponent
                        btnText="Update Password"
                    />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default UserPasswordPage;