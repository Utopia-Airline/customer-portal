import {FlightNode} from "../../models/FlightNode";

export interface FlightsState {
  departureFlights: {
    total: number;
    flights: FlightNode[];
  };
  returningFlights: {
    total: number;
    flights: FlightNode[];
  };
  loading: boolean;
  hasErrors: boolean;
  queries: Map<string, string>;
  passengers: number;
}

export const GET_DEPARTURE_FLIGHTS = 'GET_DEPARTURE_FLIGHTS';
export const GET_DEPARTURE_FLIGHTS_SUCCESS = 'GET_DEPARTURE_FLIGHTS_SUCCESS';
export const GET_DEPARTURE_FLIGHTS_FAILURE = 'GET_DEPARTURE_FLIGHTS_FAILURE';

export const GET_RETURNING_FLIGHTS = 'GET_RETURNING_FLIGHTS';
export const GET_RETURNING_FLIGHTS_SUCCESS = 'GET_RETURNING_FLIGHTS_SUCCESS';
export const GET_RETURNING_FLIGHTS_FAILURE = 'GET_RETURNING_FLIGHTS_FAILURE';

export const SET_QUERIES = 'SET_QUERIES';
export const SET_QUERIES_SUCCESS = 'SET_QUERIES_SUCCESS';
export const SET_QUERIES_FAILURE = 'SET_QUERIES_FAILURE';

export const SET_PASSENGERS = 'SET_PASSENGERS';