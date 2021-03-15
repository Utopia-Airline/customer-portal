import {GET_SESSION, GET_SESSION_FAILURE, GET_SESSION_SUCCESS, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS} from "./types";
import User from "../../models/User";

export interface UserInfo {
  username: string;
  password: string;
}

export const loginStart = (userInfo: UserInfo) => ({
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

// combine all actions in an asynchronous thunk
export function login(url: string) {
  return async (dispatch) => {
    dispatch(loginStart({username: "admin", password: "password"}))
    try {
      const options = {
        method: 'post',
        body: JSON.stringify({username: "admin", password: "password"}),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
      const res = await fetch(url, options);
      if (res.ok && res.status === 201) {
        dispatch(loginSuccess());
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
