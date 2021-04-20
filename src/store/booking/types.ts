import Booking from "../../models/Booking";
import Flight from "../../models/Flight";

export interface BookingState {
  booking: Booking;
  loading: boolean;
  hasErrors: boolean;
  flights: Flight[];
}

/// GET BookingMain by id
export const GET_BOOKING = 'GET_BOOKING';
export const GET_BOOKING_SUCCESS = 'GET_BOOKING_SUCCESS';
export const GET_BOOKING_FAILURE = 'GET_BOOKING_FAILURE';
export const CLEAR_BOOKING = 'CLEAR_BOOKING';
export const KEEP_BOOKING_FLIGHT = 'KEEP_BOOKING_FLIGHT';

interface GetBookingAction {
  type: typeof GET_BOOKING
}

interface GetBookingSuccessAction {
  type: typeof GET_BOOKING_SUCCESS
  payload: Booking
}

interface GetBookingFailureAction {
  type: typeof GET_BOOKING_FAILURE
}

/// POST Booking for flight
export const POST_BOOKING = 'POST_BOOKING';
export const POST_BOOKING_SUCCESS = 'POST_BOOKING_SUCCESS';
export const POST_BOOKING_FAILURE = 'POST_BOOKING_FAILURE';

interface PostBookingAction {
  type: typeof POST_BOOKING
}

interface PostBookingSuccessAction {
  type: typeof POST_BOOKING_SUCCESS
}

interface PostBookingFailureAction {
  type: typeof POST_BOOKING_FAILURE
}

/// PUT Booking for flight
export const PUT_BOOKING = 'PUT_BOOKING';
export const PUT_BOOKING_SUCCESS = 'PUT_BOOKING_SUCCESS';
export const PUT_BOOKING_FAILURE = 'PUT_BOOKING_FAILURE';

interface PutBookingAction {
  type: typeof PUT_BOOKING
}

interface PutBookingSuccessAction {
  type: typeof PUT_BOOKING_SUCCESS
}

interface PutBookingFailureAction {
  type: typeof PUT_BOOKING_FAILURE
}

/// DELETE Booking for flight
export const DELETE_BOOKING = 'DELETE_BOOKING';
export const DELETE_BOOKING_SUCCESS = 'DELETE_BOOKING_SUCCESS';
export const DELETE_BOOKING_FAILURE = 'DELETE_BOOKING_FAILURE';

interface DeleteBookingAction {
  type: typeof DELETE_BOOKING
}

interface DeleteBookingSuccessAction {
  type: typeof DELETE_BOOKING_SUCCESS
}

interface DeleteBookingFailureAction {
  type: typeof DELETE_BOOKING_FAILURE
}

export type BookingActionTypes = 
  GetBookingAction | GetBookingSuccessAction | GetBookingFailureAction | PostBookingAction | PostBookingSuccessAction | 
  PostBookingFailureAction | DeleteBookingAction | DeleteBookingSuccessAction | DeleteBookingFailureAction;
