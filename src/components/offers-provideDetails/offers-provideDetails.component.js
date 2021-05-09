import React from 'react';
import './offers-provideDetails.styles.scss'

function OffersProvideDetailsComponent(props) {
    return (
        <div className='blocClientDetails'>
            <h3>PROVIDE YOUR DETAILS</h3>
            <div className="dataClientDetails">
                <input disabled type="text" value={sessionStorage.getItem("name")} name='name' placeholder='Name'/>
                <input disabled type="email" name='email' value={sessionStorage.getItem("username")} placeholder='Email'/>
                <input disabled type="number" name='phoneNumber' value={sessionStorage.getItem("phone")} placeholder='Phone Number'/>
            </div>
        </div>
    );
}

export default OffersProvideDetailsComponent;
