import {
  DestinationAirportState, GET_DESTINATION_AIRPORTS, GET_DESTINATION_AIRPORTS_FAILURE, GET_DESTINATION_AIRPORTS_SUCCESS
} from "./types";

const initialState: DestinationAirportState = {
  airports: [],
  loading: false,
  hasErrors: false,
  total: 0
}

export default function destinationAirportsReducer(state = initialState,
                                              action): DestinationAirportState {
  switch (action.type) {
    case GET_DESTINATION_AIRPORTS:
      return {...state, loading: true}
    case GET_DESTINATION_AIRPORTS_SUCCESS:
      return {airports: action.payload, total: action.total, loading: false, hasErrors: false}
    case GET_DESTINATION_AIRPORTS_FAILURE:
      return {airports: [], total: 0, loading: false, hasErrors: true}
    default:
      return state;
  }
}
