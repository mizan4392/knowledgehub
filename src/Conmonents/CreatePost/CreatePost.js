import React, { Component } from "react";
import "./CreatePost.css";
// redux
import { connect } from "react-redux";
import { createPost } from "../../redux/actions/dataAction";

class CreatePost extends Component {
  state = {
    body: "",
    errors: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: "" });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmmit = e => {
    if (this.state.body) {
      this.props.createPost({ body: this.state.body });
      window.location.href = "/";
    } else {
      this.setState({ errors: "Cann't Be Empty" });
    }
  };
  Close = () => {
    this.setState({ errors: null });
  };

  render() {
    let showError = this.state.errors && <p>"Empty"</p>;

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
                  Create New Post
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
                    <input
                      type="textArea"
                      id="form31"
                      name="body"
                      className="in-bg ml-3"
                      placeholder="Write Your Post"
                      onChange={this.handleChange}
                    />
                    
                    {showError}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.Close}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleSubmmit}
                  data-dismiss={!this.state.errors ? "null" : "modal"}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  UI: state.UI.loading
});

export default connect(
  mapStateToProps,
  { createPost }
)(CreatePost);
