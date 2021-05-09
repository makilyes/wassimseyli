import React from 'react';
import './homepage.styles.scss'
import {useSelector} from "react-redux";
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import {useHistory} from "react-router-dom";
import img0 from "../../assests/sectionDesignPackaging.png";
import img3 from "../../assests/wassimProfil.png";
import img2 from "../../assests/sectionEcommercePackaging.jpeg";
import img4 from "../../assests/logistic.png";
import Fade from 'react-reveal/Fade';



function HomepageComponent(props) {

    const data = useSelector(state => ([
        ...state.homePageDescriptionReducer.sections
    ]))

    let history = useHistory()

    function handleClick() {
        history.push("/contact-us")
    }

    const imgSrc = () => {
        switch (props.img) {
            case "../../assests/sectionDesignPackaging.png" :
                return img0;
            case "../../assests/ilyes.png" :
                return img3
            case "../../assests/sectionEcommercePackaging.jpeg" :
                return img2
            case "../../assests/logistic.png" :
                return img4
            default :
                return 'error'

        }
    }


    return (
        <div class="homePage-container">
            <div className="hero-container">
                <div className="hero-text-div">
                    <h1 className="hero-title">Scale your business to the moon !</h1>
                    <p className="hero-subtitle">If you can imagine it we can make it</p>
                    <CustomButtonComponent
                        btnText="Contact Us"
                        onBtnClick={handleClick}
                    />
                </div>
                <div className="hero-img-div">
                    <img src={process.env.PUBLIC_URL + '/heroimg.jpeg'} alt="hero" className="hero-image"/>
                </div>
            </div>
            <div className="missionDiv">
            <Fade left>
                <div className="left-column-text descriptionLeft">
                    <h2 className="title-mission-homepage">{data[0].title}</h2>
                    <p className="description-mission-homepage">{data[0].description}</p>
                    <CustomButtonComponent
                        btnText={data[0].btnText}
                        onBtnClick={() => props.history.push('/services/branding')}
                    />
                </div>
                </Fade>
                <Fade right>
                <div className="imgDiv leftImgAnimation">
                    <img src={img0} className="imageMission design" alt=""/>
                </div>
                </Fade>
            </div>
            <div className="missionDiv">
            <Fade left>

                <div className="imgDiv rightImgAnimation">
                    <img src={img4} className="imageMission" alt=""/>
                </div>
                </Fade>
                <Fade right>

                <div className="left-column-text descriptionRight">
                    <h2 className="title-mission-homepage">{data[1].title}</h2>
                    <p className="description-mission-homepage">{data[1].description}</p>
                    <CustomButtonComponent
                        btnText={data[1].btnText}
                        onBtnClick={() => props.history.push('/services/dropshipping')}
                    />
                </div>
                </Fade>
                <Fade left>

                <div className="imgDiv rightImgAnimationMobile">
                    <img src={img4} className="imageMission dropship" alt=""/>
                </div>
                </Fade>

            </div>
            <div className="missionDiv">
            <Fade left>

                <div className="left-column-text descriptionLeft">
                    <h2 className="title-mission-homepage">{data[2].title}</h2>
                    <p className="description-mission-homepage">{data[2].description}</p>
                    <CustomButtonComponent
                        btnText={data[2].btnText}
                        onBtnClick={() => props.history.push('/services/coaching')}
                    />
                </div>
                </Fade>
                <Fade right>

                <div className="imgDiv leftImgAnimation">
                    <img src={img2} className="imageMission resutls" alt=""/>
                </div>
                </Fade>

            </div>

            <div className="missionDiv">
            <Fade left>

                <div className="imgDiv rightImgAnimation">
                    <img src={img3} className="imageMission wassimProfil" alt=""/>
                </div>
                </Fade>
                <Fade right>

                <div className="left-column-text descriptionRight">
                    <h2 className="title-mission-homepage">{data[3].title}</h2>
                    <p className="description-mission-homepage">{data[3].description}</p>
                    <CustomButtonComponent
                        btnText={data[3].btnText}
                        onBtnClick={() => props.history.push('/our-story')}
                    />
                </div>
                </Fade>
                <Fade left>

                <div className="imgDiv rightImgAnimationMobile">
                    <img src={img3} className="imageMission wassimProfil" alt=""/>
                </div>
                </Fade>

            </div>


        </div>


    );
}

export default HomepageComponent;
