import React, {useState} from 'react';
import './resetPassword.styles.scss'
import logoFull from "../../assests/logoFull.jpg";
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import {useForm} from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

function ResetPasswordComponent(props) {



    const {register, handleSubmit, formState: {errors}} = useForm()

    const {isSubmitted, isSubmitSuccessful} = useForm();


    return (
        <div className='RegisterComponent'>
            <div className='logoFullSignInDiv'>
                <img className='logoFullSignIn' src={logoFull} alt=""/>
            </div>

            <p className='or-word'>Reset your <span
                className='spanFree'>password</span></p>
            <div>
                {isSubmitSuccessful && <div className='alert-success'> Merci pour votre inscription</div> }
                <form className='registerForm' >
                    <p className='title'>Enter your new password</p>
                    <input className='designInput'
                           type="password"
                           id='password'
                           name='password'
                           placeholder='password...'
                           {...register("password", {required: true})} />
                    {errors.fullname && <span className='errorForm'>Password is required</span>}
                    <input className='designInput'
                           type="password"
                           id='confirmPassword'
                           name='confirmPassword'
                           placeholder='confirm password ...'
                           {...register("confirmPassword", {required: true})} />
                    {errors.email && <span className='errorForm'>The passwords doesn't match</span>}

                    <CustomButtonComponent
                        btnText="Send"
                    />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ResetPasswordComponent;
