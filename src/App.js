import React, { Component } from 'react'
import Navigation from './Conmonents/Navigation/Navigation';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { BrowserRouter,Switch,Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;

