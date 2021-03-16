import Booking from "../../models/Booking";
import {GET_BOOKING, GET_BOOKING_FAILURE, GET_BOOKING_SUCCESS} from "./types";

export const getBooking = () => ({
  type: GET_BOOKING
});

export const getBookingSuccess = (booking: Booking) => ({
  type: GET_BOOKING_SUCCESS,
  payload: booking
});

export const getBookingFailure = () => ({
  type: GET_BOOKING_FAILURE
});

// combine all actions in an asynchronous thunk
export function fetchBooking(url: string, id: number) {
  return async (dispatch) => {
    dispatch(getBooking())
    try {
      const res = await fetch(`${url}/${id}`);
      if (res.ok) {
        const data = await res.json();
        dispatch(getBookingSuccess(data));
      } else
        dispatch(getBookingFailure());
    } catch (err) {
      dispatch(getBookingFailure());
    }
  }
}
