import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

export default class write extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      likes: "",
      title: "",
      status: false,
    };
  }

  onChangeHandle = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  insertIntoDB = (event) => {
    event.preventDefault();
    const post = firebase.database().ref("Posts");
    post.push({
      Author: this.state.author,
      Likes: this.state.likes,
      Title: this.state.title,
    });
    alert("Successfully Inserted");
    this.setState({
      author: "",
      likes: "",
      title: "",
    });
  };

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h3>Write the data to firebase</h3>
        <form onSubmit={this.insertIntoDB}>
          <label>Author : </label>
          <input
            type="text"
            value={this.state.author}
            onChange={this.onChangeHandle("author")}
          />
          <br />
          <label>Likes : </label>
          <input
            type="text"
            value={this.state.likes}
            onChange={this.onChangeHandle("likes")}
          />
          <br />
          <label>Title : </label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.onChangeHandle("title")}
          />
          <br />
          <br />
          <br />
          <button type="submit">Insert</button>
        </form>
      </div>
    );
  }
}
