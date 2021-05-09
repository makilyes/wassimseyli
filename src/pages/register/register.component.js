import React, {useEffect, useState} from 'react';
import './register.styles.scss'
import logoFull from "../../assests/logoFull.jpg";
import googleConnexionImg from "../../assests/googleConnexion.jpg";
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import {useForm} from "react-hook-form";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function RegisterComponent(props) {


    const {register, handleSubmit, formState: {errors}} = useForm()


    useEffect(() => {
  
        if (sessionStorage.getItem("authenticated") === "true") {
            props.history.push("/");
        }
      }, []);
  

    const onSubmit = async (data) => {

        if(!data.agreement) 
        {
            toast("Please agree to terms and agreement", {
                type: "error",
              });

        }
        else {
            const body ={
            name : data.fullname,
            password : data.password,
            email : data.email,
            phone: data.phone,
            userType : "Client",
            waitingList : props?.location?.state?.waitingUser ? 'true' : 'false'
            }

            try {
                const response = await axios.post('http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/signup',body);
             if(response.status === 200) {
                toast("Registered Successfully", {
                    type: "success",
                  });
                 props.history.push("/sign-in");
             }
                else  if(response.status === 400)
                {
                toast("Email Already in Use", {
                    type: "error",
                  });
                }
            }
            catch(err)
            {
            toast("Email Already in Use", {
                type: "error",
              });
            }
        }
    }

    const {isSubmitted, isSubmitSuccessful} = useForm();



    return (
        <div className='RegisterComponent'>
            <div className='logoFullSignInDiv'>
                <img className='logoFullSignIn' src={logoFull} alt=""/>
            </div>
            <div className='RegisterGoogleComponent'>
                <p className='paragraph'>Register to continue using unique platform for <span
                    className='spanFree'>free</span></p>
                <div className="googleConnexionBtn">

                    <a href="/">
                        <div className='googleBtn registerSocial'>
                            <img src={googleConnexionImg} alt=""/>
                            <p>Continue with Google</p>
                        </div>
                    </a>
                </div>
            </div>
            <p className='or-word'>OR</p>
            <div>
                {isSubmitSuccessful && <div className='alert-success'> Merci pour votre inscription</div> }
                <form className='registerForm' onSubmit={handleSubmit(onSubmit)}>
                    <p className='title'>Create your profile</p>
                    <input className='designInput'
                           type="text"
                           id='fullname'
                           name='fullname'
                           placeholder='Full Name'
                           {...register("fullname", {required: true})} />
                    {errors.fullname && <span className='errorForm'>Your Full Name is required</span>}
                    <input className='designInput'
                           type="email"
                           id='email'
                           name='email'
                           placeholder='Email'
                           {...register("email", {required: true})} />
                    {errors.email && <span className='errorForm'>Your Email Name is required</span>}

                    <input className='designInput'
                           type="password"
                           id='password'
                           name='password'
                           {...register("password", {required: true})}
                           placeholder='Password'/>
                    {errors.password && <span className='errorForm'>Your Password Name is required</span>}

                    <input className='designInput'
                           type="text"
                           id='phone'
                           name='phone'
                           {...register("phone", {required: true})}
                           placeholder='Phone'/>
                    {errors.phone && <span className='errorForm'>Your Phone Number is required</span>}

                    <label>
                        <input type="checkbox"
                               name='agreement'
                               className='agreement'
                               {...register("agreement")}/>
                        I agree to receive emails that will teach me how to generate more traffic
                    </label>
                    <CustomButtonComponent
                        btnText="Register"
                    />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default RegisterComponent;
