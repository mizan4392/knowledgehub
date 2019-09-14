import React, { Component } from "react";
import "./DeletePost.css";
//redux
import { connect } from "react-redux";
import { deletePost } from "../../redux/actions/dataAction";

class DeletePost extends Component {
  handleDeletePost = (e) => {
    this.props.deletePost(this.props.postId);
    window.location.href = "/";
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn-bg"
          data-toggle="modal"
          data-target="#DeleteModel"
        >
          <i className="fas fa-trash"></i>
        </button>
        <div
          className="modal fade"
          id="DeleteModel"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <p>Are you sure !! You want to delete the post?</p>
              </div>
              <div>
                <button
                  className="btn btn-danger delete-btn float-left"
                  data-dismiss="modal"
                  data-dismiss="modal"
                  onClick={this.handleDeletePost}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  style={{ float: "right", margin: "18px" }}
                  data-dismiss="modal"
                >
                  Cancle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deletePost }
)(DeletePost);
