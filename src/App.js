import React, { Component } from 'react'
import jwtDecode from 'jwt-decode';
import Navigation from './Conmonents/Navigation/Navigation';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginNavigation from './Conmonents/LoginNavigation/LoginNavigation';
import Profile from './Pages/Profile/Profile';
import axios from 'axios';


class App extends Component {

  

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/user/home" component={LoginNavigation} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    )
  }
}
export default App;

