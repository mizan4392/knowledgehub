import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import Particles from "react-particles-js";


// ParticalJs params 
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

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    //setting the loding state true for show a spinner on button
    this.setState({loading:true});
    let userData = {
      email: this.state.email,
      password: this.state.password
    };
    // api request to login route with email and password
    axios
      .post(
        "https://us-central1-knowledgehub-67e03.cloudfunctions.net/api/login",
        userData
      )
      .then(res => {
        localStorage.setItem("FBIdtoken", `Auth ${res.data.token}`);
        // this.setState({loading:false})
        // Changing the route to root route
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false
        });
      });
  };
  //setting the form value to state
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors, loading } = this.state;
    return (
      <div className="bg container-fluid">
        <Particles params={params} className="particales" />
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
              </div>
              {errors.general && <p className="alert">{errors.general}</p>}
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

export default Login;
