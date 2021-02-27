import { React, Component } from "react";
import NavbarComp from './NavbarComp';
import "./main.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="landingStyle">
        <NavbarComp />
      </div>
    );
  }
}
