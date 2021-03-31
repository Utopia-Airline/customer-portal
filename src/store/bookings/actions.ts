import {GET_BOOKINGS, GET_BOOKINGS_FAILURE, GET_BOOKINGS_SUCCESS} from "./types";
import Booking from "../../models/Booking";
import Pageable from "../../models/Pageable";

export const getBookings = () => ({
  type: GET_BOOKINGS
});

export const getBookingsSuccess = (bookings: Booking[], total: number) => ({
  type: GET_BOOKINGS_SUCCESS,
  payload: bookings,
  total
});

export const getBookingsFailure = () => ({
  type: GET_BOOKINGS_FAILURE
});

// combine all actions in an asynchronous thunk
export function getAllBookings(url: string) {
  return async (dispatch) => {
    dispatch(getBookings())
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json() as Pageable<Booking>;
        const bookings = data.content;
        dispatch(getBookingsSuccess(bookings, data.totalElements));
      } else
        dispatch(getBookingsFailure());
    } catch (err) {
      dispatch(getBookingsFailure());
    }
  }
}
