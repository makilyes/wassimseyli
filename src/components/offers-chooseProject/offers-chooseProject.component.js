import React from 'react';
import './offers-chooseProject.styles.scss'
import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import OffersCardsWithCheckComponent from "../offers-cardsWithCheck/offers-cardsWithCheck.component";
import landingPageIcon from "../../assests/landing-page-icon.svg";
import emailIcon from '../../assests/emailIconOffer.svg'



function OffersChooseProjectComponent(props) {
    return (
        <div>

            <OffersTitleCardComponent
                titleNumber='1'
                titleSection='Place your order'
            />
            <div className='chooseYourProject'>
                <OffersCardsWithCheckComponent
                    titleCard='Website'
                    subtitleCard='You need a website ? Let us hand-code your designs to a website'
                    active='listing-active'
                    cartItemCount = 'cart-item-count'
                    cartItemCountValue = '0'
                    img={landingPageIcon}
                />
                <OffersCardsWithCheckComponent
                    titleCard='Consulting'
                    subtitleCard='You already have a website, or an online store, and need a coaching session, or help ? Let us help you.'
                    active='listing'
                    cartItemCount = 'cart-item-count'
                    cartItemCountValue = '0'
                    img={emailIcon}
                />
                <OffersCardsWithCheckComponent
                    titleCard=' Branding & Ads'
                    subtitleCard='You have a website or product and you need to brand it ? Let us handle all the branding for you'
                    active=' listing'
                    cartItemCount = 'cart-item-count'
                    cartItemCountValue = '0'
                    img={emailIcon}
                />
                <OffersCardsWithCheckComponent
                    titleCard=' OffShore'
                    subtitleCard='You want to create an offshore company ? Let us handle all the papers work for you'
                    active=' listing'
                    cartItemCount = 'cart-item-count'
                    cartItemCountValue = '0'
                    img={emailIcon}
                />
            </div>
        </div>
    );
}

export default OffersChooseProjectComponent;
