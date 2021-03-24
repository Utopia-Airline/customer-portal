import {
  AuthState,
  GET_SESSION,
  GET_SESSION_FAILURE,
  GET_SESSION_SUCCESS,
  LOGIN,
  LOGIN_FAILURE,
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
      console.log("LOGIN_SUCCESS");
      return {...state, isLoggedIn: true, loading: false, hasErrors: false};
    case LOGIN_FAILURE:
      console.log("LOGIN_FAILURE");
      return {...state, user: null, isLoggedIn: false, loading: false, hasErrors: true};
    case GET_SESSION:
      return {...state, loading: true};
    case GET_SESSION_SUCCESS:
      return {...state, user: action.payload, loading: false, hasErrors: false}
    case GET_SESSION_FAILURE:
      return {...state, loading: false, hasErrors: true};
    case LOGOUT:
      return {...state, loading: true, hasErrors: false};
    case LOGOUT_SUCCESS:
      return {user: null, isLoggedIn: false, loading: false,  hasErrors: false};
    case LOGOUT_FAILURE:
      return {...state, loading: false, hasErrors: true};
    case UPDATE_USER:
      return {...state, loading: true, hasErrors: false};
    case UPDATE_USER_SUCCESS:
      return {user: action.payload, isLoggedIn: true, loading: false, hasErrors: false};
    case UPDATE_USER_FAILURE:
      return {...state, loading: false, hasErrors: true};
    case ADD_USER:
      return {...state, loading: true, hasErrors: false};
    case ADD_USER_SUCCESS:
      return {...state, loading: false, hasErrors: false};
    case ADD_USER_FAILURE:
      return {...state, loading: false, hasErrors: true};
    default:
      return state;
  }
}
