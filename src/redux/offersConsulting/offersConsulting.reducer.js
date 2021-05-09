
const INITIAL_STATE = {
    typePackageConsulting: {},

}


const offersConsultingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PACKAGE_CONSULTING' : {
            return {
                ...state,
                typePackageConsulting: action.payload,
            }
        };
        default:
            return state;
    }
}

export default offersConsultingReducer;
