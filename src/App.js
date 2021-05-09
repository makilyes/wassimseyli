import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {Switch, Route} from 'react-router-dom';

import HomepageComponent from "./pages/homepage/homepage.component";
import FooterComponent from "./components/footer/footer.component";
import ContactUsComponent from "./pages/contactUs/contactUs.component";
import OffersComponent from "./pages/Offers/offers.component";
import OurStoryPageComponent from "./pages/ourStory/ourStoryPage.component";
import ServicesComponent from "./pages/services/services.component";
import SignInComponent from "./pages/signIn/signIn.component";
import PackagingDesignPageComponent from "./pages/services/packaging-design/packaging-design-page.component";
import DropServicesPageComponent from "./pages/services/dropServices/dropServices-page.component";
import CoachingPageComponent from "./pages/services/coaching/coaching-page.component";
import RegisterComponent from "./pages/register/register.component";
import Navbar from "./components/navbar/Navbar";
import AdminDashboardComponent from "./pages/DELETE - adminDashboard/admin-dashboard.component";
import ResetPasswordComponent from "./pages/resetPassword/resetPassword.component";
import ForgotPasswordComponent from "./pages/forgotPassword/forgotPassword.component";
import UserDashboard from "./pages/userDashboard/userDashboard";
import AdminLayoutComponent from "./components/adminLayout/adminLayout.component";
import Logout from './components/logout/logout';

function App() {

    
    return (
        <div className="App">

            <Navbar/>
            <Switch>
                <Route exact path='/' component={HomepageComponent}/>
                <Route exact path='/contact-us' component={ContactUsComponent}/>
                <Route exact path='/offers' component={OffersComponent}/>
                <Route exact path='/our-story' component={OurStoryPageComponent}/>
                <Route exact path='/sign-in' component={SignInComponent}/>
                <Route exact path='/register' component={RegisterComponent}/>
                <Route exact path='/forgot-password' component={ForgotPasswordComponent}/>
                <Route exact path='/reset-password' component={ResetPasswordComponent}/>
                <Route exact path='/services' component={ServicesComponent}/>
                <Route exact path='/logout' component={Logout}/>
                <Route exact path='/services/branding' component={PackagingDesignPageComponent}/>
                <Route exact path='/services/dropshipping' component={DropServicesPageComponent}/>
                <Route exact path='/services/coaching' component={CoachingPageComponent}/>
                <Route exact path='/user' component={UserDashboard}/>
                <Route exact path='/admin' component={AdminLayoutComponent}/>
            </Switch>
            <FooterComponent/>


        </div>
    );
}

export default App;
