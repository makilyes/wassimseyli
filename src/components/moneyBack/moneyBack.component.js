import React from 'react';
import './moneyBack.styles.scss'
import paymenticon from '../../assests/payment-icon.jpg'

function MoneyBackComponent(props) {
    return (
        <div className="accepted-payment">
            <span className="boldSpan">You will not be charged until we agreed the project together ❤</span>
            <span>Accepted Payment Methods</span>


            <img src={paymenticon} alt=""/>


        </div>
    );
}

export default MoneyBackComponent;
