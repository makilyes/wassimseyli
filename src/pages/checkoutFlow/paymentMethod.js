import React from 'react';
import {CardElement} from "@stripe/react-stripe-js";
import imgYourCart from "../../assests/yourCart.png";
import creditCard from "../../assests/credit-card.png"
import paypalCard from "../../assests/paypal.png"
import {ReactComponent as userSvg} from "../../assests/user-svg.svg";
import {ReactComponent as shoppingCartSvg} from "../../assests/shopping-cart-svg.svg";

function PaymentMethod(props) {

    const CARD_OPTIONS = {
        iconStyle: "solid",
        style: {
            base: {
                lineHeight: "60px",
                iconColor: "#cdcdcd",
                color: "#f34f",
                fontWeight: 500,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": {
                    color: "#fce883"
                },
                "::placeholder": {
                    color: "#d7d7d7"
                }
            },
            invalid: {
                iconColor: "#c65555",
                color: "#c65555"
            }
        }
    };

    return (
        <div className="payment-method">
            {/*//Fill the svg depending on the page*/}
            <div className="col1">
                <h1>Select a payment method</h1>
                <div className="selectMethod">
                    <div className="card">
                        <img className="creditCard" src={creditCard} alt=""/>
                        <p>Card</p>
                    </div>
                    <div className="paypal">
                        <img className="paypalCard" src={paypalCard} alt=""/>
                        <p>Paypal</p>
                    </div>
                </div>
                <form>
                    <p>My credit card</p>
                    <p className="willNotBeChargeParagraph">You will not be charged until we agreed the project together ❤</p>
                    <CardElement options={CARD_OPTIONS}/>
                    <button
                        // disabled={processing || disabled || succeeded}
                        id="submit"
                    >
                    {/*<span id="button-text">*/}
                    {/*{processing ? (*/}
                    {/*    <div className="spinner" id="spinner"></div>) : ("Pay now")}*/}
                    {/*</span>*/}
                        Pay now
                    </button>
                </form>
            </div>
            <userSvg fill="blue" stroke="blue" />
            <shoppingCartSvg/>

            <div className="col2">
                <img className="imgYourCart" src={imgYourCart} alt=""/>
            </div>

        </div>
    );
}

export default PaymentMethod;