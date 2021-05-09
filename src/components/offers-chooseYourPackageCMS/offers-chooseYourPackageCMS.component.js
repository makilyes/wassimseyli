import React, {useState,useEffect} from 'react';
import './offers-chooseYourPackageCMS.styles.scss'
import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import OffersCardsWithCheckComponent from "../offers-cardsWithCheck/offers-cardsWithCheck.component";
import OffersNumbersOfProductsComponent from "../offers-numbersOfProducts/offers-numbersOfProducts.component";
import OffersNumbersOfPagesComponent from "../offers-numbersOfPages/offers-numbersOfPages.component";
import OffersWoocommerceComponent from "../offers-woocommerce/offers-woocommerce.component";
import {useDispatch, useSelector} from "react-redux";
import {Carousel} from "antd";
import OffersCardsWithCheckResponsiveComponent
    from "../offers-cardsWithCheck-RESPONSIVE/offers-cardsWithCheck-Responsive.component";

function OffersChooseYourPackageCMSComponent(props) {

    const dispatch = useDispatch()

    const [active, setActive] = useState(1)
    const [packageWebSiteCMS, setPackageWebSiteCMS] = useState('Shopify')
    const [pricePackageWebSiteCMS, setPricePackageWebSiteCMS] = useState(300)

    const updatePackageWebSiteCMS = () => {
        dispatch({
            type: "PACKAGE_WEBSITE",
            payload: {packageWebSiteCMS, pricePackageWebSiteCMS}
        })
    }


    useEffect(() => {
       updatePackageWebSiteCMS()
    },[packageWebSiteCMS,setPackageWebSiteCMS]);


    const renderElements = () => {
        switch (active) {
            case 1 :
                return (
                    <>
                        <OffersNumbersOfProductsComponent/>
                    </>
                );
                break
            case 2 :
                return (
                    <>
                        <OffersNumbersOfPagesComponent/>
                        <OffersWoocommerceComponent/>
                    </>
                );
                break
            default :
                return 'error'
        }
    }

    const onChange = (x) => {
        console.log(x)
        if (x == 0) {
            setActive(1);
            setPackageWebSiteCMS('Shopify');
            setPricePackageWebSiteCMS(300);
        }

        else if (x == 1) {
            setActive(2);
            setPackageWebSiteCMS('WordPress');
            setPricePackageWebSiteCMS(900);
        }

    }

    return (
        <div>
            <OffersTitleCardComponent
                titleNumber='3'
                titleSection='Choose your package'
            />
            <div className="chooseYourProject visible-desktop flex-X">
                <OffersCardsWithCheckComponent
                    onClick={() => {
                        setActive(1);
                        setPackageWebSiteCMS('Shopify');
                        setPricePackageWebSiteCMS(300);
                    }}
                    active={active === 1 ? "listing-active" : "listing"}
                    titleCard='Shopify'
                    subtitleCard='Create an online store with the best CMS, and friendly use for merchants'
                    pricePackage='$349'
                    detailPrice='(1 landing page + up to 5 products)'
                />
                <OffersCardsWithCheckComponent
                    onClick={() => {
                        setActive(2);
                        setPackageWebSiteCMS('WordPress');
                        setPricePackageWebSiteCMS(900);
                    }}
                    active={active === 2 ? "listing-active" : "listing"}
                    titleCard='WordPress'
                    subtitleCard='Create an online blog, porfolio, showcase site with the best CMS for this type of content, and friendly use for posting articles, or modifying texts
                '
                    pricePackage='$349'
                    detailPrice='(1 landing page)'
                />
            </div>
            <div className="chooseYourProject visible-phone">
                <Carousel afterChange={onChange}>
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(1);
                            setPackageWebSiteCMS('Shopify');
                            setPricePackageWebSiteCMS(300);
                        }}
                        active={active === 1 ? "listing-active" : "listing"}
                        titleCard='Shopify'
                        subtitleCard='Create an online store with the best CMS, and friendly use for merchants'
                        pricePackage='$349'
                        detailPrice='(1 landing page + up to 5 products)'
                    />
                    <OffersCardsWithCheckResponsiveComponent
                        onClick={() => {
                            setActive(2);
                            setPackageWebSiteCMS('WordPress');
                            setPricePackageWebSiteCMS(900);
                        }}
                        active={active === 2 ? "listing-active" : "listing"}
                        titleCard='WordPress'
                        subtitleCard='Create an online blog, porfolio, showcase site with the best CMS for this type of content, and friendly use for posting articles, or modifying texts
                '
                        pricePackage='$349'
                        detailPrice='(1 landing page)'
                    />
                </Carousel>
            </div>
            {renderElements()}
        </div>
    );
}

export default OffersChooseYourPackageCMSComponent;
