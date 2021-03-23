import User from "../../models/User";

export interface AuthState {
  user: User;
  loading: boolean;
  hasErrors: boolean;
}

// POST login with username and password
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// GET session
export const GET_SESSION = 'GET_SESSION';
export const GET_SESSION_SUCCESS = 'GET_SESSION_SUCCESS';
export const GET_SESSION_FAILURE = 'GET_SESSION_FAILURE';

//DELETE logout
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

//PUT user
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

//POST user
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';