import Booking from "../../models/Booking";

export interface BookingsState {
  bookings: Booking[];
  loading: boolean;
  hasErrors: boolean;
  total: number;
}

// GET bookings
export const GET_BOOKINGS = 'GET_BOOKINGS';
export const GET_BOOKINGS_SUCCESS = 'GET_BOOKINGS_SUCCESS';
export const GET_BOOKINGS_FAILURE = 'GET_BOOKINGS_FAILURE';
