import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class write extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h3>Coming Soon</h3>
      </div>
    );
  }
}
