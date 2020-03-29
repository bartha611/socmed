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
const reactstrap_1 = require("reactstrap");
const Navigation = () => {
    const [isOpen, setisOpen] = React.useState(false);
    const toggle = () => setisOpen(!isOpen);
    return (React.createElement(reactstrap_1.Navbar, { color: "dark", dark: true, expand: "md" },
        React.createElement(reactstrap_1.NavbarBrand, { className: "mr-auto", href: "/" }, "MyFace"),
        React.createElement(reactstrap_1.NavbarToggler, { onClick: toggle, id: "toggler" }),
        React.createElement(reactstrap_1.Collapse, { isOpen: isOpen, navbar: true },
            React.createElement(reactstrap_1.Nav, { navbar: true, className: "ml-auto" },
                React.createElement(reactstrap_1.NavItem, null,
                    React.createElement(reactstrap_1.NavLink, { href: "/login" }, "Login")),
                React.createElement(reactstrap_1.NavItem, null,
                    React.createElement(reactstrap_1.NavLink, { href: "/signup" }, "Signup"))))));
};
exports.default = Navigation;
//# sourceMappingURL=navigation.js.map