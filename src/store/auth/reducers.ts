import {
  AuthState,
  GET_SESSION,
  GET_SESSION_FAILURE,
  GET_SESSION_SUCCESS,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from "./types";

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  hasErrors: false
}

export default function authReducer(state = initialState, action): AuthState {
  switch (action.type) {
    case LOGIN:
      return {...state, loading: true, isLoggedIn: false};
    case LOGIN_SUCCESS:
      return {...state, isLoggedIn: true, loading: false, hasErrors: false};
    case LOGIN_FAILURE:
      return {...state, user: null, isLoggedIn: false, loading: false, hasErrors: true};
    case GET_SESSION:
      return {...state, loading: true};
    case GET_SESSION_SUCCESS:
      return {...state, user: action.payload, isLoggedIn: true, loading: false, hasErrors: false}
    case GET_SESSION_FAILURE:
      return {...state, loading: false, hasErrors: true}
    default:
      return state;
  }
}
