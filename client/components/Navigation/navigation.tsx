import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Navigation = () => {
  const [isOpen, setisOpen] = React.useState<boolean>(false);
  const toggle = () => setisOpen(!isOpen);
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand className="mr-auto" href="/">
        MyFace
      </NavbarBrand>
      <NavbarToggler onClick={toggle} id="toggler" />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto">
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup">Signup</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
