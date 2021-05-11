// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://www.stripe.com/docs/payments/integration-builder

import React, { useState } from "react";
import {
    CardElement, Elements, useElements, seStripe, useStripe
} from "@stripe/react-stripe-js";
import "./checkoutFlow.scss";

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#f34f",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: "#fce883"
            },
            "::placeholder": {
                color: "#87bbfd"
            }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
};

const CardField = ({ onChange }) => (
    <div className="FormRow">
        <CardElement options={CARD_OPTIONS} onChange={onChange} />
    </div>
);

const Field = ({
                   label,
                   id,
                   type,
                   placeholder,
                   required,
                   autoComplete,
                   value,
                   onChange
               }) => (
    <div className="FormRow">
        <label htmlFor={id} className="FormRowLabel">
            {label}
        </label>
        <input
            className="FormRowInput"
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
        />
    </div>
);


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [billingDetails, setBillingDetails] = useState({
        email: "",
        phone: "",
        name: ""
    });



    return (
        <form className="Form" >
            <fieldset className="FormGroup">
                <Field
                    label="Name"
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                    autoComplete="name"
                    value={billingDetails.name}
                    onChange={(e) => {
                        setBillingDetails({ ...billingDetails, name: e.target.value });
                    }}
                />
                <Field
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="janedoe@gmail.com"
                    required
                    autoComplete="email"
                    value={billingDetails.email}
                    onChange={(e) => {
                        setBillingDetails({ ...billingDetails, email: e.target.value });
                    }}
                />
                <Field
                    label="Phone"
                    id="phone"
                    type="tel"
                    placeholder="(941) 555-0123"
                    required
                    autoComplete="tel"
                    value={billingDetails.phone}
                    onChange={(e) => {
                        setBillingDetails({ ...billingDetails, phone: e.target.value });
                    }}
                />
            </fieldset>
            <fieldset className="FormGroup">
                <CardField
                    onChange={(e) => {
                        setError(e.error);
                        setCardComplete(e.complete);
                    }}
                />
            </fieldset>

        </form>
    );
};

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
        }
    ]
};


export default CheckoutForm;
