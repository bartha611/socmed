import * as types from "../../types/postTypes";

const initialState = {
  loading: false,
  posts: [],
  error: false
};

const postReducer = (
  state: types.PostState = initialState,
  action: types.PostActionTypes
): types.PostState => {
  switch (action.type) {
    case types.LOAD_POST:
      return {
        ...state,
        loading: true
      };
    case types.CREATE_POST:
      return {
        ...state,
        loading: false,
        error: false,
        posts: [...state.posts, action.payload]
      };
    case types.DELETE_POST:
      return {
        ...state,
        error: false,
        loading: false,
        posts: state.posts.filter(x => x.id !== action.meta.id)
      };
    case types.READ_POST:
      return {
        ...state,
        error: false,
        loading: false,
        posts: action.payload
      };
    case types.ERROR_POST:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default postReducer;
