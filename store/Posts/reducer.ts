import * as types from "./types";

const initialState = {
  loading: false,
  posts: [],
  error: false
};

const postReducer = (
  state: types.postState = initialState,
  action: types.postActionTypes
) => {
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
  }
};

export default postReducer;
