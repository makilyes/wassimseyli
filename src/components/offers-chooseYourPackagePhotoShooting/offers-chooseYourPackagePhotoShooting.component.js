import React, {useEffect, useState} from 'react';
import './offers-chooseYourPackagePhotoShooting.styles.scss'
import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import OffersCardsWithCheckComponent from "../offers-cardsWithCheck/offers-cardsWithCheck.component";
import CustomButtonComponent from "../custom-button/custom-button.component";
import {useDispatch} from "react-redux";
import {Carousel} from "antd";
import OffersCardsWithCheckResponsiveComponent
    from "../offers-cardsWithCheck-RESPONSIVE/offers-cardsWithCheck-Responsive.component";

function OffersChooseYourPackagePhotoShootingComponent(props) {

    const [active, setActive] = useState(1);
    const [titlePackageBranding, setTitlePackageBranding] = useState('1 photo');
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
            setTitlePackageBranding('1 photo')
            setPricePackageBranding(1200)
        }

        else if (x == 1) {
            setActive(2)
            setTitlePackageBranding('3 photo')
            setPricePackageBranding(2000)
        }

        else if (x == 2) {
            setActive(3)
            setTitlePackageBranding('5 photo')
            setPricePackageBranding(4000)
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
                        setTitlePackageBranding('1 photo')
                        setPricePackageBranding(1200)
                    }}
                    active = {active === 1 ? 'listing-active' : 'listing'}
                    titleCard='1 photo'
                    subtitleCard=''
                    pricePackage='$1200'
                    detailPrice=''
                />
                <OffersCardsWithCheckComponent
                    onClick={() => {
                        setActive(2)
                        setTitlePackageBranding('3 photo')
                        setPricePackageBranding(2000)
                    }}
                    active = {active === 2 ? 'listing-active' : 'listing'}
                    titleCard='3 photos'
                    subtitleCard='12 pages'
                    pricePackage='$2000'
                    detailPrice='(1 main + 2 different angles)'
                />
                <OffersCardsWithCheckComponent
                    onClick={() => {
                        setActive(3)
                        setTitlePackageBranding('5 photo')
                        setPricePackageBranding(4000)
                    }}
                    active = {active === 3 ? 'listing-active' : 'listing'}
                    titleCard='5 photos'
                    subtitleCard='25 pages'
                    pricePackage='$4000'
                    detailPrice='(1 main + 4 different angles)'
                />
            </div>
            <div className="chooseYourProject visible-phone">
                <Carousel afterChange={onChange}>
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(1)
                            setTitlePackageBranding('1 photo')
                            setPricePackageBranding(1200)
                        }}
                        active={active === 1 ? 'listing-active' : 'listing'}
                        titleCard='1 photo'
                        subtitleCard=''
                        pricePackage='$1200'
                        detailPrice=''
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(2)
                            setTitlePackageBranding('3 photo')
                            setPricePackageBranding(2000)
                        }}
                        active={active === 2 ? 'listing-active' : 'listing'}
                        titleCard='3 photos'
                        subtitleCard='12 pages'
                        pricePackage='$2000'
                        detailPrice='(1 main + 2 different angles)'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(3)
                            setTitlePackageBranding('5 photo')
                            setPricePackageBranding(4000)
                        }}
                        active={active === 3 ? 'listing-active' : 'listing'}
                        titleCard='5 photos'
                        subtitleCard='25 pages'
                        pricePackage='$4000'
                        detailPrice='(1 main + 4 different angles)'
                    />
                </Carousel>
            </div>
        </div>
    );
}

export default OffersChooseYourPackagePhotoShootingComponent;
