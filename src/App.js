import React, { Component } from "react";
import PostList from "./Components/PostList";

import "./App.css";
const boastAPI = "http://localhost:8000/post/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      content: "",
      boast: false
    };
  }
  getPosts = () => {
    fetch(boastAPI)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  };
  handleSubmit = e => {
    e.preventDefault();
    let content = e.target.children[3].value;
    let boast = e.target.children[1].checked;
    this.boast = boast;
    this.content = content;
    this.NewPost()
  };
  upVote = e => {
    fetch(`${boastAPI}upvotes/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  }
  downVote = e => {
    fetch(`${boastAPI}downvotes/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  }
  componentDidMount() {
    this.getPosts();
  }
  BoastsOnly = () => {
    fetch(`${boastAPI}boasts_only/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  };
  RoastsOnly = () => {
    fetch(`${boastAPI}roasts_only/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  };
  Highest = () => {
    fetch(`${boastAPI}highest_to_lowest/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  };
  Lowest = () => {
    fetch(`${boastAPI}lowest_to_highest/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  };
  NewPost = () => {
    let payload = {
      boast: this.boast,
      content: this.content
    };
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    };
    fetch(boastAPI, options)
      .then(res => res.json())
      .then(data => {
        this.getPosts();
        console.log(data)
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.BoastsOnly}>Boast</button>
        <button onClick={this.RoastsOnly}>Roast </button>
        <button onClick={this.Highest}>Highest </button>
        <button onClick={this.Lowest}>Lowest </button>
        <form onSubmit={this.handleSubmit}>
          <label>Boast</label>
          <input type="checkbox" value="boast" />
          <br />
          <input type="text" />
          <input type="submit" value="Submit" />
        </form>
        <p>
          <PostList posts={this.state.posts} />

        </p>
      </div>
    );
  }
}
export default App;