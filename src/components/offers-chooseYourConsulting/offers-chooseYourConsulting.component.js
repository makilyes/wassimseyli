import React, {useEffect, useState} from 'react';
import './offers-chooseYourConsulting.styles.scss'
import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import OffersCardsWithCheckComponent from "../offers-cardsWithCheck/offers-cardsWithCheck.component";
import CustomButtonComponent from "../custom-button/custom-button.component";
import {useDispatch} from "react-redux";
import {Carousel} from "antd";
import OffersCardsWithCheckResponsiveComponent
    from "../offers-cardsWithCheck-RESPONSIVE/offers-cardsWithCheck-Responsive.component";

function OffersChooseYourConsultingComponent(props) {

    const [active, setActive] = useState(1)
    const [titlePackageConsulting, setTitlePackageConsulting] = useState('1 hour')
    const [pricePackageConsulting, setPricePackageConsulting] = useState(1200)

    const dispatch = useDispatch();

    const updatePackageConsulting = () => {
        dispatch({
            type: "PACKAGE_CONSULTING",
            payload: {titlePackageConsulting, pricePackageConsulting}
        })
    }

    useEffect( () => {
        updatePackageConsulting();
        console.log(titlePackageConsulting)
    }, [titlePackageConsulting, setTitlePackageConsulting])

    const onChange = (x) => {
        console.log(x)
        if (x == 0) {
            setActive(1)
            setTitlePackageConsulting('1 hour')
            setPricePackageConsulting(1200)
        }

        else if (x == 1) {
            setActive(2)
            setTitlePackageConsulting('2 hours')
            setPricePackageConsulting(2000)
        }

        else if (x == 2) {
            setActive(3)
            setTitlePackageConsulting('4 hours')
            setPricePackageConsulting(4000)
        }
        else if (x == 3) {
            setActive(4)
            setTitlePackageConsulting('24 hours')
            setPricePackageConsulting(4000)
        }
    }


    return (
        <div>
            <OffersTitleCardComponent
                titleNumber='3'
                titleSection='Choose your package'
            />
            <div className="chooseYourProject visible-desktop flex-X">
                <OffersCardsWithCheckComponent
                    onClick = { () => {
                        setActive(1)
                        setTitlePackageConsulting('1 hour')
                        setPricePackageConsulting(1200)
                    }}
                    active = {active === 1 ? 'listing-active' : 'listing'}
                    titleCard='1 hour'
                    pricePackage='$1200'
                    detailPrice='(coaching session of 1 hour)'
                />
                <OffersCardsWithCheckComponent
                    onClick = { () => {
                        setActive(2)
                        setTitlePackageConsulting('2 hours')
                        setPricePackageConsulting(2000)
                    }}
                    active = {active === 2 ? 'listing-active' : 'listing'}
                    titleCard='2 hours'
                    pricePackage='$2000'
                    detailPrice='(coaching session of 2 hours)'
                />
                <OffersCardsWithCheckComponent
                    onClick = { () => {
                        setActive(3)
                        setTitlePackageConsulting('4 hours')
                        setPricePackageConsulting(4000)
                    }}
                    active = {active === 3 ? 'listing-active' : 'listing'}
                    titleCard='4 hours'
                    pricePackage='$4000'
                    detailPrice='(A package of 4 hours, that you can dispatch when you need help )'
                />
                <OffersCardsWithCheckComponent
                    onClick = { () => {
                        setActive(4)
                        setTitlePackageConsulting('24 hours')
                        setPricePackageConsulting(4000)

                    }}
                    active = {active === 4 ? 'listing-active' : 'listing'}
                    titleCard='24 hours'
                    pricePackage='$4000'
                    detailPrice='(24 hours at my home in Dubai)'
                />


            </div>
            <div className="chooseYourProject visible-phone">
                <Carousel afterChange={onChange}>
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(1)
                            setTitlePackageConsulting('1 hour')
                            setPricePackageConsulting(1200)
                        }}
                        active={active === 1 ? 'listing-active' : 'listing'}
                        titleCard='1 hour'
                        pricePackage='$1200'
                        detailPrice='(coaching session of 1 hour)'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(2)
                            setTitlePackageConsulting('2 hours')
                            setPricePackageConsulting(2000)
                        }}
                        active={active === 2 ? 'listing-active' : 'listing'}
                        titleCard='2 hours'
                        pricePackage='$2000'
                        detailPrice='(coaching session of 2 hours)'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(3)
                            setTitlePackageConsulting('4 hours')
                            setPricePackageConsulting(4000)
                        }}
                        active={active === 3 ? 'listing-active' : 'listing'}
                        titleCard='4 hours'
                        pricePackage='$4000'
                        detailPrice='(A package of 4 hours, that you can dispatch when you need help )'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(4)
                            setTitlePackageConsulting('24 hours')
                            setPricePackageConsulting(4000)

                        }}
                        active={active === 4 ? 'listing-active' : 'listing'}
                        titleCard='24 hours'
                        pricePackage='$4000'
                        detailPrice='(24 hours at my home in Dubai)'
                    />
                </Carousel>
            </div>
        </div>
    );
}

export default OffersChooseYourConsultingComponent;
