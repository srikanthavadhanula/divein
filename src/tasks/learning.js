import React, { Component } from "react";
import Greet from "./Greeting";

export default class learning extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Learn ReactJS</h1>
        <Greet name="Srikanth">Welcome to our home</Greet>
        <Greet name="Srikanth" />
      </div>
    );
  }
}
