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
  loading: false,
  hasErrors: false
}

export default function authReducer(state = initialState, action): AuthState {
  switch (action.type) {
    case LOGIN:
      return {...state, loading: true};
    case LOGIN_SUCCESS:
      return {...state, loading: false, hasErrors: false};
    case LOGIN_FAILURE:
      return {...state, loading: false, hasErrors: true};
    case GET_SESSION:
      return {...state, loading: true};
    case GET_SESSION_SUCCESS:
      return {user: action.payload, loading: false, hasErrors: false}
    case GET_SESSION_FAILURE:
      return {...state, loading: false, hasErrors: true}
    default:
      return state;
  }
}
