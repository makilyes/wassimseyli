import React, {useState} from 'react';
import './contactUs.styles.scss'
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import axios from 'axios'
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';

function ContactUsComponent(props) {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const {isSubmitted, isSubmitSuccessful} = useForm();
    const onSubmit = async (data) => {

        const body = {
            message: data.message,
            email: data.email,
            type : data.object,
            name : data.name
        }

        try {
            const response = await axios.post('http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/addContact', body);
            if (response.status === 200) {
                toast("Your request has been recieved. We will get back to you shortly", {
                    type: "success",
                });
            } else if (response.status === 500) {
                toast("An error occured.Try Again", {
                    type: "error",
                });
            }
        } catch (err) {
            toast("An error occured.Try Again", {
                type: "error",
            });
        }
    }

    return (
        <div>
            <div className="contactUs-component">
                <h1>How can I help ?</h1>
                <p className="firstParagraph">Do you have a question or are you interested in working with my team and
                    me
                    ?</p>
                <p>Just fill out the form fields below</p>
                <form className='contactForm' onSubmit={handleSubmit(onSubmit)}>
                    <select className='select-contactForm designInput' name="object" id="object"  {...register("object", {required: true})} >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Consulting Inquiry">Consulting Inquiry</option>
                        <option value="Course Inquiry">Course Inquiry</option>
                        <option value="Store Feedback">Store Feedback</option>
                  
                    </select>
                    {errors.object && <span className='errorForm'>This is required</span>}
                  
                    <input placeholder="name" className='designInput' type="text" id='name' name='name'     {...register("name", {required: true})} />
                    {errors.name && <span className='errorForm'>Your Name is required</span>}
                 
                    <input placeholder="email" className='designInput' type="email" id='email' name='email'     {...register("email", {required: true})} />
                    {errors.email && <span className='errorForm'>Your Email is required</span>}
                  
                  
                  
                  
                    <textarea placeholder="Message [remember, short & sweet please]" className='textArea-contactForm designTextArea' name="message" id="message" cols="30" rows="10" {...register("message", {required: true})}></textarea>
                    {errors.message && <span className='errorForm'>Your Message is required</span>}
                 
                    <CustomButtonComponent
                        btnText="Submit"
                    />
                </form>
            </div>
            <div className='contactUs-section2'>
                <h2 className='contactUsTitle-section2'>Or connect with me on ...</h2>
                <ul className='socialMediaList-section2'>
                    <li>
                        <a className='listBlock-section' href="/">
                            <span className='title-socialMedia'>Twitter</span>
                            <FontAwesomeIcon icon={faTwitter} size='4x' color='grey'/>
                        </a>
                    </li>
                    <li>
                        <a className='listBlock-section' href="/">
                            <span className='title-socialMedia'>Facebook</span>
                            <FontAwesomeIcon icon={faFacebook} size='4x' color='grey'/>
                        </a>
                    </li>
                    <li>
                        <a className='listBlock-section' href="/">
                            <span className='title-socialMedia'>LinkedIn</span>
                            <FontAwesomeIcon icon={faLinkedin} size='4x' color='grey'/>
                        </a>
                    </li>
                    <li>
                        <a className='listBlock-section' href="/">
                            <span className='title-socialMedia'>Instagram</span>
                            <FontAwesomeIcon icon={faInstagram} size='4x' color='grey'/>
                        </a>
                    </li>
                </ul>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ContactUsComponent;
