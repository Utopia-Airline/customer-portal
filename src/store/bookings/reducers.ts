import {BookingsState, GET_BOOKINGS, GET_BOOKINGS_FAILURE, GET_BOOKINGS_SUCCESS} from "./types";
import {DELETE_BOOKING_SUCCESS} from "../booking/types";

const initialState: BookingsState = {
  bookings: [],
  loading: false,
  hasErrors: false,
  total: 0
}

export default function bookingsReducer(state = initialState,
                                        action): BookingsState {
  switch (action.type) {
    case GET_BOOKINGS:
      return {...state, loading: true}
    case GET_BOOKINGS_SUCCESS:
      return {bookings: action.payload, total: action.total, loading: false, hasErrors: false}
    case GET_BOOKINGS_FAILURE:
      return {bookings: [], total: 0, loading: false, hasErrors: true}
    case DELETE_BOOKING_SUCCESS:
      return {
        ...state, bookings: state.bookings.filter(booking => booking.id !== action.id)
        , total: state.bookings.filter(booking => booking.id !== action.id).length
      }
    default:
      return state;
  }
}
