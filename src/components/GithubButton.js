import React, { Component } from "react";
import { Button } from "react-bootstrap";
import './main.css';

export default class GithubButton extends Component {
  render() {
    return <Button className="githubButton-css" variant="light">GITHUB</Button>;
  }
}
