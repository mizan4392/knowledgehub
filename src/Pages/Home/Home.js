import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import Post from "../../Conmonents/Post/Post";

const token = localStorage.FBAuth;

class Home extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    //get request for post data from /posts route
    axios
      .get("https://us-central1-knowledgehub-67e03.cloudfunctions.net/api/posts")
      .then(res => {
        //saving the data into state
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));

    axios.get(`/user/Auth ${token}`).then(res => {
      console.log("res", res);
    });
  }
  render() {
    // cheaking state have any data ,if true then map over the data and send it to <Post/> component as props
    let recentPost = this.state.posts ? (
      this.state.posts.map(post => (
        <Post
          key={post.postId}
          body={post.body}
          userName={post.userName}
          createdAt={post.createdAt}
          userImage={post.userImage}
        />
      ))
    ) : (
      <p>Loading....</p>
    );
    return (
      <div className="container main">
        <div className="row">
          <div className="col-md-8 col-sm-8">{recentPost}</div>
          <div className="col-md-4 col-sm-4 text-center">
            <div className="card text-center container">
              <img src="" alt="Profie Image"></img>
              <h6 className="text-style">User Name</h6>
              <h6 className="text-style">Join Date</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
