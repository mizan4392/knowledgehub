import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./Post.css";

class Post extends Component {
  render() {
    const { body, userImage, userName, createdAt } = this.props;
    dayjs.extend(relativeTime);
    return (
      <div className="container card-section">
        <div className="card text-info card">
          <div className="card-header text-left text-info">
            <div className="row flex-nowrap">
              <div className="col-md-1 test-grid col-sm-1">
                <img
                  alt="somthing"
                  src={userImage}
                  width="50px"
                  height="50px"
                  style={{ borderRadius: "30px" }}
                />
              </div>
              <div className="col-md-10 test-grid col-sm-10">
                <a className="text-style user-style" href="#">
                  {userName}
                </a>
                <p className="text-style post-time">
                  {dayjs(createdAt).fromNow()}
                </p>
              </div>
              <div className="col-md-1 test-grid col-sm-1">
                <input type="button" className="btn-bg"></input>
              </div>
            </div>
          </div>
          <div className="card-body ">
            <p className="card-text text-left text-style">{body}</p>
          </div>
          <div className="card-footer text-right text-danger btn-style">
            <a href="#" className="">
              Love
            </a>
            <a href="#" className=" ">
              Comment
            </a>
            <a href="#" className=" ">
              Share
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
