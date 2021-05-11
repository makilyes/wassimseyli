import React from 'react';
import './checkoutFlow.scss'
import imgYourCart from "../../assests/yourCart.png";

function PersonnalInformation(props) {
    return (
        <div className='personal-information'>
            <div className="personalInformationDiv">
                <h1>Your personnal information</h1>
                <div className="col1">
                    <form className="personal-information-form">
                        <input type="text" name="fullname" id="fullname" placeholder="Fullname"/>
                        <input type="email" name="email" id="email" placeholder="Email"/>
                        <div className="countryAndCity">
                            <input type="text" name="country" id="country" placeholder="Country"/>
                            <input type="text" name="city" id="city" placeholder="City"/>
                        </div>
                        <div className="streetAndZip">
                            <input type="text" name="streetName" id="streetName" placeholder="Street Name"/>
                            <input type="number" name="zipcode" id="zipcode" placeholder="Zip Code"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col2">
                <img className="imgYourCart" src={imgYourCart} alt=""/>
            </div>
        </div>
    );
}

export default PersonnalInformation;