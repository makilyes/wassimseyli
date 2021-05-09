import React from 'react';
import './offers-titleCard.styles.scss'

function OffersTitleCardComponent(props) {
    return (
        <div className='offerTitle-component'>
            <i className='step-number'>{props.titleNumber}</i>
            <h4 className='title-cardWithCheck'>{props.titleSection}</h4>
        </div>
    );
}

export default OffersTitleCardComponent;
