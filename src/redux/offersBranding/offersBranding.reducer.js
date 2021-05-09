
const INITIAL_STATE = {
    typeBranding: '',
    typePackageBranding: {},

}


const offersBrandingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TYPE_BRANDING' : {
            return {
                ...state,
                typeBranding: action.payload,
            }
        };
        case 'TYPE_PACKAGE_BRANDING' : {
            return {
                ...state,
                typePackageBranding: action.payload,
            }
        };

        default:
            return state;
    }
}

export default offersBrandingReducer;
