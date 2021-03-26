import Guest from "../../models/Guest";

export interface GuestsState {
  guest: Guest[];
  loading: boolean;
  hasErrors: boolean;
}
// GET guest
export const GET_GUEST = 'GET_GUEST';
export const GET_GUEST_SUCCESS = 'GET_GUEST_SUCCESS';
export const GET_GUEST_FAILURE = 'GET_GUEST_FAILURE';

interface GetGuestsAction {
  type: typeof GET_GUEST
}

interface GetGuestsSuccessAction {
  type: typeof GET_GUEST_SUCCESS
  payload: Guest[]
}

interface GetGuestsFailureAction {
  type: typeof GET_GUEST_FAILURE
}
