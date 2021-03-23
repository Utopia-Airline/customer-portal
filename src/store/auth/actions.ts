import {GET_SESSION, GET_SESSION_FAILURE, GET_SESSION_SUCCESS, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS} from "./types";
import User from "../../models/User";
import {Dispatch} from "react";

export interface UserLogin {
  username: string;
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
        return true;
      } else {
        dispatch(loginFailure());
        return false;
      }

    } catch (err) {
      dispatch(loginFailure());
      return false;
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
