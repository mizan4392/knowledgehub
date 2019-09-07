import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./Post.css";
import like from '../../assets/liked.svg'
import unlike from '../../assets/unlike.png'
import { NavLink } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { likePost, unLikePost } from "../../redux/actions/dataAction";

class Post extends Component {
  likedPost = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(like => like.postId === this.props.postId)
    )
      return true;
    else return false;
  };
  likePost = () => {
    this.props.likePost(this.props.postId);
  };
  unlikePost = () => {
    this.props.likePost(this.props.postId);
  };

  render() {
    const {
      body,
      userImage,
      userName,
      createdAt,
      likeCount,
      user: { authenticated }
    } = this.props;
    dayjs.extend(relativeTime);

    const likeButton = !authenticated ? (
      <NavLink to="/login">
        <button className="btn btn-light liked"><img src={unlike} width="25px" height="25px"></img></button>
      </NavLink>
    ) : this.likedPost() ? (
      <button onClick={this.unlikePost} className="btn btn-light liked"><img src={like} width="25px" height="25px"></img></button>
    ) : (
      <button onClick={this.likePost} className="btn btn-light unlike"><img src={unlike} width="25px" height="25px"></img></button>
    );
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
            <div>
              {likeButton}
            </div>

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

const mapActionsToProps = {
  likePost,
  unLikePost
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Post);
