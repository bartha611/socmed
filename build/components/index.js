"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
const navigation_1 = __importDefault(require("./Navigation/navigation"));
const userpage_1 = __importDefault(require("./Userpage/userpage"));
const Login = React.lazy(() => Promise.resolve().then(() => __importStar(require(/*webpackChunkName: "Login" */ "./Login/Login"))));
const LoadingComponent = (Component) => {
    return props => (React.createElement(React.Suspense, { fallback: React.createElement("div", null, "...Loading") },
        React.createElement(Component, Object.assign({}, props))));
};
const App = () => {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { path: "/navigation" },
                React.createElement(navigation_1.default, null)),
            React.createElement(react_router_dom_1.Route, { path: "/login" }, LoadingComponent(Login)),
            React.createElement(react_router_dom_1.Route, { path: "/userpage" },
                React.createElement(userpage_1.default, null)))));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=index.js.map