import React, {useState,useEffect} from 'react';
import './offers-whatTypeOfWebsite.styles.scss'

import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import OffersCardsWithCheckComponent from "../offers-cardsWithCheck/offers-cardsWithCheck.component";
import OffersChooseYourPackageCMSComponent from "../offers-chooseYourPackageCMS/offers-chooseYourPackageCMS.component";
import OffersChooseYourPackageLikeAProComponent
    from "../offers-chooseYourPackageLikeAPro/offers-chooseYourPackageLikeAPro.component";
import OffersNumbersOfProductsComponent from "../offers-numbersOfProducts/offers-numbersOfProducts.component";
import OffersNumbersOfPagesComponent from "../offers-numbersOfPages/offers-numbersOfPages.component";
import OffersWoocommerceComponent from "../offers-woocommerce/offers-woocommerce.component";
import {useDispatch, useSelector} from "react-redux";
import {Carousel} from "antd";
import OffersCardsWithCheckResponsiveComponent
    from "../offers-cardsWithCheck-RESPONSIVE/offers-cardsWithCheck-Responsive.component";

function OffersWhatTypeOfWebsiteComponent(props) {

    const dispatch = useDispatch()

    const [active, setActive] = useState(1)
    const [typeWebSite, setTypeWebSite] = useState('withCMS')

    const updateTypeWebSite = () => {
        dispatch({
            type: "TYPE_WEBSITE",
            payload: typeWebSite
        })
    }

    useEffect(() => {
      updateTypeWebSite()
    },[typeWebSite,setTypeWebSite]);

    const renderElements = (props) => {
        switch (active) {
            case 1 :
                return (
                    <>
                        <OffersChooseYourPackageCMSComponent
                        />
                    </>
                );
                break
            case 2 :
                return (
                    <>
                        <OffersChooseYourPackageLikeAProComponent/>
                    </>
                )
            default:
                return 'error'
        }
    }

    const onChange = (x) => {
        console.log(x)
        if (x == 0) {
            setActive(1);
            setTypeWebSite('withCMS');
        }

        else if (x == 1) {
            setActive(2);
            setTypeWebSite('like a pro');
        }

    }

    return (
        <div>
            <OffersTitleCardComponent
                titleNumber='2'
                titleSection='What type of Website'
            />
            <div className='chooseYourProject visible-desktop flex-X'>
                <OffersCardsWithCheckComponent
                    titleCard='With CMS'
                    subtitleCard='If you need a website to sell products, to post a blog, or for a portfolio,
                    and specially to handle your website on your
                     own. This solution could be the best for you ?'
                    active={active === 1 ? 'listing-active' : 'listing'}
                    onClick={() => {
                        setActive(1);
                        setTypeWebSite('withCMS');
                    }}
                />
                <OffersCardsWithCheckComponent
                    titleCard='Like a pro'
                    subtitleCard='if you want a tailor-made, unique website according to your tastes, this solution is for you.
                    Indeed with the coding from A to Z, you will have mastery of the design down to the smallest details.
                    Perfect for having a presence on the net, and standing out'
                    active={active === 2 ? 'listing-active' : 'listing'}
                    onClick={() => {
                        setActive(2);
                        setTypeWebSite('like a pro');                 

                    }}
                />
            </div>
            <div className='chooseYourProject visible-phone'>
                <Carousel afterChange={onChange}>
                    <OffersCardsWithCheckResponsiveComponent
                        titleCard='With CMS'
                        subtitleCard='If you need a website to sell products, to post a blog, or for a portfolio,
                    and specially to handle your website on your
                     own. This solution could be the best for you ?'
                        active={active === 1 ? 'listing-active' : 'listing'}
                        onClick={() => {
                            setActive(1);
                            setTypeWebSite('withCMS');
                        }}
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        titleCard='Like a pro'
                        subtitleCard='if you want a tailor-made, unique website according to your tastes, this solution is for you.
                    Indeed with the coding from A to Z, you will have mastery of the design down to the smallest details.
                    Perfect for having a presence on the net, and standing out'
                        active={active === 2 ? 'listing-active' : 'listing'}
                        onClick={() => {
                            setActive(2);
                            setTypeWebSite('like a pro');

                        }}
                    />
                </Carousel>
            </div>
            {
                renderElements({})
            }
        </div>

    );
}

export default OffersWhatTypeOfWebsiteComponent;
