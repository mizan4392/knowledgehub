import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import './Profile.css';
//redux
import { connect } from "react-redux";

class Profile extends Component {

  state ={
    user:{},
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ user: nextProps.user });
    }
  }
  handleImageChange(event){

  }

  render() {
    let profileMarkup = !this.state.user.loading ? (
      this.state.user.authenticated ? (
        <div className="Profile">
          <div className="profile-img">
            <img src={this.state.user.credentials.imageUrl} alt="profilePicture" width="200" height="200"></img>
            <input type="file" id="imageInput" onChange={this.handleImageChange} />
          </div>
          <div >
            <NavLink to={`/users/${this.state.user.credentials.userName}`} className="profile-detalis">{this.state.user.credentials.userName}</NavLink>
          </div>
          {this.state.user.credentials.bio && <p className="bio">{this.state.user.credentials.bio}</p>}
          {this.state.user.credentials.location && <span className="location">{this.state.user.credentials.location}</span>}<br/>
          {this.state.user.credentials.website && (
            <a href={this.state.user.credentials.website} target="_blank" rel="noopener noreferrer" className="website">
              {this.state.user.credentials.website}<br/>
            </a>
          )}
          <span className="createdAt">Joined {dayjs(this.state.user.credentials.createdAt).format("MMM YYYY")}</span>
        </div>
      ) : (
        <div>
          <p className="not-found"> No profile found Login again</p>
          <NavLink to="/login">Login Again</NavLink>
        </div>
      )
    ) : (
      <p>Loading</p>
    );

    return profileMarkup;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Profile);
