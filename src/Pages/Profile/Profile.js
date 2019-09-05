import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import './Profile.css';
//redux
import { connect } from "react-redux";
import { logoutUser , uplodeImage } from '../../redux/actions/userAction';

class Profile extends Component {

  state ={
    user:{},
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ user: nextProps.user });
    }
  }
  handleImageChange = (event)=>{
    const image = event.target.files[0];

    const formData = new FormData()

    formData.append('image',image,image.name);
    this.props.uplodeImage(formData);

  }
  handleEditImage = ()=>{

    const fileInput = document.getElementById('imageInput');
    fileInput.click();

  }

  render() {
    let profileMarkup = !this.state.user.loading ? (
      this.state.user.authenticated ? (
        <div className="Profile mt-2">
          <div className="profile-img">
            <img src={this.state.user.credentials.imageUrl} alt="profilePicture" width="200" height="200"></img>
            <input type="file" id="imageInput" onChange={this.handleImageChange} hidden="hidden" />
            <a className="button" onClick={this.handleEditImage}><i class="fas fa-paperclip"></i></a>
          </div>
          <div >
            <NavLink to={`/users/${this.state.user.credentials.userName}`} className="profile-detalis"><i class="far fa-user">    {this.state.user.credentials.userName}</i></NavLink>
          </div>
          {this.state.user.credentials.bio && <p className="bio">{this.state.user.credentials.bio}</p>}
          {this.state.user.credentials.location && <span className="location"><i class="fas fa-map-marker-alt">   {this.state.user.credentials.location}</i></span>}<br/>
          {this.state.user.credentials.website && (
            <a href={this.state.user.credentials.website} target="_blank" rel="noopener noreferrer" className="website">
             <i class="fas fa-link">  { this.state.user.credentials.website}</i> <br/>
            </a>
          )}
          <span className="createdAt"> <i class="far fa-hand-pointer">    Joined {dayjs(this.state.user.credentials.createdAt).format("MMM YYYY")}</i></span>
          <div>
          <button className="btn btn-danger btn-outline-primary">LogOut</button>
        </div>
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

const mapActionsToProps = { logoutUser , uplodeImage}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps,mapActionsToProps)(Profile);
