import {GET_GUEST, GET_GUEST_FAILURE, GET_GUEST_SUCCESS} from "./types";
import Guest from "../../models/Guest";

export const getGuest = () => ({
  type: GET_GUEST
});

export const getGuestSuccess = (guest: Guest[]) => ({
  type: GET_GUEST_SUCCESS,
  payload: guest
});

export const getGuestFailure = () => ({
  type: GET_GUEST_FAILURE
});

// combine all actions in an asynchronous thunk
export function getBookingForGuest(url: string) {
  return async (dispatch) => {
    dispatch(getBookingGuest())
    try {
      const res = await fetch(`${url}/guest/?${confirmationcode}`);
      if (res.ok) {
        let data = await res.json();
        data = data.content;
        dispatch(getGuestSuccess(data));
      } else
        dispatch(getGuestFailure());

    } catch (err) {
      dispatch(getGuestFailure());
    }
  }
}
