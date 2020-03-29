"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
require("./login.css");
const Login = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const handleSubmit = () => {
        // TODO
        console.log(username);
        console.log(email);
    };
    return (React.createElement(reactstrap_1.Container, { id: "login-form", className: "mt-5" },
        React.createElement(reactstrap_1.Form, { className: "pt-4" },
            React.createElement(reactstrap_1.InputGroup, null,
                React.createElement(reactstrap_1.InputGroupAddon, { addonType: "prepend" },
                    React.createElement(reactstrap_1.InputGroupText, null,
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser }))),
                React.createElement(reactstrap_1.Input, { type: "text", name: "username", placeholder: "Username", onChange: (e) => {
                        setUsername(e.target.value);
                    } })),
            React.createElement("br", null),
            React.createElement(reactstrap_1.InputGroup, null,
                React.createElement(reactstrap_1.InputGroupAddon, { addonType: "prepend" },
                    React.createElement(reactstrap_1.InputGroupText, null,
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faKey }))),
                React.createElement(reactstrap_1.Input, { type: "password", name: "password", placeholder: "Password", onChange: (e) => {
                        setEmail(e.target.value);
                    } })),
            React.createElement("br", null),
            React.createElement(reactstrap_1.Button, { onClick: () => handleSubmit() }, "Submit"))));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map