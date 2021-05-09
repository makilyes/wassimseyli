import React, {useEffect, useState} from 'react';
import './offers-woocommerce.styles.scss'
import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import OffersNumbersOfProductsComponent from "../offers-numbersOfProducts/offers-numbersOfProducts.component";
import {useDispatch} from "react-redux";



function OffersWoocommerceComponent(props) {

    const dispatch = useDispatch()

    const [priceWooCommerce, setPriceWoocommerce] = useState(0);
    const [active, setActive] = useState(false)

    const updateWoocommerce = () => {
        dispatch({
            type: "WOOCOMMERCE",
            payload: {priceWooCommerce, active}
        })
    }

    const updatePriceWoocommerce = () => {
        if(active == true) {
            setPriceWoocommerce(79)
        } else {
            setPriceWoocommerce(0)
        }
    }

    useEffect(() => {
        updateWoocommerce();
        updatePriceWoocommerce();
    }, [priceWooCommerce, setPriceWoocommerce, active, setActive])

    // useEffect(() => {
    //     updateWoocommerce();
    //     updatePriceWoocommerce();
    // }, [updateWoocommerce(), updatePriceWoocommerce()]);

    return (
        <div className='OffersWoocommerceComponent'>
            <OffersTitleCardComponent
                titleNumber='5'
                titleSection='Want to use wordpress to make an ecommerce website?'
            />
            <input className='inputCheckbox'
                   type="checkbox"
                   name='woocommerce'
                   id='woocommerce'
                   onClick={()=> {
                       setActive(!active);
                       updatePriceWoocommerce();
                       // active ? setPriceWoocommerce(79) : setPriceWoocommerce(0);
                   }}/>
            <label className='wooCommerceLabel' htmlFor="woocommerce"> Woocommerce</label>
            <span className='priceWoocommerce'>$79</span>
            {active &&  (
                <OffersNumbersOfProductsComponent/>

            )}
        </div>
    );
}

export default OffersWoocommerceComponent;
