import React from 'react';
import './dropServices-cards.styles.scss'

function DropServicesCardsComponent(props) {
    return (
        <div className="dropServicesCard">
            <img src={props.img} alt=""/>
            <p className="small-number">
                {props.cardsNumber}
            </p>
            <p className={props.titleColor}>
                {props.title}            </p>
            <p className="text-dropshipServices">
                {props.description}
            </p>
        </div>
    );
}

export default DropServicesCardsComponent;