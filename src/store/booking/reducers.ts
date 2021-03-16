import {BookingActionTypes, BookingState, GET_BOOKING, GET_BOOKING_FAILURE, GET_BOOKING_SUCCESS} from "./types";

const initialState: BookingState = {
  booking: null,
  loading: false,
  hasErrors: false
}

export default function bookingReducer(state = initialState,
                                       action: BookingActionTypes): BookingState {
  switch (action.type) {
    case GET_BOOKING:
      return {...state, loading: true}
    case GET_BOOKING_SUCCESS:
      return {booking: action.payload, loading: false, hasErrors: false}
    case GET_BOOKING_FAILURE:
      return {booking: null, loading: false, hasErrors: true}
    default:
      return state;
  }
}
