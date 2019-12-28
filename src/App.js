import React, { Component } from "react";
import PostList from "./Components/PostList";
import { Button } from 'antd'

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
    });
    window.location.reload()
  };
  upVote = e => {
    let payload = {
      upvote: this.upvote
    };
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    };
    fetch(`${boastAPI}upvotes/`, options)
    .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
    }
  downVote = e => {
    let payload = {
      downvote: this.downvote
    };
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    };
      fetch(`${boastAPI}downvotes/`, options)
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
  LeastRecent = () => {
    fetch(`${boastAPI}least_recent/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  };
  MostRecent = () => {
    fetch(`${boastAPI}most_recent/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  };
  render() {
    return (
      <div className= "background">
        <div className="navbar">
        <Button onClick={this.BoastsOnly} style={{ background: "grey" }}>Boast</Button>
        <Button onClick={this.RoastsOnly} style={{ background: "grey" }}>Roast </Button>
        <Button onClick={this.Highest} style={{ background: "grey" }}>Highest </Button>
        <Button onClick={this.Lowest} style={{ background: "grey" }}>Lowest </Button>
        <Button onClick={this.MostRecent} style={{ background: "grey" }}>Newst</Button>
        <Button onClick={this.LeastRecent} style={{ background: "grey" }}>Oldest</Button>
        </div>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>Boast</label>
          <input type="checkbox" value="boast" />
          <br />
          <input type="text" />
          <br/>
          <input type="submit" value="Sumbit" />
        </form>
        {/* <Form onSubmit={this.handleSubmit}>
        <Form.Item>

        </Form.Item>
        <Form.Item>
         {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              Boast
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled='Submit'>
            Post!
          </Button>
        </Form.Item>
      </Form> */}
        <p>
        <br />
          <PostList posts={this.state.posts} />
        </p>
      </div>
    );
  }
}
export default App;