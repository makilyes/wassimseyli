import React from 'react';
import './packaging-design-page.styles.scss'
import {useSelector} from "react-redux";
import PackagingHeroComponent from "../../../components/packaging-hero/packaging-hero.component";
import img1 from "../../../assests/img1-packaging.png";
import img2 from "../../../assests/img2-packaging.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faHeart} from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as CameroIcon} from "../../../assests/camera.svg";
import {ReactComponent as GlobeIcon} from "../../../assests/globe.svg";
import {ReactComponent as LabelIcon} from "../../../assests/labelQualite.svg";
import {ReactComponent as CourseIcon} from "../../../assests/course.svg";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';


function PackagingDesignPageComponent(props) {


    const sections = useSelector(state => [
        ...state.designPageReducer.sections
    ]);
    const cards = useSelector(state => [
        ...state.designPageReducer.cards
    ]);


    return (
        <div>
            <PackagingHeroComponent
                title={cards[0].title}
                description={cards[0].description}
                img={cards[0].img}
            />
            <div className="packaging-right">
                <Fade left>
                    <div className="design-description">
                        <h1>{sections[0].title}</h1>
                        <p>{sections[0].description}</p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="image-container-design">
                        <img className="image-design" src={img1} alt=""/>
                    </div>
                </Fade>
            </div>
            <div className="packaging-left">
                <Fade left>
                    <div className="image-container-design">
                        <img className="image-design" src={img2} alt=""/>
                    </div>
                </Fade>
                <Fade right>
                    <div className="design-description">
                        <h1>{sections[1].title}</h1>
                        <p>{sections[1].description}</p>
                    </div>
                </Fade>
            </div>

            <Flip top>
                <div className="packaging-grid">
                    <div className="leftGrid">
                        <FontAwesomeIcon icon={faEdit}/>
                        <h3>{sections[2].title}</h3>
                        <p>{sections[2].description}</p>
                    </div>
                    <div className="rightGrid">
                        <FontAwesomeIcon icon={faHeart}/>
                        <h3>{sections[3].title}</h3>
                        <p>{sections[3].description}</p>
                    </div>
                </div>
            </Flip>

            <div>
                <Bounce bottom>
                    <div className="title-additionalServices">
                        <h2><span className="bold-title">Our additional</span><br/> services</h2>
                    </div>
                </Bounce>
                <Zoom>

                    <div className="card-complementaryServices">
                        <div className="card-complementaryService">
                            <CameroIcon/>
                            <h3>Organisez un shooting photo</h3>
                            <p>Faites-nous confiance pour créer du contenu performant pour vos campagnes facebook,
                                Instagram, snapchat et google ads.</p>
                        </div>
                        <div className="card-complementaryService1">
                            <GlobeIcon/>
                            <h3>Créez votre société OFFSHORE</h3>
                            <p>Profitez d’un taux d'imposition à 0% en toute légalité avec notre solution clé en main
                                incluant l’ouverture d’un compte bancaire.</p>
                        </div>
                        <div className="card-complementaryService2">
                            <LabelIcon/>
                            <h3>Brandez votre store</h3>
                            <p>Investissez dans une image de marque professionnelle afin de faciliter les partenariats
                                avec les influenceurs, développer un avantage concurrentiel et fidéliser vos
                                clients.</p>
                        </div>
                        <div className="card-complementaryService3">
                            <CourseIcon/>
                            <h3>Cours et Consulting</h3>
                            <p>Que vous souhaitez vous former, ou tout simplement avoir un coach, nous avons une
                                solution pour vous</p>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
}

export default PackagingDesignPageComponent;
