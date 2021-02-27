import { React, Component } from "react";
import NavbarComp from "./NavbarComp";
import IntroButton from "./IntroButton";
import AboutMeButton from "./AboutMeButton";
import CareerButton from "./CareerButton";
import PortfolioButton from "./PortfolioButton";
import LinkedInButton from "./LinkedInButton";
import GithubButton from "./GithubButton";
import EmailButton from "./EmailButton";
import ResumeButton from "./ResumeButton";
import "./main.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="landingStyle">
        <NavbarComp />
        <IntroButton />
        <AboutMeButton />
        <CareerButton />
        <PortfolioButton />
        <LinkedInButton />
        <GithubButton />
      </div>
    );
  }
}
