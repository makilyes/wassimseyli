import React, {useEffect, useState} from 'react';
import './offers.styles.scss'
import OffersProvideDetailsComponent from "../../components/offers-provideDetails/offers-provideDetails.component";
import OffersJobSummaryComponent from "../../components/offers-jobSummary/offers-jobSummary.component";
import OffersWhatTypeOfWebsiteComponent
    from "../../components/offers-whatTypeOfWebsite/offers-whatTypeOfWebsite.component";
import OffersChooseYourConsultingComponent
    from "../../components/offers-chooseYourConsulting/offers-chooseYourConsulting.component";
import OffersWhatTypeOfBrandingComponent
    from "../../components/offers-whatTypeOfBranding/offers-whatTypeOfBranding.component";
import OffersProjectDetailsComponent from "../../components/offers-proejctDetails/offers-projectDetails.component";
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import MoneyBackComponent from "../../components/moneyBack/moneyBack.component";
import OffersTitleCardComponent from "../../components/offers-titleCard/offers-titleCard.component";
import OffersCardsWithCheckComponent from "../../components/offers-cardsWithCheck/offers-cardsWithCheck.component";
import landingPageIcon from "../../assests/landing-page-icon.svg";
import emailIcon from "../../assests/emailIconOffer.svg";
import {useSelector} from "react-redux";
import offersWebsiteReducer from "../../redux/offersWebsite/offersWebsite.reducer.js";
import offersConsultingReducer from "../../redux/offersConsulting/offersConsulting.reducer.js";
import offersBrandingReducer from "../../redux/offersBranding/offersBranding.reducer";
import offersDetailsReducer from "../../redux/offersDetails/offersDetails.reducer";
import axios from '../../axiosinterceptor';
import { ToastContainer, toast } from 'react-toastify';
import {v4} from 'uuid';
import OffersCardsWithCheckResponsiveComponent
    from "../../components/offers-cardsWithCheck-RESPONSIVE/offers-cardsWithCheck-Responsive.component";
import {Carousel} from "antd";


function OffersComponent(props) {

    const [active, setActive] = useState(1);
    const [cartSent, setCartSent] = useState('false');

    // For type of project
    const [typeProject, setTypeProject] = useState('Website')

    //For type of website projects
    const typeWebsite = useSelector(state => state.offersWebsiteReducer.typeWebsite);
    const packageWebSite = useSelector(state => state.offersWebsiteReducer.typePackageWebsite);
    const numberProducts = useSelector(state => state.offersWebsiteReducer.numberProducts);
    const numberPages = useSelector(state => state.offersWebsiteReducer.numberPages);
    const wooCommerce = useSelector(state => state.offersWebsiteReducer.wooCommerce);

    //For type of consulting projects
    const packageConsulting = useSelector(state => state.offersConsultingReducer.typePackageConsulting)

    //For type of branding projects
    const typeBranding = useSelector(state => state.offersBrandingReducer.typeBranding)
    const typePackageBranding = useSelector(state => state.offersBrandingReducer.typePackageBranding)

    //For details of the project
    const projectName = useSelector(state => state.offersDetailsReducer.projectName)
    const projectBrief = useSelector(state => state.offersDetailsReducer.projectBrief)
    const projectFileUploaded = useSelector(state => state.offersDetailsReducer.filesUpload)


    const addToCart =async (e) =>{
        e.preventDefault();

        if(sessionStorage.getItem('authenticated') && sessionStorage.getItem('authenticated') == 'true') {

        const body= {
            orderType: typeProject,
            websiteType : typeWebsite,
            packageType : typeProject === "Website" ? packageWebSite?.packageWebSiteCMS || packageWebSite?.titlePackageLikeAPro : typeProject === "Consulting" ? packageConsulting?.titlePackageConsulting : typePackageBranding?.titlePackageBranding,
            pages :numberPages.counterPages,
            products : numberProducts.counterProducts,
            useWordpress : wooCommerce.active,
            projectName: projectName.projectName,
            projectDetail : projectName.projectBrief,
            file : projectName.uploadFile,
            typeOfBranding : typeBranding,
            URL : projectName.projectUrl,
            userId : sessionStorage.getItem('userId'),
        }

       
        try {
            const response = await axios.post('http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/addToCart',body);
            if(response.status ==200) {
                toast("Add to cart Successfully", {
                    type: "success",
                  });
       
            }
            setCartSent(v4());
        }
        catch(err)
        {
     
            toast("Error occured. Try Again", {
                type: "error",
              });

            
        }
    }
    else {
        toast("Please log in to add to cart", {
            type: "error",
          });
    }

     
    }



    useEffect(()=>{

    },[cartSent,setCartSent])




    const renderElements = () => {
        switch (active) {
            case 1 :
                return (
                    <>
                        <OffersWhatTypeOfWebsiteComponent/>
                    </>
                );
                break;
            case 2 :
                return (
                    <>
                        <OffersChooseYourConsultingComponent/>

                    </>
                );
                break;
            case 3 :
                return (
                    <>
                        <OffersWhatTypeOfBrandingComponent/>
                    </>
                );
                break;
            case 4 :
                return (
                    <p>Fill the details below with the details of your project and we will come back to you : </p>
                );
                break;
            default:
                return 'error';
        }
    }

    useEffect(()=>{	
    },[cartSent,setCartSent])

    const onChange = (x) => {	
        console.log(x)	
        if (x == 0) {	
            setActive(1);	
            setTypeProject('Website');	
        }	
        else if (x == 1) {	
            setActive(2);	
            setTypeProject('Consulting');	
        }	
        else if (x == 2) {	
            setActive(3);	
            setTypeProject('Branding');	
        }	
        else if (x == 3) {	
            setActive(4);	
            setTypeProject('Offshore');	
        }	
    }



    return (

        <div className='offers-component'>
            <div className="col-1">
                {/* Component 1  */}
                <OffersProvideDetailsComponent/>    
                <div className='chooseYourProject visible-desktop'>
                    {/* Componenet title */}
                    <OffersTitleCardComponent
                        titleNumber='1'
                        titleSection='Place your order'
                    />
                    <div className='flex-X'>
                        {/* 1- card 1 */}
                        <OffersCardsWithCheckComponent
                            titleCard='Website'
                            subtitleCard='You need a website ? Let us hand-code your designs to a website'
                            active={active === 1 ? 'listing-active' : 'listing'}
                            cartItemCount='cart-item-count'
                            cartItemCountValue='0'
                            img={landingPageIcon}
                            onClick={() => {
                                setActive(1)
                                setTypeProject('Website')
                            }}
                        />
                        {/* 1- card 2 */}
                        <OffersCardsWithCheckComponent
                            titleCard='Consulting'
                            subtitleCard='You already have a website, or an online store, and need a coaching session, or help ? Let us help you.'
                            active={active === 2 ? 'listing-active' : 'listing'}
                            cartItemCount='cart-item-count'
                            cartItemCountValue='0'
                            img={emailIcon}
                            onClick={() => {
                                setActive(2)
                                setTypeProject('Consulting')
                            }}
                        />
                        {/* 1- card 3 */}
                        <OffersCardsWithCheckComponent
                            titleCard=' Branding & Ads'
                            subtitleCard='You have a website or product and you need to brand it ? Let us handle all the branding for you'
                            active={active === 3 ? 'listing-active' : 'listing'}
                            cartItemCount='cart-item-count'
                            cartItemCountValue='0'
                            img={emailIcon}
                            onClick={() => {
                                setActive(3)
                                setTypeProject('Branding')
                            }}
                        />
                        {/* 1- card 4 */}
                        <OffersCardsWithCheckComponent
                            titleCard=' OffShore'
                            subtitleCard='You want to create an offshore company ? Let us handle all the papers work for you'
                            active={active === 4 ? 'listing-active' : 'listing'}
                            cartItemCount='cart-item-count'
                            cartItemCountValue='0'
                            img={emailIcon}
                            onClick={() => {
                                setActive(4)
                                setTypeProject('Offshore')
                            }}
                        />
                    </div>
                </div>
                <div className='chooseYourProject visible-phone'>	
                    <Carousel afterChange={onChange}>	
                        <OffersCardsWithCheckResponsiveComponent	
                            titleCard='Website'	
                            subtitleCard='You need a website ? Let us hand-code your designs to a website'	
                            active={active === 1 ? 'listing-active' : 'listing'}	
                            cartItemCount='cart-item-count'	
                            cartItemCountValue='0'	
                            img={landingPageIcon}	
                            imgShow = 'imgContainer-show'	
                            onClick={(e) => {	
                                console.log(e)	
                                setActive(1)	
                                setTypeProject('Website')	
                            }}	
                        />	
                        {/* 1- card 2 */}	
                        <OffersCardsWithCheckResponsiveComponent	
                            titleCard='Consulting'	
                            subtitleCard='You already have a website, or an online store, and need a coaching session, or help ? Let us help you.'	
                            active={active === 2 ? 'listing-active' : 'listing'}	
                            cartItemCount='cart-item-count'	
                            cartItemCountValue='0'	
                            img={emailIcon}	
                            imgShow = 'imgContainer-show'	
                            onClick={() => {	
                                setActive(2)	
                                setTypeProject('Consulting')	
                            }}	
                        />	
                        {/* 1- card 3 */}	
                        <OffersCardsWithCheckResponsiveComponent	
                            titleCard=' Branding & Ads'	
                            subtitleCard='You have a website or product and you need to brand it ? Let us handle all the branding for you'	
                            active={active === 3 ? 'listing-active' : 'listing'}	
                            cartItemCount='cart-item-count'	
                            cartItemCountValue='0'	
                            img={emailIcon}	
                            imgShow = 'imgContainer'	
                            onClick={() => {	
                                setActive(3)	
                                setTypeProject('Branding')	
                            }}	
                        />	
                        {/* 1- card 4 */}	
                        <OffersCardsWithCheckResponsiveComponent	
                            titleCard=' OffShore'	
                            subtitleCard='You want to create an offshore company ? Let us handle all the papers work for you'	
                            active={active === 4 ? 'listing-active' : 'listing'}	
                            cartItemCount='cart-item-count'	
                            cartItemCountValue='0'	
                            img={emailIcon}	
                            imgShow = 'imgContainer-show'	
                            onClick={() => {	
                                setActive(4)	
                                setTypeProject('Offshore')	
                            }}	
                        />	
                    </Carousel>	
                </div>
                {

                    renderElements()
                }
                <OffersProjectDetailsComponent/>
                <div className="btnAndPaymentLogo">
                    <CustomButtonComponent
                        onBtnClick={addToCart}
                        btnText='ADD PROJECT TO CART'/>
                    <MoneyBackComponent/>
                </div>

            </div>
            <div className='col-2'>
                <OffersJobSummaryComponent updated={cartSent}/>
            </div>

            <ToastContainer />
        </div>

    );
}

export default OffersComponent;
