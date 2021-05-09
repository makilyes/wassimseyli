import React, {useEffect, useState} from 'react';
import './offers-numbersOfProducts.styles.scss'
import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";

function OffersNumbersOfProductsComponent(props) {


    const dispatch = useDispatch()

    let [counterProducts, setCounterProducts] = useState(0)
    const [totalPriceProducts, setTotalPriceProducts] = useState(15)

    const updateNumberProducts = () => {
        dispatch({
            type: "NUMB_PRODUCTS_WEBSITE",
            payload: {counterProducts}
        })
    }

    // useEffect(() => {
    //     updateNumberProducts();
    // }, [updateNumberProducts()]);


 // const calculate = (counterProducts) => {
 //        let total = counterProducts * 20;
 //        return total
 // }

    useEffect(() => {
        updateNumberProducts()
    }, [counterProducts, setCounterProducts])


    const handleIncrement = () => {
        setCounterProducts(prevCounter => prevCounter + 1)
    }

    const handleDecrement = () => {
        setCounterProducts(prevCounter => prevCounter - 1)
    }

    return (
        <div className='numberOfProductsComponent'>
            <OffersTitleCardComponent
                titleNumber='4'
                titleSection='Number of products'
            />
            <div className='counterNumberProducts'>

                <FontAwesomeIcon icon={faMinus}
                                 onClick={() => {
                                     handleDecrement();
                                     updateNumberProducts();

                                 }}/>

                <span className='counterNumber'>{counterProducts}</span>
                <FontAwesomeIcon icon={faPlus}
                                 onClick={() => {
                                     handleIncrement();
                                 }}/>
            </div>
        </div>
    );
}

export default OffersNumbersOfProductsComponent;
