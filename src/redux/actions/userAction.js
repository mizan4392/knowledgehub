import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED,LOADING_USER } from "../types";
import axios from 'axios';

export const loginUser = (userData,history) => dispatch => {
  dispatch({ type: LOADING_UI });
  // api request to login route with email and password
  //https://us-central1-knowledgehub-67e03.cloudfunctions.net/api
  axios
    .post("/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token)
      dispatch(getUserData());
      dispatch({type:CLEAR_ERRORS});
      history.push("/");
    })
    .catch((err) => {
      dispatch({
          type:SET_ERRORS,
          payload:err.response.data
      })
    });
};

export const signupUser = (newUserData,history) => dispatch => {
  dispatch({ type: LOADING_UI });
  // api request to login route with email and password
  //https://us-central1-knowledgehub-67e03.cloudfunctions.net/api
  axios
    .post("/signup", newUserData)
    .then((res) => {
      setAuthorizationHeader(res.data.token)
      dispatch(getUserData());
      dispatch({type:CLEAR_ERRORS});
      history.push("/");
    })
    .catch((err) => {
      dispatch({
          type:SET_ERRORS,
          payload:err.response.data
      })
    });
};


export const getUserData = () => dispatch => {
  dispatch({type:LOADING_USER});
    axios.get('/user')
        .then(res =>{
            dispatch({
                type:SET_USER,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
};

export const logoutUser = () => (dispatch) =>{
  localStorage.removeItem('FBIdtoken')
  delete axios.defaults.headers.common['Authorization'];
  dispatch({type:SET_UNAUTHENTICATED});
}

const setAuthorizationHeader = (token) =>{
  const FBIdtoken = `Auth ${token}`;
  localStorage.setItem("FBIdtoken", FBIdtoken);
  axios.defaults.headers.common['Authorization'] = FBIdtoken;
}


//export default loginUser;

