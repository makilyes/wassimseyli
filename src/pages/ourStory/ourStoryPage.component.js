import React from 'react';
import './ourStoryPage.styles.scss'
import handWithMobileImg from "../../assests/hand-withMobile.png";
import {useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import wassimThePain from "../../assests/wassim-thePain.jpg";
import wassimearlyLife from "../../assests/wassim-earlyLife.jpg";
import wassimeTheLaunch from "../../assests/wassim-theLaunch.jpg";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';


function OurStoryPageComponent(props) {

    let history = useHistory();

    const blocks = useSelector(state => ([
        ...state.ourStoryReducer.blocks
    ]))

    return (
        <div>
            <div className="ourStoryHero-component">
                <div className="ourStoryHero-texts">
                    <h1 className='ourStoryHero-title'>
                        Why not me ?
                    </h1>
                    <p className="ourStoryHero-paragraphe2">
                        That's the exact phrase that got me from $0 to $2 million during my engineering studies!
                    </p>
                    <p className="ourStoryHero-paragraphe2">
                        Why not me! That's what makes me move forward every day, faster and stronger!
                    </p>
                </div>
                <div className='ourStoryHero-img'>
                    <img src={handWithMobileImg} alt="" className="imgHandWithMobile"/>
                </div>
            </div>
            <div className='ourStory-section1'>
                <div className="earlyLife-section">
                <Fade left>
                    <div className="ourStoryBlock blockLeft">
                        <h1>
                            {blocks[0].title}
                        </h1>
                        <p>
                            {blocks[0].description}
                        </p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="image">
                        <img className='wassim-earlyLife-img' src={wassimearlyLife} />
                    </div>
                    </Fade>
                </div>
                <Flip right>

                <blockquote className='quotes'>
                    " From 2016 to 2018, dropshipping was quite simple. It was "the golden era" as some would say. The
                    competition was still fairly low and the Facebook rules were much more flexible... "
                </blockquote>
                </Flip>

                <div className="thePain-section">
                <Fade left>

                    <div className="image">
                        <img className='wassim-pain-img' src={wassimThePain}/>
                    </div>
                    </Fade>
                    <Fade right>

                    <div className="ourStoryBlock blockRight">
                        <h1>
                            {blocks[1].title}
                        </h1>
                        <p>
                            {blocks[1].description}
                        </p>
                    </div>
                    </Fade>

                </div>
                <Flip left>

                <blockquote className='quotes'>
                    " Was dropshipping dead?
                    Definitely not! You had to find new ways to sell, to differentiate yourself and to be ahead of the
                    competition. "
                </blockquote>
                </Flip>


                <div className="theLaunch-section">
                <Fade left>

                    <div className="ourStoryBlock blockLeft">
                        <h1>
                            {blocks[2].title}
                        </h1>
                        <p>
                            {blocks[2].description}
                        </p>
                    </div>
                    </Fade>
                    <Fade right>

                    <div className="image">
                        <img className='wassim-launch-img' src={wassimeTheLaunch}/>
                    </div>
                    </Fade>

                </div>
            </div>

            <div className="theCTA-section">
                <h1>YOU COULD BE MY NEXT SUCCESS STORY</h1>
                <p>Do you have what it takes to change your life and become my next success story?</p>
                <CustomButtonComponent
                    btnText='LEARN MORE' onBtnClick={() => history.push({pathname: '/services/coaching'})}/>
            </div>
        </div>
    );
}

export default OurStoryPageComponent;
