import React from 'react';
import PackagingHeroCardComponent from "../packaging-hero-card/packaging-hero-card.component";
import imgPackagingHero from "../../assests/packaging-hero.jpg"
import imgProcesusDropshipping from "../../assests/procesusDropshpping.png"
import imgDropshipping from "../../assests/Dropshipping.jpg"
import './packaging-hero.styles.scss'


function PackagingHeroComponent(props) {

    const imgSrc = () => {

        switch (props.img) {
            case "../../assests/procesusDropshpping.png" :
                return imgProcesusDropshipping;
            case "../../assests/packaging-hero.jpg" :
                return imgPackagingHero;
            case "../../assests/Dropshipping.jpg" :
                return imgDropshipping;
            default:
                return 'error'
        }
    }


    return (
        <div className="packaging-hero">
            <img src={imgSrc()} alt="" className="img-packaging-hero"/>
            <PackagingHeroCardComponent
                title={props.title}
                description={props.description}

            />
        </div>
    );
}

export default PackagingHeroComponent;
