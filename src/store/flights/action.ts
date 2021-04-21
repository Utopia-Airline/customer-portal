import {
  SET_QUERIES,
  SET_QUERIES_SUCCESS,
  SET_QUERIES_FAILURE,
  GET_DEPARTURE_FLIGHTS,
  GET_DEPARTURE_FLIGHTS_SUCCESS,
  GET_DEPARTURE_FLIGHTS_FAILURE,
  GET_RETURNING_FLIGHTS, GET_RETURNING_FLIGHTS_SUCCESS, GET_RETURNING_FLIGHTS_FAILURE, SET_PASSENGERS
} from "./types";
import {FlightNode} from "../../models/FlightNode";

export const setPassengers = (passengers: number) => ({
  type: SET_PASSENGERS,
  payload: passengers
});

export const getDepartureFlights = () => ({
  type: GET_DEPARTURE_FLIGHTS
});

export const getDepartureFlightsSuccess = (flights: FlightNode[], total: number) => ({
  type: GET_DEPARTURE_FLIGHTS_SUCCESS,
  payload: flights,
  total
})

export const getDepartureFlightsFailure = () => ({
  type: GET_DEPARTURE_FLIGHTS_FAILURE
});

export const getReturningFlights = () => ({
  type: GET_RETURNING_FLIGHTS
});

export const getReturningFlightsSuccess = (flights: FlightNode[], total: number) => ({
  type: GET_RETURNING_FLIGHTS_SUCCESS,
  payload: flights,
  total
})

export const getReturningFlightsFailure = () => ({
  type: GET_RETURNING_FLIGHTS_FAILURE
});


export const setQueries = () => ({
  type: SET_QUERIES
});

export const setQueriesSuccess = (queries: Map<string, string>) => ({
  type: SET_QUERIES_SUCCESS,
  payload: queries,
})

export const setQueriesFailure = () => ({
  type: SET_QUERIES_FAILURE
});

export function fetchFeaturedFlights(url: string) {
  return async (dispatch) => {
    dispatch(getDepartureFlights())
    try {
      const res = await fetch(url);
      if (res.ok) {
        let data = await res.json();
        console.log('flights total', data.total);
        dispatch(getDepartureFlightsSuccess(data.results, data.total));
      } else {
        dispatch(getDepartureFlightsFailure());
      }
    } catch (err) {
      dispatch(getDepartureFlightsFailure());
    }
  }
}

export function fetchFlights(url: string, queries?: Map<string, string>) {
  return async (dispatch) => {
    dispatch(getDepartureFlights())
    dispatch(getReturningFlights())
    try {

      url = queries ? buildQueries(url, queries) : url + "/featured-fares";
      const res = await fetch(url);
      if (res.ok) {
        let data = await res.json();
        console.log('flights total', data);
        dispatch(getDepartureFlightsSuccess(data.departureFlights.flights, data.departureFlights.total));
        dispatch(getReturningFlightsSuccess(data.returningFlights.flights, data.returningFlights.total));
      } else {
        dispatch(getDepartureFlightsFailure());
        dispatch(getReturningFlightsFailure());
      }
    } catch (err) {
      dispatch(getDepartureFlightsFailure());
      dispatch(getReturningFlightsFailure());
    }
  }
}

function buildQueries(url: string, queries?: Map<string, string>) {
  if (queries) {
    url += "?";
    queries.forEach((value, key) =>
      url += `${key}=${value}&`);
    url = url.slice(0, -1);
    console.log('query', url);
  }
  return url;
}
