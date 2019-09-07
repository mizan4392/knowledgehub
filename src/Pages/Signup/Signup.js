import React, { Component } from "react";
import "./Signup.css";
//redux
import { connect } from "react-redux";
import { signupUser } from "../../redux/actions/userAction";



class Signup extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    errors: {}
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });

    let newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      userName: this.state.userName
    };
    this.props.signupUser(newUserData, this.props.history);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
        <div className="bg">
          <div className=" container-fluid">
            <form
              className="form-group form-container container"
              onSubmit={this.handleSubmit}
            >
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
                  {this.state.errors.userName ? (
                    <span style={{ color: "red" }}>
                      {this.state.errors.userName}
                    </span>
                  ) : (
                    <span></span>
                  )}
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
                  {this.state.errors.email ? (
                    <span style={{ color: "red" }}>
                      {this.state.errors.email}
                    </span>
                  ) : (
                    <span></span>
                  )}
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
                  {this.state.errors.password ? (
                    <span style={{ color: "red" }}>
                      {this.state.errors.password}
                    </span>
                  ) : (
                    <span></span>
                  )}
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
                className="btn btn-dark btn-secondary btn-outline-dark btn-block"
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { signupUser }
)(Signup);
