import React, { Component } from "react";
import PostItem from "./PostItem.js";

class PostList extends Component {
  render() {
    return (
      <section>
        <ul>
          {this.props.posts.map(post => (
            <PostItem
              id={post.id}
              boast={post.boast}
              content={post.content}
              upvote={post.upvote}
              downvote={post.downvote}
              total={post.total}
              date={post.date}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default PostList;
