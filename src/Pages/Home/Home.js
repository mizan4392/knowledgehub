import React, { Component } from "react";
import "./Home.css";
import Post from "../../Conmonents/Post/Post";
import Profile from "../Profile/Profile";
//redux
import { connect } from 'react-redux';
import { getPosts} from '../../redux/actions/dataAction';


class Home extends Component {

  componentDidMount() {
    this.props.getPosts()
  }
  render() {
    // cheaking state have any data ,if true then map over the data and send it to <Post/> component as props
    let recentPost = !this.props.data.loading ? (
      this.props.data.posts.map(post => (
        <Post
          key={post.postId}
          body={post.body}
          userName={post.userName}
          createdAt={post.createdAt}
          userImage={post.userImage}
          postId={post.postId}
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
            <div className="card text-center container mt-3">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}
export default connect(mapStateToProps,{getPosts})( Home);
