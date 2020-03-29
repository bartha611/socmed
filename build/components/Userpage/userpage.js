"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const reactstrap_1 = require("reactstrap");
const Userpage = () => {
    const [messages, setMessages] = React.useState([]);
    const [input, setInput] = React.useState("");
    const dispatch = react_redux_1.useDispatch();
    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            setMessages([...messages, input]);
            setInput("");
        }
    };
    React.useEffect(() => {
        window.addEventListener("keydown", handleEnter);
        return () => {
            window.removeEventListener("keydown", handleEnter);
        };
    });
    return (React.createElement("div", null,
        messages.map(message => {
            return React.createElement("div", null, message);
        }),
        React.createElement(reactstrap_1.Form, null,
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Input, { type: "textarea", name: "message", onChange: (e) => {
                        setInput(e.target.value);
                    }, value: input })))));
};
exports.default = Userpage;
//# sourceMappingURL=userpage.js.map