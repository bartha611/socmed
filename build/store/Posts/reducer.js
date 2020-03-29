"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("./types"));
const initialState = {
    loading: false,
    posts: [],
    error: false
};
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_POST:
            return Object.assign(Object.assign({}, state), { loading: true });
        case types.CREATE_POST:
            return Object.assign(Object.assign({}, state), { loading: false, error: false, posts: [...state.posts, action.payload] });
        case types.DELETE_POST:
            return Object.assign(Object.assign({}, state), { error: false, loading: false, posts: state.posts.filter(x => x.id !== action.meta.id) });
        case types.READ_POST:
            return Object.assign(Object.assign({}, state), { error: false, loading: false, posts: action.payload });
        case types.ERROR_POST:
            return Object.assign(Object.assign({}, state), { error: true });
    }
};
exports.default = postReducer;
//# sourceMappingURL=reducer.js.map