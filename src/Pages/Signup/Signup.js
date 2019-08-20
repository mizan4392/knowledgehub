import React, { Component } from "react";
import axios from 'axios';
import "./Signup.css";
import Particles from "react-particles-js";

const params = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 200
      }
    }
  }
};

class Signup extends Component {

  state = {
    email: "",
    password: "",
    confirmPassword:"",
    userName:"",
    loading: false,
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });

    let newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword:this.state.confirmPassword,
      userName:this.state.userName
    };
    console.log(newUserData)
    axios
      .post(
        "https://us-central1-knowledgehub-67e03.cloudfunctions.net/api/signup",
        newUserData
      )
      .then(res => {
        console.log(res.data);
        localStorage.setItem('FBIdtoken',`Auth ${res.data.token}`)
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false
        });
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="bg">
        <Particles params={params} className="particales" />
        <div className=" container-fluid">
          <form className="form-group form-container container" onSubmit={this.handleSubmit}>
            <h1 className="text-center Label">User SignUp</h1>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="fullName" className="Label">
                  Full Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="userName" className="Label">
                  User Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="userName"
                  value={this.state.userName}
                  placeholder="user Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="Label">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-md-6 mt-4">
                <label htmlFor="gender" className="Label">
                  {" "}
                  Gender
                </label>
                <div className="input-group ">
                  <label htmlFor="radio" className="Label">
                    <input type="radio" name="gender" className="" />
                    Male
                  </label>
                  <label htmlFor="radio" className="Label">
                    <input type="radio" name="gender" className="" />
                    Female
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="Label">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="confirmPassword" className="Label">
                  Conform Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-dark btn-secondary btn-outline-dark"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
