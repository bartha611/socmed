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
    user: null,
    error: false
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return Object.assign(Object.assign({}, state), { loading: false, error: false, user: action.payload });
        case types.USER_LOGOUT:
            return Object.assign(Object.assign({}, state), { loading: false, error: false, user: null });
        default:
            return state;
    }
};
exports.default = userReducer;
//# sourceMappingURL=reducer.js.map