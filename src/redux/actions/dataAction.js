import {
  SET_POSTS,
  LOADING_DATA,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_ERRORS,
  CREATE_POST
} from '../types'
import axios from 'axios'

// get All Posts
export const getPosts = () => dispatch => {
  console.log("found")
  dispatch({ type: LOADING_DATA })
  // get request for post data from /posts route
  axios
    .get('/posts')
    .then(res => {
      // saving the data into state
      dispatch({
        type: SET_POSTS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: SET_POSTS,
        payload: []
      })
    })
}



// like a post

export const likePost = postId => dispatch => {
  axios
    .get(`/post/${postId}/like`)
    .then(res => {
      dispatch({
        type: LIKE_POST,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

// unlike a post

export const unLikePost = postId => dispatch => {
  axios
    .get(`/post/${postId}/unlike`)
    .then(res => {
      dispatch({
        type: UNLIKE_POST,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

// Create Post

export const createPost = newPost => dispatch => {
  dispatch({ type: LOADING_UI })
  axios
    .post('/post', newPost)
    .then(res => {
      dispatch({
        type: CREATE_POST,
        payload: res.data
      })
      dispatch({ type: CLEAR_ERRORS })
      window.location.reload()
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}

// Delete post

export const deletePost = postId => dispatch => {
  axios
    .delete(`/post/${postId}`)
    .then(() => {
      dispatch({ type: DELETE_POST, payload: postId })
    })
    .catch(err => console.log(err))
}
