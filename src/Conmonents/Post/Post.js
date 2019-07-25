import React, { Component } from 'react'
import './Post.css';
import dropDownIcon from '../../assets/drop-down.png';



class Post extends Component {
    render() {
        return (  
            <div class="container card-section">
                 <div class="card text-info">
                    <div class="card-header text-left text-info">
                        <div className="row flex-nowrap">
                            <div className="col-md-1 test-grid col-sm-1">
                                <img alt="somthing" src="" />
                            </div>
                            <div className="col-md-10 test-grid col-sm-10">
                                <a className="text-style user-style" href="#">Mizanur Rahman</a>
                                <p className="text-style post-time">Just Now</p>
                            </div>
                            <div className="col-md-1 test-grid col-sm-1">
                                <button className="btn-bg"></button>
                            </div>
                        </div>
                    </div>
                        <div class="card-body ">
                            <h5 class="card-title text-style">Post Title</h5>
                            <p class="card-text text-left text-style">Place some text for the service 1 here. Place some text for the service 1 here. Place some text for the service 1 here.</p>
                        </div>
                        <div class="card-footer text-right text-danger btn-style">
                        <a href="#" class=""></a>
                         <a href="#" class=" ">Comment</a>
                         <a href="#" class=" ">Share</a>
                        </div>       
                  </div>
             </div>
        )
    }
}

export default Post;
