import * as types from "./types";

const initialState: types.userState = {
  loading: false,
  user: null,
  error: false
};
const userReducer = (
  state: types.userState = initialState,
  action: types.userActionType
): types.userState => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload
      };
    case types.USER_LOGOUT:
      return {
        ...state,
        loading: false,
        error: false,
        user: null
      };
    default:
      return state;
  }
};

export default userReducer;
