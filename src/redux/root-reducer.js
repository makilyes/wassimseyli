import { combineReducers } from 'redux';

import homePageDescriptionReducer from "./homePage-descriptions/homePage-descriptions.reducer";
import designPageReducer from "./servicesPage/designPage/designPage.reducer";
import dropshipServicesReducer from "./servicesPage/dropShipServicesPage/dropshipServicesPage.reducer";
import coachingReducer from "./servicesPage/coachingPage/coachingPage.reducer";
import ourStoryReducer from "./ourStoryPage/ourStoryPage.reducer";
import offersWebsiteReducer from "./offersWebsite/offersWebsite.reducer";
import offersConsultingReducer from "./offersConsulting/offersConsulting.reducer";
import offersBrandingReducer from "./offersBranding/offersBranding.reducer";
import offersDetailsReducer from "./offersDetails/offersDetails.reducer";

const rootReducer = combineReducers({
    homePageDescriptionReducer,
    designPageReducer,
    dropshipServicesReducer,
    coachingReducer,
    ourStoryReducer,
    offersWebsiteReducer,
    offersConsultingReducer,
    offersBrandingReducer,
    offersDetailsReducer
})

export default rootReducer;
