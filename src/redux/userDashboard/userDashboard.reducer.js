const INITIAL_STATE = {
    dataOrders : {},
    dataProfil : {},
    dataCoach : {},
    dataFiles : {},
    dataleads : [
        {clients : {}},
        {students : {}},
        {waitingList : {}},
    ]
}

const userDashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DATA_ORDERS_USERDASH' : {
            return {
                ...state,
                dataOrders: action.payload,
            }
        };
        case 'DATA_PROFIL_USERDASH' : {
            return {
                ...state,
                dataProfil: action.payload,
            }
        };
        case 'DATA_COACH_USERDASH' : {
            return {
                ...state,
                dataProfil: action.payload,
            }
        };
        case 'DATA_CLIENTS_USERDASH' : {
            return {
                ...state,
                dataleads: action.payload,
            }
        };
        case 'DATA_STUDENTS_USERDASH' : {
            return {
                ...state,
                dataleads: action.payload,
            }
        };
        case 'DATA_WAITINGLIST_USERDASH' : {
            return {
                ...state,
                dataleads: action.payload,
            }
        };
        case 'DATA_FILE_USERDASH' : {
            return {
                ...state,
                dataFiles: action.payload,
            }
        };
        default:
            return state;
    }
}

export default userDashboardReducer;