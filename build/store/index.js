"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducer_1 = __importDefault(require("./Users/reducer"));
const reducer_2 = __importDefault(require("./Posts/reducer"));
const reducer_3 = __importDefault(require("./Comments/reducer"));
const rootReducer = redux_1.combineReducers({
    user: reducer_1.default,
    post: reducer_2.default,
    comment: reducer_3.default
});
const store = redux_1.createStore(rootReducer);
exports.default = store;
//# sourceMappingURL=index.js.map