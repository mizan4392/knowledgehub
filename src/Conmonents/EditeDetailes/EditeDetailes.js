import React, { Component } from "react";
import "./EditeDetailes.css";
//redux
import { connect } from "react-redux";
import { editUserDetailes } from "../../redux/actions/userAction";

class EditeDetailes extends Component {
  state = {
    bio: "",
    website: "",
    location: ""
  };

  componentDidMount() {
    this.mapUserDetailesToState(this.props.credentials);
  }
  mapUserDetailesToState = credentials => {
    this.setState({
      bio: credentials.bio ? credentials.bio : "",
      website: credentials.website ? credentials.website : "",
      location: credentials.location ? credentials.location : ""
    });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmmit = () =>{
    const userDetailes ={
      bio:this.state.bio,
      website:this.state.website,
      location:this.state.location,
    }

    this.props.editUserDetailes(userDetailes);

  }
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-light"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="fas fa-user-edit"></i>
        </button>

        <div
          className="modal fade"
          id="exampleModal"
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
                      value={this.state.bio}
                      className="in-bg ml-3"
                      placeholder="Update Bio"
                      onChange={this.handleChange}
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
                      value={this.state.website}
                      onChange={this.handleChange}
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
                      value={this.state.location}
                      onChange={this.handleChange}
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
                <button type="button" className="btn btn-primary" onClick={this.handleSubmmit} data-dismiss="modal">
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
const mapStateToProps = state => {
  return {
    credentials: state.user.credentials
  };
};
export default connect(
  mapStateToProps,
  { editUserDetailes }
)(EditeDetailes);
