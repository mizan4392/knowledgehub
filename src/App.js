import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
//components
import Navigation from "./Conmonents/Navigation/Navigation";
import LoginNavigation from "./Conmonents/LoginNavigation/LoginNavigation";
//pages
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
//util
import AuthRoute from "./util/AuthRoute";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

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
        <Provider store={store}>
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
        </Provider>
      </div>
    );
  }
}
export default App;
