import Booking from "../../models/Booking";

export interface BookingsState {
  bookings: Booking[];
  loading: boolean;
  hasErrors: boolean;
}
// GET bookings
export const GET_BOOKINGS = 'GET_BOOKINGS';
export const GET_BOOKINGS_SUCCESS = 'GET_BOOKINGS_SUCCESS';
export const GET_BOOKINGS_FAILURE = 'GET_BOOKINGS_FAILURE';

interface GetBookingsAction {
  type: typeof GET_BOOKINGS
}

interface GetBookingsSuccessAction {
  type: typeof GET_BOOKINGS_SUCCESS
  payload: Booking[]
}

interface GetBookingsFailureAction {
  type: typeof GET_BOOKINGS_FAILURE
}



export type BookingsActionTypes = GetBookingsAction | GetBookingsSuccessAction | GetBookingsFailureAction;
