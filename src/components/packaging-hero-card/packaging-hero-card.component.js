import React from 'react';
import './packaging-hero-card.styles.scss'
import { useHistory } from "react-router-dom";
import CustomButtonComponent from "../custom-button/custom-button.component";

function PackagingHeroCardComponent(props) {

    let history = useHistory();

    return (
        <div className="hero-card">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <CustomButtonComponent btnText ="Get Quote" onBtnClick={() => history.push({pathname: '/offers'})}/>
        </div>
    );
}

export default PackagingHeroCardComponent;
