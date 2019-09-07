import { SET_POSTS, LOADING_DATA, LIKE_POST, UNLIKE_POST } from "../types";
import axios from "axios";


//get All Posts
export const getPosts = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  //get request for post data from /posts route
  axios
    .get("/posts")
    .then(res => {
      //saving the data into state
      dispatch({
          type:SET_POSTS,
          payload:res.data
      })
    })
    .catch(err => {
        dispatch({
            type:SET_POSTS,
            payload:[]
        })
    });
};


//like a post

export const likePost = (postId) => (dispatch) =>{
    axios.get(`/post/${postId}/like`)
        .then(res =>{
            dispatch({
                type:LIKE_POST,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}

//unlike a post

export const unLikePost = (postId) => (dispatch) =>{
    axios.get(`/post/${postId}/unlike`)
        .then(res =>{
            dispatch({
                type:UNLIKE_POST,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}