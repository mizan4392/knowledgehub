import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
 

class Navigation extends Component {

    render() {

        return (
            <div>
                <nav className="navbar navbar-dark Nav-bg navbar-expand-md fixed-top">
                    <NavLink to="/" className="navbar-brand Content-color">KnowledgeHub</NavLink>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/login">Ligin</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/signup">Signup</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <div className="mt-5"></div>
            </div>
        )
    }
}

export default Navigation;
