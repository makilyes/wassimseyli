const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
