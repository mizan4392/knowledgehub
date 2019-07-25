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
                    <div className="col-md-4 col-sm-4 sec text-center">Profile</div> 
                </div>
            </div>
        )
    }
}

export default Home;
