import React, { Component } from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";

export default class read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ["Loading"],
    };
  }

  componentDidMount() {
    const posts = firebase.database().ref("Posts");
    posts.on("value", (snapshot) => {
      let newPosts = snapshot.val();
      let storage = [];
      for (let post in newPosts) {
        storage.push({
          Author: newPosts[post].Author,
          Title: newPosts[post].Title,
          Likes: newPosts[post].Likes,
        });
      }
      this.setState({
        posts: storage,
      });
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Welcome to Posts</h1>
        {this.state.posts.map((post) => {
          return (
            <div>
              <h2>Title : {post.Title}</h2>
              <h4>Author : {post.Author}</h4>
              <h5>Likes : {post.Likes}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}
