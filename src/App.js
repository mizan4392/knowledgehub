import React, { Component } from "react";
import Navigation from "./Conmonents/Navigation/Navigation";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LoginNavigation from "./Conmonents/LoginNavigation/LoginNavigation";
import Profile from "./Pages/Profile/Profile";
import jwtDecode from "jwt-decode";
import AuthRoute from "./util/AuthRoute";

let authenticated;
const token = localStorage.FBIdtoken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <AuthRoute
            exact
            path="/login"
            component={Login}
            authenticated={authenticated}
          />
          <AuthRoute
            exact
            path="/signup"
            component={Signup}
            authenticated={authenticated}
          />
          <Route path="/user/home" component={LoginNavigation} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}
export default App;
