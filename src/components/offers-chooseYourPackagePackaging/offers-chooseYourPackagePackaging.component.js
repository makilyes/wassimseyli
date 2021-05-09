import React, {useEffect, useState} from 'react';
import './offers-chooseYourPackagePackaging.styles.scss'
import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import OffersCardsWithCheckComponent from "../offers-cardsWithCheck/offers-cardsWithCheck.component";
import CustomButtonComponent from "../custom-button/custom-button.component";
import {useDispatch} from "react-redux";
import {Carousel} from "antd";
import OffersCardsWithCheckResponsiveComponent
    from "../offers-cardsWithCheck-RESPONSIVE/offers-cardsWithCheck-Responsive.component";

function OffersChooseYourPackagePackagingComponent(props) {

    const [active, setActive] = useState(1);
    const [titlePackageBranding, setTitlePackageBranding] = useState('Product Packaging');
    const [pricePackageBranding, setPricePackageBranding] = useState(1200);

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
            setTitlePackageBranding('Product Packaging')
            setPricePackageBranding(1200)
        }

        else if (x == 1) {
            setActive(2)
            setTitlePackageBranding('Box packaging')
            setPricePackageBranding(2000)
        }

        else if (x == 2) {
            setActive(3)
            setTitlePackageBranding('Cosmetic packaging')
            setPricePackageBranding(4000)
        }
        else if (x == 3) {
            setActive(4)
            setTitlePackageBranding('Stickers')
            setPricePackageBranding(5000)
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
                        setTitlePackageBranding('Product Packaging')
                        setPricePackageBranding(1200)
                    }}
                    active={active === 1 ? 'listing-active' : 'listing'}
                    titleCard='Product Packaging'
                    subtitleCard=''
                    pricePackage='$1200'
                    detailPrice='(4 propositions)'
                />
                <OffersCardsWithCheckComponent
                    onClick = { () => {
                        setActive(2)
                        setTitlePackageBranding('Box packaging')
                        setPricePackageBranding(2000)
                    }}
                    active = {active === 2 ? 'listing-active' : 'listing'}
                    titleCard='Box packaging'
                    subtitleCard=''
                    pricePackage='$2000'
                    detailPrice='(4 propositions)'
                />
                <OffersCardsWithCheckComponent
                    onClick = { () => {
                        setActive(3)
                        setTitlePackageBranding('Cosmetic packaging')
                        setPricePackageBranding(4000)
                    }}
                    active = {active === 3 ? 'listing-active' : 'listing'}
                    titleCard='cosmetic packaging'
                    subtitleCard=''
                    pricePackage='$4000'
                    detailPrice='(4 propositions)'
                />
                <OffersCardsWithCheckComponent
                    onClick = { () => {
                        setActive(4)
                        setTitlePackageBranding('Stickers')
                        setPricePackageBranding(5000)
                    }}
                    active = {active === 4 ? 'listing-active' : 'listing'}
                    titleCard='stickers'
                    subtitleCard=''
                    pricePackage='$5000'
                    detailPrice='(4 propositions)'
                />
            </div>
            <div className="chooseYourProject visible-phone">
                <Carousel afterChange={onChange}>
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(1)
                            setTitlePackageBranding('Product Packaging')
                            setPricePackageBranding(1200)
                        }}
                        active={active === 1 ? 'listing-active' : 'listing'}
                        titleCard='Product Packaging'
                        subtitleCard=''
                        pricePackage='$1200'
                        detailPrice='(4 propositions)'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(2)
                            setTitlePackageBranding('Box packaging')
                            setPricePackageBranding(2000)
                        }}
                        active={active === 2 ? 'listing-active' : 'listing'}
                        titleCard='Box packaging'
                        subtitleCard=''
                        pricePackage='$2000'
                        detailPrice='(4 propositions)'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(3)
                            setTitlePackageBranding('Cosmetic packaging')
                            setPricePackageBranding(4000)
                        }}
                        active={active === 3 ? 'listing-active' : 'listing'}
                        titleCard='cosmetic packaging'
                        subtitleCard=''
                        pricePackage='$4000'
                        detailPrice='(4 propositions)'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(4)
                            setTitlePackageBranding('Stickers')
                            setPricePackageBranding(5000)
                        }}
                        active={active === 4 ? 'listing-active' : 'listing'}
                        titleCard='stickers'
                        subtitleCard=''
                        pricePackage='$5000'
                        detailPrice='(4 propositions)'
                    />
                </Carousel>
            </div>
        </div>
    );
}

export default OffersChooseYourPackagePackagingComponent;
