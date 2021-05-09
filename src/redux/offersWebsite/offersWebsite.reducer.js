
const INITIAL_STATE = {
    typeWebsite : '',
    typePackageWebsite: {},
    numberProducts: 0,
    numberPages: 0,
    wooCommerce: {},
    typePackageConsulting: {},

}


const offersWebsiteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TYPE_WEBSITE': {
            return {
                ...state,
                typeWebsite: action.payload,
            }
        };
        case 'PACKAGE_WEBSITE': {
            return {
                ...state,
                typePackageWebsite: action.payload,
            }
        };
        case 'NUMB_PRODUCTS_WEBSITE': {
            return {
                ...state,
                numberProducts: action.payload,
            }
        };
        case 'NUMB_PAGES_WEBSITE': {
            return {
                ...state,
                numberPages: action.payload,
            }
        };
        case 'WOOCOMMERCE': {
            return {
                ...state,
                wooCommerce: action.payload,
            }
        };
        default:
            return state;
    }
}

export default offersWebsiteReducer;
