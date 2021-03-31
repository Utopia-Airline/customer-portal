import {GET_ORIGIN_AIRPORTS, GET_ORIGIN_AIRPORTS_FAILURE, GET_ORIGIN_AIRPORTS_SUCCESS} from "./types";
import Airport from "../../../models/Airport";

export const getAirports = () => ({
  type: GET_ORIGIN_AIRPORTS
});

export const getAirportsSuccess = (airports: Airport[], total: number) => ({
  type: GET_ORIGIN_AIRPORTS_SUCCESS,
  payload: airports,
  total
});

export const getAirportsFailure = () => ({
  type: GET_ORIGIN_AIRPORTS_FAILURE
});

// combine all actions in an asynchronous thunk
export function getAllOriginAirports(url: string, query = null) {
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
