import React from 'react';

import './custom-button.styles.scss'
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

function CustomButtonComponent(props) {



    return (
        <button
        className="btn purple-shadow"
        onClick={  props.onBtnClick}
        >
            {props.btnText}
        </button>
    );
}

export default CustomButtonComponent;
