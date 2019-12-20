import React, { Component } from "react";
const boastAPI = "http://localhost:8000/post/";

class PostItem extends Component {
  render() {
    return (
      <p>
        <div className={this.props.boast === true ? "Boast" : "Roast"}>
          {this.props.boast === true ? "Boast" : "Roast"}
          <div className="view">
            <label>{this.props.content}</label>
            <br />
            <button
              className="upvote"
              onClick={() => {
                fetch(`${boastAPI}${this.props.id}/upvotes/`)
                  .then(res => res.json())
                  .then(data => {});
              }}
            >hell yeah</button>
            {this.props.total}
            <button
              className="downvote"
              onClick={() => {
                fetch(`${boastAPI}${this.props.id}/downvotes/`)
                  .then(res => res.json())
                  .then(data => {});
              }}
            >Hell Nah</button>
            <br />
            {this.props.date}
          </div>
          <br />
        </div>
      </p>
    );
  }
}

export default PostItem;
