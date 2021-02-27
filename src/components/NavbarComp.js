import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import logo from "./logo/Original.png";
import "./main.css";

export default class NavbarComp extends Component {
  render() {
    return (
      <Navbar className="nav-css">
        <Navbar.Brand href="#home">
          <img src={logo} className="navbarLogo" alt="logo" />
        </Navbar.Brand>
        <Nav className="myName-nav">JAKE PETERSEN</Nav>
      </Navbar>
    );
  }
}
