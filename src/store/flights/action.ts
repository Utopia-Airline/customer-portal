import { GET_FLIGHTS, GET_FLIGHTS_SUCCESS, GET_FLIGHTS_FAILURE } from "./types";
import  Flight from "../../models/Flight";

export const getFlights = () => ({
  type: GET_FLIGHTS
});

export const getFlightsSuccess = (flights: Flight[]) => ({
  type: GET_FLIGHTS_SUCCESS,
  payload: flights
})

export const getFlightsFailure = () => ({
  type: GET_FLIGHTS_FAILURE
});

export function fetchFlights(url: string) {
  return async (dispatch) => {
    dispatch(getFlights())
    try {
      console.log('fetching...');
      const res = await fetch(url);
      console.log('res',res);
      if (res.ok) {
        let data = await res.json();
        data = data.results;
        console.log('data', data);
        // data = data.content;
        dispatch(getFlightsSuccess(data));
      } else{
        dispatch(getFlightsFailure());
        console.log(res.status);
      }

      } catch (err) {
        console.log('err', err);
        dispatch(getFlightsFailure());
    }
  }
}
