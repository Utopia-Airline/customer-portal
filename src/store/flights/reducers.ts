import {
  FlightsState,
  SET_QUERIES,
  SET_QUERIES_SUCCESS,
  SET_QUERIES_FAILURE,
  GET_DEPARTURE_FLIGHTS,
  GET_DEPARTURE_FLIGHTS_SUCCESS, GET_DEPARTURE_FLIGHTS_FAILURE
} from "./types";

const initialState: FlightsState = {
  departureFlights: {
    total: 0,
    flights: []
  },
  returningFlights: {
    total: 0,
    flights: []
  },
  loading: false,
  hasErrors: false,
  queries: null
}

export default function flightsReducer(state = initialState, action): FlightsState {
  switch (action.type) {
    case GET_DEPARTURE_FLIGHTS:
      return {...state, loading: true}
    case GET_DEPARTURE_FLIGHTS_SUCCESS:
      return {
        ...state,
        departureFlights: {flights: action.payload, total: action.total},
        loading: false,
        hasErrors: false
      }
    case GET_DEPARTURE_FLIGHTS_FAILURE:
      return {...state, departureFlights: {flights: [], total: 0}, loading: false, hasErrors: true}
    case SET_QUERIES:
      return {...state, loading: true}
    case SET_QUERIES_SUCCESS:
      return {...state, queries: action.payload, loading: false, hasErrors: false}
    case SET_QUERIES_FAILURE:
      return {...state, queries: null, loading: false, hasErrors: true}
    default:
      return state;
  }
}
