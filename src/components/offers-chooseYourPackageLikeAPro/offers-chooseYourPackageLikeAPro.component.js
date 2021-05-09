import React, {useEffect, useState} from 'react';
import './offers-chooseYourPackageLikeAPro.styles.scss'
import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import OffersCardsWithCheckComponent from "../offers-cardsWithCheck/offers-cardsWithCheck.component";
import CustomButtonComponent from "../custom-button/custom-button.component";
import {useDispatch} from "react-redux";
import {Carousel} from "antd";
import OffersCardsWithCheckResponsiveComponent
    from "../offers-cardsWithCheck-RESPONSIVE/offers-cardsWithCheck-Responsive.component";

function OffersChooseYourPackageLikeAProComponent(props) {

    const dispatch = useDispatch()

    const [active, setActive] = useState(1)
    const [titlePackageLikeAPro, setTitlePackageLikeAPro] = useState('Small Business')
    const [pricePackageLikeAPro, setPricePackageLikeAPro] = useState(1200)

    const updatePackageLikeAPro = () => {
        dispatch({
            type: "PACKAGE_WEBSITE",
            payload: {titlePackageLikeAPro, pricePackageLikeAPro}
        })
    }

    useEffect( () => {
        updatePackageLikeAPro()
    }, [titlePackageLikeAPro, setTitlePackageLikeAPro, pricePackageLikeAPro, setPricePackageLikeAPro])


    const onChange = (x) => {
        console.log(x)
        if (x == 0) {
            setActive(1)
            setTitlePackageLikeAPro('Small Business')
            setPricePackageLikeAPro(1200)
        }

        else if (x == 1) {
            setActive(2)
            setTitlePackageLikeAPro('Medium Business')
            setPricePackageLikeAPro(2000)
        }
        else if (x == 2) {
            setActive(3)
            setTitlePackageLikeAPro('Large Business')
            setPricePackageLikeAPro(4000)
        }
        else if (x == 3) {
            setActive(4)
            setTitlePackageLikeAPro('Enterprise')
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
                        setTitlePackageLikeAPro('Small Business')
                        setPricePackageLikeAPro(1200)
                    }}
                    active={active === 1 ? 'listing-active' : 'listing'}
                    titleCard='Small Business'
                    subtitleCard='5 pages'
                    pricePackage='$1200'
                    detailPrice='(1 home page + 4 unique templates)'
                />
                <OffersCardsWithCheckComponent
                    onClick={() => {
                        setActive(2)
                        setTitlePackageLikeAPro('Medium Business')
                        setPricePackageLikeAPro(2000)
                    }
                    }
                    active={active === 2 ? 'listing-active' : 'listing'}
                    titleCard='Medium Business'
                    subtitleCard='12 pages'
                    pricePackage='$2000'
                    detailPrice='(1 home page + 7 unique Templates + 4 Adaptations)'
                />
                <OffersCardsWithCheckComponent
                    onClick={() => {
                        setActive(3)
                        setTitlePackageLikeAPro('Large Business')
                        setPricePackageLikeAPro(4000)
                    }}
                    active={active === 3 ? 'listing-active' : 'listing'}
                    titleCard='Large Business'
                    subtitleCard='25 pages'
                    pricePackage='$4000'
                    detailPrice='(1 home page + 15 unique Templates + 10 Adaptations)'
                />
                    <OffersCardsWithCheckComponent
                        onClick={() => { 
                        setActive(4)    
                        setTitlePackageLikeAPro('Enterprise')
                        setPricePackageLikeAPro(0) }}
                        active={active === 4 ? 'listing-active' : 'listing'}
                        titleCard='Enterprise'
                        subtitleCard='30 pages and above'
                        customButton={true}
                    />
            </div>
            <div className="chooseYourProject visible-phone">
                <Carousel afterChange={onChange}>
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(1)
                            setTitlePackageLikeAPro('Small Business')
                            setPricePackageLikeAPro(1200)
                        }}
                        active={active === 1 ? 'listing-active' : 'listing'}
                        titleCard='Small Business'
                        subtitleCard='5 pages'
                        pricePackage='$1200'
                        detailPrice='(1 home page + 4 unique templates)'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(2)
                            setTitlePackageLikeAPro('Medium Business')
                            setPricePackageLikeAPro(2000)
                        }
                        }
                        active={active === 2 ? 'listing-active' : 'listing'}
                        titleCard='Medium Business'
                        subtitleCard='12 pages'
                        pricePackage='$2000'
                        detailPrice='(1 home page + 7 unique Templates + 4 Adaptations)'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(3)
                            setTitlePackageLikeAPro('Large Business')
                            setPricePackageLikeAPro(4000)
                        }}
                        active={active === 3 ? 'listing-active' : 'listing'}
                        titleCard='Large Business'
                        subtitleCard='25 pages'
                        pricePackage='$4000'
                        detailPrice='(1 home page + 15 unique Templates + 10 Adaptations)'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => setActive(4)}
                        active={active === 4 ? 'listing-active' : 'listing'}
                        titleCard='Enterprise'
                        subtitleCard='30 pages and above'
                        customButton={true}
                    />
                </Carousel>
            </div>
        </div>
    );
}

export default OffersChooseYourPackageLikeAProComponent;
