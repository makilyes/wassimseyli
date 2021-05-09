import React from 'react';
import {ReactComponent as Logo} from '../../assests/logo50SVG.svg'
import {Link} from "react-router-dom";
import './footer.styles.scss'

import facebookIcon from '../../assests/facebook.png'
import instagramIcon from '../../assests/instagram.png'
import linkedinIcon from '../../assests/linkedin.png'
import twitterIcon from '../../assests/twitter.png'

function FooterComponent(props) {
    return (
        <div className="footer">
            <Link className="logo-container">
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link className="option" to-='/'>
                    Home
                </Link>
                <Link className="option" to-='/services'>
                    Services
                </Link>
                <Link className="option" to-='/our-story'>
                    Our Story
                </Link>
                <Link className="option" to-='/offers'>
                    Offers
                </Link>
                <Link className="option" to-='/contact-us'>
                    Contact Us
                </Link>
                <Link className="option" to-='/sign-in'>
                    Sign-in
                </Link>
            </div>
            <div className="socialIcons">
                <a href="/">
                    <img className="socialIcon rotate45" src={facebookIcon} alt=""/>
                </a>
                <a href="/">
                    <img className="socialIcon rotate-45" src={instagramIcon} alt=""/>
                </a>
                <a href="/">
                    <img className="socialIcon rotate45" src={linkedinIcon} alt=""/>
                </a>
                <a href="/">
                    <img className="socialIcon rotate-45" src={twitterIcon} alt=""/>
                </a>

            </div>
            <div className="copyrights">
                <span>Copyright © 2021 Makria Agency</span>
                <span>All rights reserved.</span>
            </div>
        </div>
    );
}

export default FooterComponent;
