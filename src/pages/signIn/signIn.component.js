import React, {useEffect, useState} from 'react';
import logoFull from '../../assests/logoFull.jpg'
import './signIn.styles.scss'
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import facebookConnexionImg from "../../assests/facebookConnexion.png";
import googleConnexionImg from "../../assests/googleConnexion.jpg";
import {useForm} from "react-hook-form";
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

function SignInComponent(props) {


    const {register, handleSubmit, formState: {errors}} = useForm()
    const {isSubmitted, isSubmitSuccessful} = useForm();

    const dispatch = useDispatch()

    const updateUserState = (data) => {
        dispatch({
            type: 'UPDATE_USER',
            payload: data
        })
    }


    const onSubmit = async (data) => {

        const body = {
            password: data.password,
            email: data.email,
        }

        try {
            const response = await axios.post('http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/signin', body);
            if (response.status === 200) {
                console.log(response.data.authorities[0]);
                toast("Logged In Successfully", {
                    type: "success",
                });
                sessionStorage.setItem('token',response.data.accessToken)
                sessionStorage.setItem('authenticated',true);
                sessionStorage.setItem('userId',response.data.userId);
                sessionStorage.setItem('username',response.data.username);
                sessionStorage.setItem('phone',response.data.phone);
                sessionStorage.setItem('name',response.data.name);
                sessionStorage.setItem('coachName',response.data.coachName);
                sessionStorage.setItem('role',response.data.authorities[0]?.authority);
                updateUserState(response.data)
                if (response.data.authorities[0]?.authority === 'Admin') {
                    props.history.push("/admin");
                } else {
                    props.history.push("/user");
                }
            } else if (response.status === 500) {
                toast("Bad Credentials", {
                    type: "error",
                });
            }
        } catch (err) {
            toast("Bad Credentials", {
                type: "error",
            });
        }
    }

    useEffect(() => {

    },[register,handleSubmit]);



    useEffect(() => {
  
        if (sessionStorage.getItem("authenticated") === "true") {
            props.history.push("/");
        }
      }, []);
  


    return (
        <div>
            <div className='logoFullSignInDiv'>
                <img className='logoFullSignIn' src={logoFull} alt=""/>
            </div>
            <div className='signInComponent'>

                <div className='loginEmail'>
                    <h3 className='title-login'>Log into your account</h3>
                    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                        <input className='emailInput-loginPage'
                               type="email"
                               id='email'
                               name='email'
                               placeholder='Email'
                               {...register("email", {required: true})} />
                        {errors.email && <span className='errorForm'>Your Email is required</span>}
                        <div className='passwordInput-div'>
                            <input className='passwordInput-loginPage'
                                   type="password"
                                   id='password'
                                   placeholder='Password'
                                   name='password'
                                   {...register("password", {required: true})} />
                        
                            <div>
                         
                                <Link to="/forgot-password" className='forgotPasswordLink'>
                                    Forgot Password
                                </Link>
                            </div>
                        </div>
                        {errors.password && <span className='errorForm'>Your Password is required</span>}
                        <div className='loginBtn-div'>
                            <CustomButtonComponent
                                btnText="LOGIN"
                            />
                            <div className='register'>
                                <p>Don't have an account ?</p>
                                <p className='registerHere'> <Link to="/register" className='registerHere'>
                                Register here
                                </Link></p>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <div className="verticalBar">
                        <p></p>
                    </div>
                </div>
                <div className='loginEmail'>
                    <h3 className='title-login'>Log in using ...</h3>
                    <div className='loginBtnSocial'>
                        <div>
                            <a href="/">
                                <div className='facebookBtn loginSocial'>
                                    <img src={facebookConnexionImg} alt=""/>
                                    <p>Sign in with Facebook</p>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="/">
                                <div className='googleBtn loginSocial'>
                                    <img src={googleConnexionImg} alt=""/>
                                    <p>Sign in with Google</p>

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default SignInComponent;
