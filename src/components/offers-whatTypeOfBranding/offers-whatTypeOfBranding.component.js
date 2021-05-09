import React, {useEffect, useState} from 'react';
import './offers-whatTypeOfBranding.styles.scss'

import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import OffersCardsWithCheckComponent from "../offers-cardsWithCheck/offers-cardsWithCheck.component";
import OffersChooseYourPackagePhotoShootingComponent
    from "../offers-chooseYourPackagePhotoShooting/offers-chooseYourPackagePhotoShooting.component";
import OffersChooseYourPackagePackagingComponent
    from "../offers-chooseYourPackagePackaging/offers-chooseYourPackagePackaging.component";
import OffersChooseYourPackageAdsManagementComponent
    from "../offers-chooseYourPackageAdsManagement/offers-chooseYourPackageAdsManagement.component";
import {useDispatch} from "react-redux";
import {Carousel} from "antd";
import OffersCardsWithCheckResponsiveComponent
    from "../offers-cardsWithCheck-RESPONSIVE/offers-cardsWithCheck-Responsive.component";

function OffersWhatTypeOfBrandingComponent(props) {

    const [active, setActive] = useState(1);
    const [titleBranding, setTitleBranding] = useState('Products photo shooting')

    const dispatch = useDispatch()

    const updateTypeBranding = () => {
        dispatch({
            type: 'TYPE_BRANDING',
            payload: titleBranding
        })
    }

    useEffect( () => {
        updateTypeBranding()
    }, [titleBranding, setTitleBranding])


    const renderElements = () => {
        switch (active) {
            case 1 :
                return (
                    <OffersChooseYourPackagePhotoShootingComponent/>
                );
                break
            case 2 :
                return (
                    <OffersChooseYourPackagePackagingComponent/>
                );
                break
            case 3 :
                return (
                    <OffersChooseYourPackageAdsManagementComponent/>
                );
                break
        }
    }

    const onChange = (x) => {
        console.log(x)
        if (x == 0) {
            setActive(1);
            setTitleBranding('Products photo shooting')
        }

        else if (x == 1) {
            setActive(2)
            setTitleBranding('Packaging design with logo')
        }

        else if (x == 2) {
            setActive(3);
            setTitleBranding('Ads Management')
        }

    }

    return (
        <div>
            <OffersTitleCardComponent
                titleNumber='2'
                titleSection='What type of Branding or Ads Management'
            />
            <div className='chooseYourProject visible-desktop flex-X'>
                <OffersCardsWithCheckComponent
                    onClick={() => {
                        setActive(1);
                        setTitleBranding('Products photo shooting')
                    }
                    }
                    active={active === 1 ? 'listing-active' : 'listing'}
                    titleCard='Products photo shooting'
                    subtitleCard='With our professional photo equipment,
                    we will embellish your products, and make them very professional and engaging for your customers'
                />
                <OffersCardsWithCheckComponent
                    onClick={() => {
                        setActive(2)
                        setTitleBranding('Packaging design with logo')
                    }}
                    active={active === 2 ? 'listing-active' : 'listing'}
                    titleCard='Packaging design with logo'
                    subtitleCard='You want to make a difference compared to your competitors.
                    The packaging is the first image you give to your brand, and this is one of the most important steps of a
                    successful brand'
                />
                <OffersCardsWithCheckComponent
                    onClick={() => {
                        setActive(3);
                        setTitleBranding('Ads Management')
                    }}
                    active={active === 3 ? 'listing-active' : 'listing'}
                    titleCard='Ads Management'
                    subtitleCard='You are doing ads on facebook, instagram, Amazon... With millions of dollars generated with ads,
                    let our team handle your ads, and focus on the important parts of your business ( new products, new ideas, new projects...)'
                />
            </div>
            <div className='chooseYourProject visible-phone'>
                <Carousel afterChange={onChange}>
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(1);
                            setTitleBranding('Products photo shooting')
                        }
                        }
                        active={active === 1 ? 'listing-active' : 'listing'}
                        titleCard='Products photo shooting'
                        subtitleCard='With our professional photo equipment,
                    we will embellish your products, and make them very professional and engaging for your customers'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(2)
                            setTitleBranding('Packaging design with logo')
                        }}
                        active={active === 2 ? 'listing-active' : 'listing'}
                        titleCard='Packaging design with logo'
                        subtitleCard='You want to make a difference compared to your competitors.
                    The packaging is the first image you give to your brand, and this is one of the most important steps of a
                    successful brand'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(3);
                            setTitleBranding('Ads Management')
                        }}
                        active={active === 3 ? 'listing-active' : 'listing'}
                        titleCard='Ads Management'
                        subtitleCard='You are doing ads on facebook, instagram, Amazon... With millions of dollars generated with ads,
                    let our team handle your ads, and focus on the important parts of your business ( new products, new ideas, new projects...)'
                    />
                </Carousel>
            </div>
            {renderElements()}
        </div>
    );
}

export default OffersWhatTypeOfBrandingComponent;
