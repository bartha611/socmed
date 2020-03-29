"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const axios_1 = __importDefault(require("axios"));
const types = __importStar(require("../store/Comments/types"));
function* createComment(action) {
    try {
        const { payload } = action;
        const response = yield axios_1.default.post("api/comment", payload);
        yield effects_1.put({ type: "CREATE_COMMENT", payload: response.data });
    }
    catch (err) {
        yield effects_1.put({ type: types.ERROR_COMMENT });
    }
}
function* deleteComment(action) {
    try {
        const { id } = action.meta;
        yield axios_1.default.delete(`api/comment/${id}`);
        yield effects_1.put({ type: types.DELETE_COMMENT, meta: { id } });
    }
    catch (err) {
        yield effects_1.put({ type: types.ERROR_COMMENT });
    }
}
function* commentSaga() {
    yield effects_1.takeEvery("CREATE_COMMENT_REQUEST", createComment);
    yield effects_1.takeEvery("DELETE_COMMENT_REUQEST", deleteComment);
}
exports.default = commentSaga;
//# sourceMappingURL=commentSaga.js.map