import {
  GET_ORIGIN_AIRPORTS,
  GET_ORIGIN_AIRPORTS_FAILURE,
  GET_ORIGIN_AIRPORTS_SUCCESS,
  OriginAirportState
} from "./types";

const initialState: OriginAirportState = {
  airports: [],
  loading: false,
  hasErrors: false,
  total: 0
}

export default function originAirportsReducer(state = initialState,
                                        action): OriginAirportState {
  switch (action.type) {
    case GET_ORIGIN_AIRPORTS:
      return {...state, loading: true}
    case GET_ORIGIN_AIRPORTS_SUCCESS:
      return {airports: action.payload, total: action.total, loading: false, hasErrors: false}
    case GET_ORIGIN_AIRPORTS_FAILURE:
      return {airports: [], total: 0, loading: false, hasErrors: true}
    default:
      return state;
  }
}
