import React from 'react';
import {useForm} from "react-hook-form";
import './userPages.styles.scss'
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import { useSelector } from 'react-redux';

function UserCoachContact(props) {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const {isSubmitted, isSubmitSuccessful} = useForm();
    const user = useSelector(state => state.userReducer?.user);

    return (
        <div>
            <h3>YOUR COACH IS : {user?.coachName || sessionStorage.getItem('coachName') || "Not Assigned"}</h3>
            <form className='registerForm'>
                <input className='designInput'
                       type="text"
                       id='object'
                       name='object'
                       placeholder='Object...'
                       {...register("object")} />
                <textarea className='designInput textAreaUserCoach'
                          id='message'
                          name='message'
                          placeholder='Your Message...'
                          {...register("message")}
                          cols="40"
                          role="4"
                >
                </textarea>
                <input className='designInput'
                       type="file"
                       id='file'
                       name='file'
                       {...register("file")} />
                <CustomButtonComponent
                btnText='Send'
                />
            </form>
        </div>
    );
}

export default UserCoachContact;