import {GuestActionTypes, GuestsState, GET_GUEST, GET_GUEST_FAILURE, GET_GUEST_SUCCESS} from "./types";

const initialState: GuestsState = {
  guest: null,
  loading: false,
  hasErrors: false
}

export default function guestsReducer(state = initialState,
                                       action: GuestActionTypes): GuestState {
  switch (action.type) {
    case GET_GUEST:
      return {...state, loading: true}
    case GET_GUEST_SUCCESS:
      return {guest: action.payload, loading: false, hasErrors: false}
    case GET_GUEST_FAILURE:
      return {guest: null, loading: false, hasErrors: true}
    default:
      return state;
  }
}
