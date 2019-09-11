import React, { Component } from "react";
import "./DeletePost.css";
//redux
import { connect } from "react-redux";
import { deletePost } from "../../redux/actions/dataAction";

class DeletePost extends Component {
  handleDeletePost = () => {
    this.props.deletePost(this.props.postId);
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
          class="modal fade"
          id="DeleteModel"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body">
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
