import Airport from "../../../models/Airport";

export interface DestinationAirportState {
  airports: Airport[];
  loading: boolean;
  hasErrors: boolean;
  total: number;
}

// GET airports
export const GET_DESTINATION_AIRPORTS = 'GET_DESTINATION_AIRPORTS';
export const GET_DESTINATION_AIRPORTS_SUCCESS = 'GET_DESTINATION_AIRPORTS_SUCCESS';
export const GET_DESTINATION_AIRPORTS_FAILURE = 'GET_DESTINATION_AIRPORTS_FAILURE';
