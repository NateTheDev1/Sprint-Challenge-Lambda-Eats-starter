import React from "react";
import "./Header.css";
import {
  Navbar,
  NavbarText,
  NavbarBrand,
  Container,
  NavLink,
} from "reactstrap";
import { Nav, NavItem } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="light" light expand="md" className="nav-main">
      <Container>
        <NavbarBrand href="/" className="header-brand">
          LAMBDA EATS
        </NavbarBrand>
        <Nav className="header-nav">
          <NavItem>
            <NavLink href="/" className="header-link active">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="header-link">
              Help
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
