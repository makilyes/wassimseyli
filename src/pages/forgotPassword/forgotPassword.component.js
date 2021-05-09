import React, {useState} from 'react';
import './forgotPassword.styles.scss'
import logoFull from "../../assests/logoFull.jpg";
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import {useForm} from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

function ForgotPasswordComponent(props) {



    const {register, handleSubmit, formState: {errors}} = useForm()

    const {isSubmitted, isSubmitSuccessful} = useForm();

        const onSubmit = async (data) => {

        const body = {
            email: data.email,
        }

        try {
            const response = await axios.post('http://localhost:8080/resetPassword', body);
            if (response.status === 200) {
                toast("If your email is registered , you will get an email soon with temprorary password.", {
                    type: "info",
                });
            } else if (response.status === 500) {
                toast("An error occured.Try Again", {
                    type: "error",
                });
            }
        } catch (err) {
            toast("Email Not Registered", {
                type: "error",
            });
        }
    }


    return (
        <div className='RegisterComponent'>
            <div className='logoFullSignInDiv'>
                <img className='logoFullSignIn' src={logoFull} alt=""/>
            </div>

            <p className='or-word'>Forgot your <span
                className='spanFree'>password</span></p>
            <div>
                {isSubmitSuccessful && <div className='alert-success'> Merci pour votre inscription</div> }
                <form className='registerForm' onSubmit={handleSubmit(onSubmit)}>
                    <p className='title'>Enter your email</p>
                    <input className='designInput'
                           type="email"
                           id='email'
                           name='email'
                           placeholder='email...'
                           {...register("email", {required: true})} />
                    {errors.fullname && <span className='errorForm'>Email is required</span>}
                    <CustomButtonComponent
                        btnText="Send"
                    />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ForgotPasswordComponent;
