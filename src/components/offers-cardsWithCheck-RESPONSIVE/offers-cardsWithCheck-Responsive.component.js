import React from 'react';
import './offers-cardsWithCheck-Responsive.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import landingPageIcon from "../../assests/landing-page-icon.svg";
import CustomButtonComponent from "../custom-button/custom-button.component";

function OffersCardsWithCheckResponsiveComponent(props) {
    return (
        <div className='cardWithCheckResponsive-component'
             onClick={props.onClick}
        >

            <ul className='listing-cardWithCheck'>
                <li className={props.active}>
                    <div className={props.cartItemCount}>{props.cartItemCountValue}</div>
                    <div className='blocImageWithTitle'>
                        <div className={props.imgShow}>
                            <img src={props.img} alt=""/>
                        </div>
                        <div className='title-checkbox'>
                            <FontAwesomeIcon icon={faCheck}/>
                            <p>{props.titleCard}</p>
                        </div>
                    </div>
                    <p className='subtitle-project'>
                        {props.subtitleCard}
                    </p>
                    <p className='price-package'>{props.pricePackage}</p>
                    <p className='detailPrice'>{props.detailPrice}</p>
                    {props.customButton ?
                        <CustomButtonComponent
                            btnText = 'Contact US'/> : null
                    }
                </li>
            </ul>
        </div>
    );
}

export default OffersCardsWithCheckResponsiveComponent;
