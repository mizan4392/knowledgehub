import React, { Component } from "react";
import "./CreatePost.css";

class CreatePost extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="nav-link nav-btn"
          data-toggle="modal"
          data-target="#CreatePost"
        >
          <i className="fas fa-plus fa-lg"></i>
        </button>

        <div
          className="modal fade"
          id="CreatePost"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit User
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className=" mb-3">
                    <i className="fas fa-file-word"></i>
                    <input
                      type="text"
                      id="form31"
                      name="bio"
                      className="in-bg ml-3"
                      placeholder="Update Bio"
                    />
                  </div>
                  <div className=" mb-3">
                    <i className="fas fa-link"> </i>
                    <input
                      type="text"
                      id="form31"
                      name="website"
                      className="in-bg ml-3"
                      placeholder="your Personal//professional Website"
                    />
                  </div>
                  <div className=" mb-3">
                    <i className="fas fa-map-marker-alt"></i>
                    <input
                      type="text"
                      id="form31"
                      name="location"
                      className="in-bg ml-3"
                      placeholder="Enter Your Location"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
