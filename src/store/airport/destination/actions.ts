import Airport from "../../../models/Airport";
import {GET_DESTINATION_AIRPORTS, GET_DESTINATION_AIRPORTS_FAILURE, GET_DESTINATION_AIRPORTS_SUCCESS} from "./types";

export const getAirports = () => ({
  type: GET_DESTINATION_AIRPORTS
});

export const getAirportsSuccess = (airports: Airport[], total: number) => ({
  type: GET_DESTINATION_AIRPORTS_SUCCESS,
  payload: airports,
  total
});

export const getAirportsFailure = () => ({
  type: GET_DESTINATION_AIRPORTS_FAILURE
});

// combine all actions in an asynchronous thunk
export function getAllDestinationAirports(url: string, query = null) {
  return async (dispatch) => {
    dispatch(getAirports())
    try {
      const URL = query ? `${url}?airport=${query}` : url;
      const res = await fetch(URL);
      if (res.ok) {
        const data = await res.json();
        const airports = data.rows;
        console.log('airports total', data.count)
        dispatch(getAirportsSuccess(airports, data.count));
      } else
        dispatch(getAirportsFailure());

    } catch (err) {
      dispatch(getAirportsFailure());
    }
  }
}
