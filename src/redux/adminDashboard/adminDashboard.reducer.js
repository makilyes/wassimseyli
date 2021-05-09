const INITIAL_STATE = {
    dataHome : {},
    dataOrders : {}
}

const adminDashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DATA_HOME_ADMINDASH' : {
            return {
                ...state,
                dataHome: action.payload,
            }
        };
        case 'DATA_ORDERS_ADMINDASH' : {
            return {
                ...state,
                dataOrders: action.payload,
            }
        };
        default:
            return state;
    }
}

export default adminDashboardReducer;