import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import StripeButton from "../payment/stripeButton";
import "./offers-jobSummary.styles.scss";

function OffersJobSummaryComponent(props) {
  const [cartData, setCartData] = useState([]);
  const [price, setPrice] = useState(0);
  const [cartUpdate, setCartUpdate] = useState(props.updated);

  const calculatePrice = (data) => {
    var tPrice = 0;
    if (data.length > 0) {
      data.map((item) => {
        tPrice += item.price;
      });
      setPrice(tPrice);
    }
  };

  const deleteCartItem = async (id) => {
    if (
      sessionStorage.getItem("authenticated") &&
      sessionStorage.getItem("authenticated") == "true"
    ) {
      const response = await axios.delete(
        `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/deleteCartProduct/${id}`
      );

      if (response.status == 200) {
        getUserCart();
        calculatePrice(response.data);
      }
    }
  };

  const getUserCart = async () => {
    if (
      sessionStorage.getItem("authenticated") &&
      sessionStorage.getItem("authenticated") == "true"
    ) {
      const response = await axios.get(
        `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/getCartByUser/${sessionStorage.getItem("userId")}`
      );

      if (response.status == 200) {
        setCartData(response.data);
        calculatePrice(response.data);
      }
    }
  };

  useEffect(() => {
    getUserCart();
    setCartUpdate(props.updated);
  }, [props, price]);

  if (cartData.length > 0) {
    return (
      <div className="total-summaryDiv">
        <h3 className="yourJobSummary-title">YOUR JOB SUMMARY</h3>
        <div className="summary-div">
          <h3>Cart</h3>
          <div className="summary-jobs">
            <ul className="job-items">
              <li className="job-item">
                <p className="job-price">Order</p>
                <p className="job-price">Package</p>
                <p className="job-price">$</p>
                <p className="job-price">
                  {" "}
                  <FontAwesomeIcon icon={faTrash} />
                </p>
              </li>
              {cartData.map((item) => (
                <li key={item.id} className="job-item">
                  <p className="job-title">{item.orderType}</p>
                  <p className="job-title">{item.packageType}</p>
                  <p className="job-price">{item.price}$</p>
                  <p className="job-price">
                    {" "}
                    <FontAwesomeIcon
                      onClick={() => deleteCartItem(item.id)}
                      icon={faTrash}
                    />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="summary-total">
          <h3 className="title-estimatedTotal">Estimated Total</h3>
          <p className="total-price">{price}$</p>
          <br />
          <center>
            <p>
              <StripeButton updateCart={getUserCart} price={price} />
            </p>
          </center>
        </div>
      </div>
    );
  } else {
    return (
      <div className="total-summaryDiv">
        <h3 className="yourJobSummary-title">YOUR JOB SUMMARY</h3>
        <div className="summary-div">
          <h3>Cart</h3>
          <div className="summary-jobs">
            <ul className="job-items">
              <li className="job-item">
                <p className="job-price">Order</p>
                <p className="job-price">Package</p>
                <p className="job-price">$</p>
                <p className="job-price">
                  {" "}
                  <FontAwesomeIcon icon={faTrash} />
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="summary-total">
          <h3 className="title-estimatedTotal">Estimated Total</h3>
          <p className="total-price">0$</p>
        </div>
      </div>
    );
  }
}

export default OffersJobSummaryComponent;
