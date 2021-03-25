import { FlightsActionTypes, FlightsState, GET_FLIGHTS,
          GET_FLIGHTS_SUCCESS, GET_FLIGHTS_FAILURE } from "./types";

const initialState: FlightsState = {
  flights: [],
  loading: false,
  hasErrors: false
}

export default function flightsReducer(state = initialState,
                        action: FlightsActionTypes): FlightsState {
  switch (action.type) {
    case GET_FLIGHTS:
      return {...state, loading: true}
    case GET_FLIGHTS_SUCCESS:
      return {flights: action.payload, loading: false, hasErrors: false}
    case GET_FLIGHTS_FAILURE:
      return {flights: [], loading: false, hasErrors: true}
    default:
      return state;
  }
                        }
