import Booking from "../../models/Booking";

export interface BookingState {
  booking: Booking;
  loading: boolean;
  hasErrors: boolean;
}

/// GET BookingMain by id
export const GET_BOOKING = 'GET_BOOKING';
export const GET_BOOKING_SUCCESS = 'GET_BOOKING_SUCCESS';
export const GET_BOOKING_FAILURE = 'GET_BOOKING_FAILURE';
export const CLEAR_BOOKING = 'CLEAR_BOOKING';

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


export type BookingActionTypes = GetBookingAction | GetBookingSuccessAction | GetBookingFailureAction;
