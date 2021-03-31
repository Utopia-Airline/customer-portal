import Airport from "../../../models/Airport";

export interface OriginAirportState {
  airports: Airport[];
  loading: boolean;
  hasErrors: boolean;
  total: number;
}

// GET airports
export const GET_ORIGIN_AIRPORTS = 'GET_ORIGIN_AIRPORTS';
export const GET_ORIGIN_AIRPORTS_SUCCESS = 'GET_ORIGIN_AIRPORTS_SUCCESS';
export const GET_ORIGIN_AIRPORTS_FAILURE = 'GET_ORIGIN_AIRPORTS_FAILURE';
