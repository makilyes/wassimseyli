
const INITIAL_STATE = {
    projectName: '',
    projectBrief: '',
    filesUpload: '',

}


const offersDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PROJECT_DETAILS' : {
            return {
                ...state,
                projectName: action.payload,
            }
        };

        default:
            return state;
    }
}

export default offersDetailsReducer;
