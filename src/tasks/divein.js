import React, { Component } from "react";
import { Link } from "react-router-dom";
import CKEditor from "ckeditor4-react";
import firebase from "../firebase";

class divein extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: "",
      title: "",
      author: "",
    };
  }

  insert = (event) => {
    event.preventDefault();
    const post = firebase.database().ref("Articles");

    post.push({
      Author: this.state.author,
      Post: this.state.post,
      Title: this.state.title,
    });

    alert("inserted");
  };

  updateState = (event) => {
    this.setState({
      post: event.editor.getData(),
    });
  };

  updateTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  updateAuthor = (event) => {
    this.setState({
      author: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Dive-in</h1>
        <Link to="/">Home</Link>
        <br />
        <label>Post Title : </label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.updateTitle}
        />
        <CKEditor data={this.state.post} onChange={this.updateState} />
        <input
          type="text"
          name="author"
          value={this.state.author}
          onChange={this.updateAuthor}
        />
        <br />
        <input type="submit" name="Submit" onClick={this.insert} />
      </div>
    );
  }
}

export default divein;
