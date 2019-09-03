import React, { Component } from "react";
import "./Login.css";
//redux
import { connect } from "react-redux";
import {loginUser} from "../../redux/actions/userAction";


class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  };
  //setting the form value to state
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="bg container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12" />
          <div className="col-md-4 col-sm-4 col-xs-12">
            <form className="form-container" onSubmit={this.handleSubmit}>
              <h1>User Login</h1>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
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
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  className="form-control"
                  id="exampleInputPassword1"
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
              {errors.general && <span className="alert">{errors.general}</span>}
              <button type="submit" className="btn btn-success btn-block">
                Login
              </button>
            </form>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);
