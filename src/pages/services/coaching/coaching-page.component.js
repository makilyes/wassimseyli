import React from 'react';
import './coaching-page.styles.scss'
import PackagingHeroComponent from "../../../components/packaging-hero/packaging-hero.component";
import {useSelector} from "react-redux";
import DropServicesCardsComponent from "../../../components/dropServices-cards/dropServices-cards.component";
import results1 from "../../../assests/liveVisitores.png";
import results2 from "../../../assests/15million.png";
import results3 from "../../../assests/unMillion.png";
import CustomButtonComponent from "../../../components/custom-button/custom-button.component";
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import trophy from "../../../assests/trophy.png"
import forecast from "../../../assests/forecast.png"
import webPayment from "../../../assests/web-payment.png"
import megaphone from "../../../assests/megaphone.png"
import facebookNice from "../../../assests/facebook-nice.png"
import snapchat from "../../../assests/snapchat.png"
import adwords from "../../../assests/adwords.png"
import emailMarketing from "../../../assests/email-marketing.png"
import instagramBrand from "../../../assests/instagramBrand.png"


function CoachingPageComponent(props) {

    const card = useSelector(state => [
        ...state.designPageReducer.cards
    ]);

    const data = useSelector(state => [
        ...state.coachingReducer.cards
    ]);

    const addToWaitingList = () => {
        props.history.push({
            pathname: '/register',
            state: {waitingUser: 'waitingUser'}
        })
    }


    return (
        <div>
            <PackagingHeroComponent
                title={card[2].title}
                description={card[2].description}
                img={card[2].img}
            />
            <div className="coachingPage-paragraph">
                <p>A pedagogical method in 4 steps to create a store that generates at least $4,000 per month in 6
                    weeks, without special skills, <span className='bold-text'>STARTING FROM 0 AND FROM HOME.</span></p>
            </div>
            <div className="dropServices-cards">
                <div className="column-1">
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module1 title-dropshipServices'
                            title='MODULE 1 - Forging a Winning Mindset'
                            description={<div>
                                After completing this module : <br/> You have built an unshakeable e-merchant Mindset
                                that gives you infinite resilience to
                                failure and allows you to take full advantage of the lessons learned in this course.
                            </div>}
                            img={trophy}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module3 title-dropshipServices'
                            title={data[2].title}
                            description={data[2].description}
                            img={webPayment}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module5 title-dropshipServices'
                            title={data[4].title}
                            description={data[4].description}
                            img={facebookNice}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module7 title-dropshipServices'
                            title={data[6].title}
                            description={data[6].description}
                            img={adwords}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module9 title-dropshipServices'
                            title={data[8].title}
                            description={data[8].description}
                            img={instagramBrand}
                        />
                    </Fade>
                </div>
                <div className="column-2">
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module2 title-dropshipServices'
                            title={data[1].title}
                            description={data[1].description}
                            img={forecast}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module4 title-dropshipServices'
                            title={data[3].title}
                            description={data[3].description}
                            img={megaphone}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module6 title-dropshipServices'
                            title={data[5].title}
                            description={data[5].description}
                            img={snapchat}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module8 title-dropshipServices'
                            title={data[7].title}
                            description={data[7].description}
                            img={emailMarketing}
                        />
                    </Fade>
                </div>
            </div>
            <div className="dropServices-cards-mobile">
                <div className="column-1">
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module1 title-dropshipServices'
                            title='MODULE 1 - Forging a Winning Mindset'
                            description={<div>
                                After completing this module : <br/> You have built an unshakeable e-merchant Mindset
                                that gives you infinite resilience to
                                failure and allows you to take full advantage of the lessons learned in this course.
                            </div>}
                            img={trophy}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module2 title-dropshipServices'
                            title={data[1].title}
                            description={data[1].description}
                            img={forecast}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module3 title-dropshipServices'
                            title={data[2].title}
                            description={data[2].description}
                            img={webPayment}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module4 title-dropshipServices'
                            title={data[3].title}
                            description={data[3].description}
                            img={megaphone}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module5 title-dropshipServices'
                            title={data[4].title}
                            description={data[4].description}
                            img={facebookNice}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module6 title-dropshipServices'
                            title={data[5].title}
                            description={data[5].description}
                            img={snapchat}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module7 title-dropshipServices'
                            title={data[6].title}
                            description={data[6].description}
                            img={adwords}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module8 title-dropshipServices'
                            title={data[7].title}
                            description={data[7].description}
                            img={emailMarketing}
                        />
                    </Fade>
                    <Fade bottom>
                        <DropServicesCardsComponent
                            titleColor='module9 title-dropshipServices'
                            title={data[8].title}
                            description={data[8].description}
                            img={instagramBrand}
                        />
                    </Fade>
                </div>
        </div>
    <div>
        <div className="coachingPage">
            <div className='coaching-textSection'>
                <p className='title'>Those results</p>
                <p className='subtitle'>can be yours</p>
                <p className='description'>Take advantage of our expertise and our marketing strategies to
                    develop
                    your
                    business.</p>
            </div>
            <Zoom bottom>
                <div className="coaching-imgSection">
                    <div className="img1">
                        <img src={results1} alt="" className='imgSize '/>
                    </div>
                    <div className="img2">
                        <img src={results2} alt="" className='imgSize '/>
                    </div>
                    <div className="img3">
                        <img src={results3} alt="" className='imgSize'/>
                    </div>
                </div>
            </Zoom>

        </div>
        <div className='btnCTA-div'>
            <CustomButtonComponent
                onBtnClick={addToWaitingList}
                btnText="Waiting List"
            />
        </div>
    </div>
</div>
);
}

export default CoachingPageComponent;
