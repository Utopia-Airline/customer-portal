import { GET_FLIGHT, GET_FLIGHT_SUCCESS, GET_FLIGHT_FAILURE } from "./types";
import  Flight from "../../models/Flight";

export const getFlight = () => ({
  type: GET_FLIGHT
});

export const getFlightSuccess = (flights: Flight[]) => ({
  type: GET_FLIGHT_SUCCESS,
  payload: flights
})

export const getFlightFailure = () => ({
  type: GET_FLIGHT_FAILURE
});

export function fetchFlight(url: string) {
  return async (dispatch) => {
    dispatch(getFlight())
    try {
      const res = await fetch(url);
      if (res.ok) {
        let data = await res.json();
        data = data.content;
        dispatch(getFlightSuccess(data));
      } else
        dispatch(getFlightFailure());
      } catch (err) {
        dispatch(getFlightFailure());
    }
  }
}
