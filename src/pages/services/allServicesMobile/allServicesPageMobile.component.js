import React from 'react';
import './allServicesPageMobile.styles.scss'
import img1 from '../../../assests/packaging-hero.jpg'
import img2 from '../../../assests/Dropshipping.jpg'

function AllServicesPageMobileComponent(props) {
    return (
        <div>
            <h1 id="titleOurServices">
                Our Services
            </h1>
            <div className="coachingCard">
                <h2 className="coachingCardTitle">
                    Coaching
                </h2>
                <img src={img1} alt=""/>
            </div>
            <div className="dropshippingCard">
                <h2 className="dropshippingCardTitle">
                    Dropshipping
                </h2>
                <img src={img2} alt=""/>
            </div>
            <div className="packaging">
                <h2 className="packagingCardTitle">
                    Packaging
                </h2>
                <img src={img1} alt=""/>
            </div>
        </div>
    );
}

export default AllServicesPageMobileComponent;