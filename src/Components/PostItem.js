import React, { Component } from "react";
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css';

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
            <div class="buttonRow">
            <Button
              className="upvote"
              style={{ background: "red" }}
              onClick={() => {
                fetch(`${boastAPI}${this.props.id}/upvotes/`)
                  .then(res => res.json())
                  .then(data => {});
                  window.location.reload()
              }}
            >
            <Icon type="like" />
            Hell yeah</Button>  
            {this.props.total}
            <Button
              className="downvote"
              style={{ background: "blue" }}
              onClick={() => {
                fetch(`${boastAPI}${this.props.id}/downvotes/`)
                  .then(res => res.json())
                    .then(data => { });
                    window.location.reload()
              }}
            >
            Hell Nah
            <Icon type="dislike" />
            </Button>
            </div>
            <br />
            {this.props.date.split('T').join(' ').split('.')[0]}
          </div>
          <br />
        </div>
      </p>
    );
  }
}

export default PostItem;
