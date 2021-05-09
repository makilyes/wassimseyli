import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const StripeButton = ({ price, updateCart }) => {
  const publishableKey = "pk_test_uDA6moUBkTqeaDEOK5TdZp7700kyuwEHhe";
  const stripePrice = price * 100;

  const user = useSelector((state) => state.userReducer?.user);

  useEffect(() => {}, [user, price]);

  const onToken = async (token) => {
    const response = await axios.post("http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/payment", {
      amount: stripePrice,
      token,
      stripeEmail: user?.username || sessionStorage.getItem("username"),
    });
    if (response.status === 200) {
      updateCart();
      toast("Payment Successful", {
        type: "info",
      });
    } else if (response.status === 500) {
      toast("Server Error, payment not successful", {
        type: "error",
      });
    }
  };

  return (
    <StripeCheckout
      amount={stripePrice}
      label="Pay Now"
      name="Makria Agency"
      image="https://svgshare.com/i/CUz.svg"
      description={`Paying  $${price}`}
      panelLabel="Pay Now"
      token={onToken}
      email={user?.username || sessionStorage.getItem("username")}
      stripeKey={publishableKey}
      currency="USD"
    />
  );
};

export default StripeButton;
