import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from 'axios';
 //components
import Navigation from "./Conmonents/Navigation/Navigation";
//pages
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
//util
import AuthRoute from "./util/AuthRoute";
//Redux
import { Provider } from "react-redux";
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser , getUserData } from './redux/actions/userAction';
import store from "./redux/store";

const token = localStorage.FBIdtoken;
if (token) {
  console.log(token)
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser())
    window.location.href = "/login";
  } else {
    store.dispatch({type:SET_AUTHENTICATED});
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
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
            />
            <AuthRoute
              exact
              path="/signup"
              component={Signup}
            />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Provider>
      </div>
    );
  }
}
export default App;
