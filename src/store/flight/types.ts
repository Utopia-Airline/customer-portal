import Flight from "../../models/Flight";

export interface FlightState {
  flight: Flight;
  loading: boolean;
  hasErrors: boolean;
}

export const GET_FLIGHT = 'GET_FLIGHT';
export const GET_FLIGHT_SUCCESS = 'GET_FLIGHT_SUCCESS';
export const GET_FLIGHT_FAILURE = 'GET_FLIGHT_FAILURE';

interface GetFlightAction {
  type: typeof GET_FLIGHT
}

interface GetFlightSuccessAction {
  type: typeof GET_FLIGHT_SUCCESS
  payload: Flight;
}

interface GetFlightFailureAction {
  type: typeof GET_FLIGHT_FAILURE
}

export type FlightActionTypes = GetFlightAction | GetFlightSuccessAction | GetFlightFailureAction
