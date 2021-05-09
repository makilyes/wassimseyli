import React, {useEffect, useState} from 'react';
import './offers-numbersOfPages.styles.scss'
import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";

function OffersNumbersOfPagesComponent(props) {

    const dispatch = useDispatch()


    let [counterPages, setCounterPages] = useState(0)
    const [totalPages, setTotalPages] = useState(15)


    const updateNumberPages = () => {
        dispatch({
            type: "NUMB_PAGES_WEBSITE",
            payload: {counterPages}
        })
    }

    useEffect(() => {
        updateNumberPages();
    }, [counterPages, setCounterPages]);

    // const calculate = (counterPages) => {
    //     let total = counterPages * 20;
    //     return total
    // }

    const handleIncrement = () => {
        setCounterPages(prevCounter => prevCounter + 1)
    }

    const handleDecrement = () => {
        setCounterPages(prevCounter => prevCounter - 1)
    }

    return (
        <div className='numberOfPagesComponent'>
            <OffersTitleCardComponent
                titleNumber='4'
                titleSection='Number of pages'
            />
            <div className='counterNumberPages'>

                <FontAwesomeIcon icon={faMinus} onClick={() => {
                    handleDecrement();
                }}/>

                <span className='counterNumber'>{counterPages}</span>
                <FontAwesomeIcon icon={faPlus} onClick={ () => {
                    handleIncrement();
                }}/>
            </div>
        </div>
    );
}

export default OffersNumbersOfPagesComponent;
