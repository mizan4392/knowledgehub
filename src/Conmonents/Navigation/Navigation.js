import React, { Component } from 'react';
import './Navigation.css';

 
class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark Nav-bg navbar-expand-md fixed-top">
                    <a href="#" className="navbar-brand Content-color">KnowledgeHub</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Ligin</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Signup</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="mt-5"></div>
            </div>
        )
    }
}

export default Navigation;
