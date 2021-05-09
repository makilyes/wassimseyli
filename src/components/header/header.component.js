import React from 'react';
import {Link} from "react-router-dom";
import './header.styles.scss'


import {ReactComponent as Logo} from '../../assests/logo50SVG.svg'

function HeaderComponent(props) {


    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link className="option" to='/'>
                    Home
                </Link>
                <Link className="option" to='/services'>
                    Services
                </Link>
                <Link className="option" to='/our-story'>
                    Our Story
                </Link>
                <Link className="option" to='/offers'>
                    Offers
                </Link>
                <Link className="option" to='/contact-us'>
                    Contact Us
                </Link>
                <Link className="option signIn" to='/sign-in'>
                    Sign-in
                </Link>
            </div>
        </div>
    );
}

export default HeaderComponent;
