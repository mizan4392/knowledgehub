import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import './Profile.css';
import EditeDetailes from '../../Conmonents/EditeDetailes/EditeDetailes';
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
  handleLogout = () =>{
    this.props.logoutUser();
  }

  render() {
    let profileMarkup = !this.state.user.loading ? (
      this.state.user.authenticated ? (
        <div className="Profile mt-3">
          <div className="profile-img">
            <img src={this.state.user.credentials.imageUrl} alt="profilePicture" width="200" height="200"></img>
            <input type="file" id="imageInput" onChange={this.handleImageChange} hidden="hidden" />
            <button className="button btn btn-light" onClick={this.handleEditImage} ><i className="fas fa-paperclip"></i></button>
          </div>
          <div >
            <NavLink to={`/users/${this.state.user.credentials.userName}`} className="profile-detalis"><i className="far fa-user">    {this.state.user.credentials.userName}</i></NavLink>
          </div>
          {this.state.user.credentials.bio && <p className="bio">{this.state.user.credentials.bio}</p>}
          {this.state.user.credentials.location && <span className="location"><i className="fas fa-map-marker-alt">   {this.state.user.credentials.location}</i></span>}<br/>
          {this.state.user.credentials.website && (
            <a href={this.state.user.credentials.website} target="_blank" rel="noopener noreferrer" className="website">
             <i className="fas fa-link">  { this.state.user.credentials.website}</i> <br/>
            </a>
          )}
          <span className="createdAt"> <i className="far fa-hand-pointer">    Joined {dayjs(this.state.user.credentials.createdAt).format("MMM YYYY")}</i></span>
          <div className=' mb-2 d-flex'>
          <button className="btn btn-light mr-2" onClick={this.handleLogout}><i className="fas fa-sign-out-alt"></i></button>
          <EditeDetailes />
        </div>
        </div>
      ) : (
        <div className="mb-3">
          <p className="not-found"> No profile found</p>
          <NavLink to="/login" className="btn btn-secondary">Login Again</NavLink>
        </div>
        
      )
    ) : (
      <p>Loading.....</p>
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
