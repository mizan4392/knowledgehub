import React, { Component } from 'react'
import './Login.css';


class Login extends Component {
    render() {
        return (
            <div className="bg container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                          <form className="form-container">
                            <h1>User Login</h1>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-success btn-block">Login</button>
                        </form>
                        
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                </div>
                
            </div>
        )
    }
}
export default Login;
