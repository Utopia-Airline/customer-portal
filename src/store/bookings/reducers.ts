import {BookingsActionTypes, BookingsState, GET_BOOKINGS, GET_BOOKINGS_FAILURE, GET_BOOKINGS_SUCCESS} from "./types";

const initialState: BookingsState = {
  bookings: [],
  loading: false,
  hasErrors: false
}

export default function bookingsReducer(state = initialState,
                                       action: BookingsActionTypes): BookingsState {
  switch (action.type) {
    case GET_BOOKINGS:
      return {...state, loading: true}
    case GET_BOOKINGS_SUCCESS:
      return {bookings: action.payload, loading: false, hasErrors: false}
    case GET_BOOKINGS_FAILURE:
      return {bookings: [], loading: false, hasErrors: true}
    default:
      return state;
  }
}
