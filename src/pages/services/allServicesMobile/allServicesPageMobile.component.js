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
            <div className="servicesCards">
                <div className="coachingCard"
                     onClick={() => props.history.push('/services/coaching')}
                >
                    <h2 className="coachingCardTitle">
                        Coaching
                    </h2>
                    <img src={img1} alt=""/>
                </div>
                <div className="dropshippingCard"
                     onClick={() => props.history.push('/services/dropshipping')}
                    >
                    <h2 className="dropshippingCardTitle">
                        Dropshipping
                    </h2>
                    <img src={img2} alt=""/>
                </div>
                <div className="packaging"
                     onClick={() => props.history.push('/services/branding')}
                     >
                    <h2 className="packagingCardTitle">
                        Packaging
                    </h2>
                    <img src={img1} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default AllServicesPageMobileComponent;