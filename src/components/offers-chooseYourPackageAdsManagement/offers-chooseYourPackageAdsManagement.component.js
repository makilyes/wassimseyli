import React, {useEffect, useState} from 'react';
import './offers-chooseYourAdsManagement.styles.scss'
import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import OffersCardsWithCheckComponent from "../offers-cardsWithCheck/offers-cardsWithCheck.component";
import CustomButtonComponent from "../custom-button/custom-button.component";
import {useDispatch} from "react-redux";
import {Carousel} from "antd";
import OffersCardsWithCheckResponsiveComponent
    from "../offers-cardsWithCheck-RESPONSIVE/offers-cardsWithCheck-Responsive.component";

function OffersChooseYourPackageAdsManagementComponent(props) {

    const [active, setActive] = useState(1)
    const [titlePackageBranding, setTitlePackageBranding] = useState('Spend Up to $3,000');
    const [pricePackageBranding, setPricePackageBranding] = useState(350);

    const dispatch = useDispatch()

    const updateTypePackageBranding = () => {
        dispatch({
            type: 'TYPE_PACKAGE_BRANDING',
            payload: {titlePackageBranding, pricePackageBranding}
        })
    }

    useEffect( () => {
        updateTypePackageBranding()
    }, [titlePackageBranding, setTitlePackageBranding ])

    const onChange = (x) => {
        console.log(x)
        if (x == 0) {
            setActive(1)
            setTitlePackageBranding('Up to $3,000')
            setPricePackageBranding(350)
        }

        else if (x == 1) {
            setActive(2)
            setTitlePackageBranding('$3,001 - $5,000')
            setPricePackageBranding(500);
        }

        else if (x == 2) {
            setActive(3)
            setTitlePackageBranding('$5,001 - $10,000')
            setPricePackageBranding(700)
        }
        else if (x == 3) {
            setActive(4)
            setTitlePackageBranding('$10,001 and more')
            setPricePackageBranding(1200)
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
                    onClick={() => {
                        setActive(1)
                        setTitlePackageBranding('Spend Up to $3,000')
                        setPricePackageBranding(350)
                    }}
                    active={active === 1 ? 'listing-active' : 'listing'}
                    titleCard='Monthly Media Spend'
                    subtitleCard='Up to $3,000'
                    pricePackage='$350'
                    detailPrice=''
                />
                <OffersCardsWithCheckComponent
                    onClick = { () => {
                        setActive(2)
                        setTitlePackageBranding('Spend Up to $3,001-5,001')
                        setPricePackageBranding(500)
                    }}
                    active = {active === 2 ? 'listing-active' : 'listing'}
                    titleCard='Monthly Media Spend'
                    subtitleCard='$3,001 - $5,000'
                    pricePackage='$500'
                    detailPrice=''
                />
                <OffersCardsWithCheckComponent
                    onClick = { () => {
                        setActive(3)
                        setTitlePackageBranding('Spend Up to $5,001-10,000')
                        setPricePackageBranding(700)
                    }}
                    active = {active === 3 ? 'listing-active' : 'listing'}
                    titleCard='Monthly Media Spend'
                    subtitleCard='$5,001 - $10,000'
                    pricePackage='$700'
                    detailPrice=''
                />

                <OffersCardsWithCheckComponent
                    onClick = { () => {
                        setActive(4)
                        setTitlePackageBranding('Spend Up to $10,001 and more')
                        setPricePackageBranding(1200)
                    }}
                    active = {active === 4 ? 'listing-active' : 'listing'}
                    titleCard='Monthly Media Spend'
                    subtitleCard='$10,001 and more'
                    pricePackage='$1,200'
                    detailPrice=''
                />
            </div>
            <div className="chooseYourProject visible-phone">
                <Carousel afterChange={onChange}>
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(1)
                            setTitlePackageBranding('Spend Up to $3,000')
                            setPricePackageBranding(350)
                        }}
                        active={active === 1 ? 'listing-active' : 'listing'}
                        titleCard='Monthly Media Spend'
                        subtitleCard='Up to $3,000'
                        pricePackage='$350'
                        detailPrice=''
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(2)
                            setTitlePackageBranding('Spend Up to $3,001-5,001')
                            setPricePackageBranding(500)
                        }}
                        active={active === 2 ? 'listing-active' : 'listing'}
                        titleCard='Monthly Media Spend'
                        subtitleCard='$3,001 - $5,000'
                        pricePackage='$500'
                        detailPrice=''
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(3)
                            setTitlePackageBranding('Spend Up to $5,001-10,000')
                            setPricePackageBranding(700)
                        }}
                        active={active === 3 ? 'listing-active' : 'listing'}
                        titleCard='Monthly Media Spend'
                        subtitleCard='$5,001 - $10,000'
                        pricePackage='$700'
                        detailPrice=''
                    />

                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(4)
                            setTitlePackageBranding('Spend Up to $10,001 and more')
                            setPricePackageBranding(1200)
                        }}
                        active={active === 4 ? 'listing-active' : 'listing'}
                        titleCard='Monthly Media Spend'
                        subtitleCard='$10,001 and more'
                        pricePackage='$1,200'
                        detailPrice=''
                    />
                </Carousel>
            </div>

        </div>
    );
}

export default OffersChooseYourPackageAdsManagementComponent;
