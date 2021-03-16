import {GET_BOOKINGS, GET_BOOKINGS_FAILURE, GET_BOOKINGS_SUCCESS} from "./types";
import Booking from "../../models/Booking";

export const getBookings = () => ({
  type: GET_BOOKINGS
});

export const getBookingsSuccess = (bookings: Booking[]) => ({
  type: GET_BOOKINGS_SUCCESS,
  payload: bookings
});

export const getBookingsFailure = () => ({
  type: GET_BOOKINGS_FAILURE
});

// combine all actions in an asynchronous thunk
export function fetchBookings(url: string) {
  return async (dispatch) => {
    dispatch(getBookings())
    try {
      const res = await fetch(url);
      if (res.ok) {
        let data = await res.json();
        data = data.content;
        dispatch(getBookingsSuccess(data));
      } else
        dispatch(getBookingsFailure());

    } catch (err) {
      dispatch(getBookingsFailure());
    }
  }
}
