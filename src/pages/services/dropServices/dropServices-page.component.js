import React from 'react';
import './dropServices-page.styles.scss'
import PackagingHeroComponent from "../../../components/packaging-hero/packaging-hero.component";
import {useSelector} from "react-redux";
import DropServicesCardsComponent from "../../../components/dropServices-cards/dropServices-cards.component";
import logisticImage from "../../../assests/procesusDropshpping.png";
import CustomButtonComponent from "../../../components/custom-button/custom-button.component";
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import phoneCall from "../../../assests/phone-call.png"
import priceDown from "../../../assests/price-down.png"
import warehouse from "../../../assests/warehouse.png"
import bestSeller from "../../../assests/best-seller.png"


function DropServicesPageComponent(props) {

    const card = useSelector(state => [
        ...state.designPageReducer.cards
    ]);

    const data = useSelector(state => [
        ...state.dropshipServicesReducer.cards
    ]);

    return (
        <div>
            <PackagingHeroComponent
                title={card[1].title}
                description={card[1].description}
                img={card[1].img}
            />
            <div>
                <div className="dropServices-cards">
                    <div className="column-1">
                        <Fade bottom>
                            <DropServicesCardsComponent
                                titleColor='color0 title-dropshipServices'
                                cardsNumber={data[0].cardsNumber}
                                title={data[0].title}
                                description={data[0].description}
                                img={phoneCall}
                            />
                        </Fade>
                        <Fade bottom>
                            <DropServicesCardsComponent
                                titleColor='color1 title-dropshipServices'
                                cardsNumber={data[2].cardsNumber}
                                title={data[2].title}
                                description={data[2].description}
                                img={warehouse}
                            />
                        </Fade>
                    </div>
                    <div className="column-2">
                        <Fade bottom>
                            <DropServicesCardsComponent
                                titleColor='color2 title-dropshipServices'
                                cardsNumber={data[1].cardsNumber}
                                title={data[1].title}
                                description={data[1].description}
                                img={priceDown}
                            />
                        </Fade>
                        <Fade bottom>
                            <DropServicesCardsComponent
                                titleColor='color3 title-dropshipServices'
                                cardsNumber={data[3].cardsNumber}
                                title={data[3].title}
                                description={data[3].description}
                                img={bestSeller}
                            />
                        </Fade>
                    </div>
                </div>
                <div className="dropServices-cards-mobile">
                    <div className="column-1">
                        <Fade bottom>
                            <DropServicesCardsComponent
                                titleColor='color0 title-dropshipServices'
                                cardsNumber={data[0].cardsNumber}
                                title={data[0].title}
                                description={data[0].description}
                                img={phoneCall}
                            />
                        </Fade>
                        <Fade bottom>
                            <DropServicesCardsComponent
                                titleColor='color1 title-dropshipServices'
                                cardsNumber={data[2].cardsNumber}
                                title={data[2].title}
                                description={data[2].description}
                                img={warehouse}
                            />
                        </Fade>
                    </div>
                    <div className="column-2">
                        <Fade bottom>
                            <DropServicesCardsComponent
                                titleColor='color2 title-dropshipServices'
                                cardsNumber={data[1].cardsNumber}
                                title={data[1].title}
                                description={data[1].description}
                                img={priceDown}
                            />
                        </Fade>
                        <Fade bottom>
                            <DropServicesCardsComponent
                                titleColor='color3 title-dropshipServices'
                                cardsNumber={data[3].cardsNumber}
                                title={data[3].title}
                                description={data[3].description}
                                img={bestSeller}
                            />
                        </Fade>
                    </div>
                </div>
                <div className="titleHowItWorks">
                    <h2 className="howItWorksTitle">How it works ?!</h2>
                </div>
                <div className='imgDiv-DropServices-section2'>
                    <img src={logisticImage} alt="" className='img-DropServices-section2'/>
                </div>
            </div>
            <div className="dropServices-section3">
                <p className="dropServices-section3-text">For any request do not hesitate to contact us</p>
                <CustomButtonComponent btnText="Contact Us" onBtnClick={() => props.history.push("/contact-us")}/>
            </div>
        </div>
    );
}

export default DropServicesPageComponent;
