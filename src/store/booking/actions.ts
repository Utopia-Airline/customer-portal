import Booking from "../../models/Booking";
import {
  DELETE_BOOKING,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAILURE, 
  GET_BOOKING, 
  GET_BOOKING_FAILURE, 
  GET_BOOKING_SUCCESS,
  CLEAR_BOOKING, 
  POST_BOOKING, 
  POST_BOOKING_SUCCESS, 
  POST_BOOKING_FAILURE
} from "./types";

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

export const postBooking = () => ({
  type: POST_BOOKING
});

export const clearBooking = () => ({
  type: CLEAR_BOOKING
});


export const postBookingSuccess = () => ({
  type: POST_BOOKING_SUCCESS
});

export const postBookingFailure = () => ({
  type: POST_BOOKING_FAILURE
});

// combine all actions in an asynchronous thunk
export function getBookingById(url: string, id: number) {
// export function fetchBooking(url: string, id: number) {
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

export function createBooking(url: string, booking: Booking){
  return async (dispatch) => {
    dispatch(postBooking())
    try {
      const options = {
        method: "post",
        body: JSON.stringify(booking),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
      const res = await fetch(url, options);
      if(res.ok && res.status === 203){
        dispatch(postBookingSuccess());
      } else {
        dispatch(postBookingFailure());
      }
    } catch (err) {
      dispatch(postBookingFailure());
    }
  }
}

export const deleteBooking = () => ({
  type: DELETE_BOOKING
});

export const deleteBookingSuccess = () => ({
  type: DELETE_BOOKING_SUCCESS
});

export const deleteBookingFailure = () => ({
  type: DELETE_BOOKING_FAILURE
});

export function cancelBooking(url: string, id: number){
  return async (dispatch) => {
    dispatch(deleteBooking());
    try {
      const options = {
        method: 'delete'
      }
      const res = await fetch(`${url}/${id}`, options);
      if(res.ok && res.status === 204) {
        dispatch(deleteBookingSuccess());
      } else {
        dispatch(deleteBookingFailure());
      }
    } catch(err) {
      dispatch(deleteBookingFailure());
    }
  }
}