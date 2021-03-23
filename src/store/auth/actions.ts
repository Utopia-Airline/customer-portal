import {
  GET_SESSION, 
  GET_SESSION_FAILURE, 
  GET_SESSION_SUCCESS, 
  LOGIN, LOGIN_FAILURE, 
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE
} from "./types";
import User from "../../models/User";

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserUpdate {
  username: string;
  givenName: string;
  familyName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface UserAdd {
  username: string;
  givenName: string;
  familyName: string;
  role: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export const loginStart = (userLogin: UserLogin) => ({
  type: LOGIN
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const getSession = () => ({
  type: GET_SESSION
});

export const getSessionSuccess = (user: User) => ({
  type: GET_SESSION_SUCCESS,
  payload: user
});

export const getSessionFailure = () => ({
  type: GET_SESSION_FAILURE
});

export const logoutStart = () => ({
  type: LOGOUT
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const logoutFail = () => ({
  type: LOGOUT_FAILURE
});

export const updateUserStart = () => ({
  type: UPDATE_USER
});

export const updateUserSuccess = (user: User) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user
});

export const updateUserFailure = () => ({
  type: UPDATE_USER_FAILURE
});

export const addUserStart = () => ({
  type: ADD_USER
});

export const addUserSuccess = () => ({
  type: ADD_USER_SUCCESS
});

export const addUserFailure = () => ({
  type: ADD_USER_FAILURE
});

// combine all actions in an asynchronous thunk
export function login(url: string, userLogin: UserLogin) {
  return async (dispatch) => {
    dispatch(loginStart(userLogin))
    try {
      const options = {
        method: 'post',
        body: JSON.stringify(userLogin),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
      const res = await fetch(url, options);
      if (res.ok && res.status === 201) {
        dispatch(loginSuccess());
        dispatch(getAuth(url));
      } else
        dispatch(loginFailure());
    } catch (err) {
      dispatch(loginFailure());
    }
  }
}

export function getAuth(url: string) {
  return async (dispatch) => {
    dispatch(getSession())
    try {
      const res = await fetch(url);
      if (res.ok) {
        const user = await res.json();
        dispatch(getSessionSuccess(user));
      } else
        dispatch(getSessionFailure());
    } catch (err) {
      dispatch(getSessionFailure());
    }
  }
}

export function logout(url: string){
  return async (dispatch) => {
    dispatch(logoutStart())
    try {
      const options = {
        method: 'delete'
      }
      const res = await fetch(url, options);
      if(res.ok && res.status === 204){
        dispatch(logoutSuccess());
      } else {
        dispatch(logoutFail());
      }
    } catch (err) {
      dispatch(logoutFail());
    }
  }
}

export function updateUser(url: string, userUpdate: UserUpdate){
  return async (dispatch) => {
    dispatch(updateUserStart());
    try {
      const options = {
        method: 'put',
        body: JSON.stringify(userUpdate),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
      const res = await fetch(url, options);
      if(res.ok && res.status === 200) {
        const user = await res.json();
        dispatch(updateUserSuccess(user));
      } else {
        dispatch(updateUserFailure());
      }
    } catch (err) {
      dispatch(updateUserFailure());
    }
  }
}

export function addUser(url: string, userAdd: UserAdd){
  return async (dispatch) => {
    dispatch(addUserStart());
    try{
      const options = {
        method: 'post',
        body: JSON.stringify(userAdd),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
      const res = await fetch(url, options);
      if(res.ok && res.status === 201) {
        dispatch(addUserSuccess());
      } else {
        dispatch(addUserFailure());
      }
    } catch (err) {
      dispatch(addUserFailure());
    }
  }
}
