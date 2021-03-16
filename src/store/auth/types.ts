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
export const GET_SESSION = 'GET_SESSION';
export const GET_SESSION_SUCCESS = 'GET_SESSION_SUCCESS';
export const GET_SESSION_FAILURE = 'GET_SESSION_FAILURE';
