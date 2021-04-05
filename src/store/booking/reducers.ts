import {
  BookingState,
  CLEAR_BOOKING,
  DELETE_BOOKING,
  DELETE_BOOKING_FAILURE,
  DELETE_BOOKING_SUCCESS,
  GET_BOOKING,
  GET_BOOKING_FAILURE,
  GET_BOOKING_SUCCESS,
  POST_BOOKING,
  POST_BOOKING_FAILURE,
  POST_BOOKING_SUCCESS
} from "./types";

const initialState: BookingState = {
  booking: null,
  loading: false,
  hasErrors: false
}

export default function bookingReducer(state = initialState,
                                       action): BookingState {
  switch (action.type) {
    case GET_BOOKING:
      return {...state, loading: true}
    case GET_BOOKING_SUCCESS:
      return {booking: action.payload, loading: false, hasErrors: false}
    case GET_BOOKING_FAILURE:
      return {booking: null, loading: false, hasErrors: true}
    case CLEAR_BOOKING:
      return {...state, booking: null, loading: false, hasErrors: false}
    case POST_BOOKING:
      return {...state, loading: true}
    case POST_BOOKING_SUCCESS:
      return {...state, loading: false, hasErrors: false}
    case POST_BOOKING_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case DELETE_BOOKING:
      return {...state, loading: true}
    case DELETE_BOOKING_SUCCESS:
      return {...state, booking: null, loading: false, hasErrors: false}
    case DELETE_BOOKING_FAILURE:
      return {...state, loading: false, hasErrors: true}
    default:
      return state;
  }
}
