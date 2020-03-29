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
    comments: [],
    error: false
};
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_COMMENT:
            return Object.assign(Object.assign({}, state), { loading: true, error: false });
        case types.CREATE_COMMENT:
            return Object.assign(Object.assign({}, state), { comments: [...state.comments, action.payload], loading: false });
        case types.READ_COMMENT:
            return Object.assign(Object.assign({}, state), { comments: action.payload, loading: false });
        case types.UPDATE_COMMENT:
            return Object.assign(Object.assign({}, state), { loading: false, comments: state.comments.map(comment => {
                    return comment.id === action.payload.id ? action.payload : comment;
                }) });
        case types.DELETE_COMMENT:
            return Object.assign(Object.assign({}, state), { comments: state.comments.filter(x => x.id !== action.meta.id), loading: false });
        case types.ERROR_COMMENT:
            return Object.assign(Object.assign({}, state), { error: true, loading: false });
    }
};
exports.default = commentReducer;
//# sourceMappingURL=reducer.js.map