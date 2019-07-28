import React, { Component } from 'react'
import './Home.css';
import Post from '../../Conmonents/Post/Post';

class Home extends Component {
    render() {
        return (
            <div className="container main">
                <div className="row">
                    <div className="col-md-8 col-sm-8"> 
                        <Post />
                        <Post />
                        <Post />
                    </div>
                    <div className="col-md-4 col-sm-4 text-center">
                        <div className="card text-center container">
                            <img src="" alt="Profie Image"></img>
                            <h6 className="text-style">User Name</h6>
                            <h6 className="text-style">Join Date</h6>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Home;
