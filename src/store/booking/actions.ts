import BookingCreation from "../../models/BookingCreation";
import Flight from "../../models/Flight";
import GuestBooking from "../../models/GuestBooking";
import Passenger from "../../models/Passenger";
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
  POST_BOOKING_FAILURE,
  KEEP_BOOKING_FLIGHT,
  PUT_BOOKING_SUCCESS,
  PUT_BOOKING,
  PUT_BOOKING_FAILURE
} from "./types";

export const getBooking = () => ({
  type: GET_BOOKING
});

export const getBookingSuccess = (booking: BookingCreation) => ({
  type: GET_BOOKING_SUCCESS,
  payload: booking
});

export const getBookingFailure = () => ({
  type: GET_BOOKING_FAILURE
});

export const postBooking = () => ({
  type: POST_BOOKING
});

export const putBooking = () => ({
  type: PUT_BOOKING
});

export const putBookingSuccess = () => ({
  type: PUT_BOOKING_SUCCESS,
  // payload: data
});

export const putBookingFailure = () => ({
  type: PUT_BOOKING_FAILURE
});

export const clearBooking = () => ({
  type: CLEAR_BOOKING
});

export const keepBookingFlight = (flights: Flight[]) => ({
  type: KEEP_BOOKING_FLIGHT,
  payload: flights
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

export function createBooking(url: string, booking: BookingCreation){
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
      if(res.ok && res.status === 201){
        dispatch(postBookingSuccess());
      } else {
        dispatch(postBookingFailure());
      }
    } catch (err) {
      dispatch(postBookingFailure());
    }
  }
}

export function createGuestBooking(url: string, guestBooking: GuestBooking){
  return async (dispatch) => {
    dispatch(postBooking())
    try {
      const options = {
        method: "post",
        body: JSON.stringify(guestBooking),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
      const res = await fetch(url, options);
      console.log("url", url);
      console.log("guest booking", JSON.stringify(guestBooking));
      if(res.ok && res.status === 201){
        dispatch(postBookingSuccess());
      } else {
        // console.log(res);
        dispatch(postBookingFailure());
      }
    } catch (err) {
      console.log(err);
      dispatch(postBookingFailure());
    }
  }
}

export function updateBooking(url: string, passenger: Passenger, id: number){
  return async (dispatch) => {
    dispatch(putBooking());
    try {
      const options = {
        method: "put",
        body: JSON.stringify(passenger),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
      console.log(url);
      console.log(JSON.stringify(passenger));
      const res = await fetch(url, options);
      if(res.ok && res.status === 200){
        let data = await res.json();
        console.log("data", data);
        dispatch(putBookingSuccess());
        dispatch(getBookingById("/api/bookings", id))
      } else {
        console.log(res.status);
        dispatch(putBookingFailure());
      }
    } catch (err) {
      console.log(err);
      dispatch(putBookingFailure());
    }
  }
}

export const deleteBooking = () => ({
  type: DELETE_BOOKING
});

export const deleteBookingSuccess = (id: number) => ({
  type: DELETE_BOOKING_SUCCESS,
  id
});

export const deleteBookingFailure = () => ({
  type: DELETE_BOOKING_FAILURE
});

export function cancelBooking(url: string, id: number) {
  return async (dispatch) => {
    dispatch(deleteBooking());
    try {
      const options = {
        method: 'delete'
      }
      const res = await fetch(`${url}/${id}`, options);
      if (res.ok && res.status === 204) {
        dispatch(deleteBookingSuccess(id));
      } else {
        dispatch(deleteBookingFailure());
      }
    } catch (err) {
      dispatch(deleteBookingFailure());
    }
  }
}

export function getBookingForGuest(url: string, confirmationCode: string) {
  return async (dispatch) => {
    dispatch(getBooking())
    try {
      const res = await fetch(`${url}/guest?confirmationCode=${confirmationCode}`);
      if (res.ok) {
        let data = await res.json();
        console.log('data', data);
        dispatch(getBookingSuccess(data));
      } else
        dispatch(getBookingFailure());

    } catch (err) {
      dispatch(getBookingFailure());
    }
  }
}