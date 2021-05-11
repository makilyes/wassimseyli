import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import ScrollToTop from "./components/scrollUp/scrollUp.component";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_uDA6moUBkTqeaDEOK5TdZp7700kyuwEHhe');


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <ScrollToTop/>
                <Elements stripe={stripePromise}>
                    <App/>
                </Elements>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
