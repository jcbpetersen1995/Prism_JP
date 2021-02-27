import React, { Component } from "react";
import "./main.css";

export default class LinkedInButton extends Component {
  render() {
    return (
      <div
        class="LI-profile-badge linkedInBadge-css"
        data-version="v1"
        data-size="large"
        data-locale="en_US"
        data-type="horizontal"
        data-theme="dark"
        data-vanity="jcbpetersen1995"
      >
        <a
          class="LI-simple-link"
          href="https://www.linkedin.com/in/jcbpetersen1995?trk=profile-badge"
        >
          Jacob Petersen
        </a>
      </div>
    );
  }
}
