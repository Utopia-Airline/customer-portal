import { FlightActionTypes, FlightState, GET_FLIGHT,
         GET_FLIGHT_SUCCESS, GET_FLIGHT_FAILURE } from "./types";

const initialState: FlightState = {
  flight: null,
  loading: false,
  hasErrors: false
}

export default function flightReducer(state = initialState,
                        action: FlightActionTypes): FlightState {
  switch (action.type) {
    case GET_FLIGHT:
      return {...state, loading: true}
    case GET_FLIGHT_SUCCESS:
      return {flight: action.payload, loading: false, hasErrors: false}
    case GET_FLIGHT_FAILURE:
      return {flight: null, loading: false, hasErrors: true}
    default:
      return state;
  }
                        }
