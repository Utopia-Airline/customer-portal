import Flight from "../../models/Flight";

export interface FlightsState {
  flights: Flight[];
  loading: boolean;
  hasErrors: boolean;
}

export const GET_FLIGHTS = 'GET_FLIGHTS';
export const GET_FLIGHTS_SUCCESS = 'GET_FLIGHTS_SUCCESS';
export const GET_FLIGHTS_FAILURE = 'GET_FLIGHTS_FAILURE';

interface GetFlightsAction {
  type: typeof GET_FLIGHTS
}

interface GetFlightsSuccessAction {
  type: typeof GET_FLIGHTS_SUCCESS
  payload: Flight[];
}

interface GetFlightsFailureAction {
  type: typeof GET_FLIGHTS_FAILURE
}

export type FlightsActionTypes = GetFlightsAction | GetFlightsSuccessAction | GetFlightsFailureAction
