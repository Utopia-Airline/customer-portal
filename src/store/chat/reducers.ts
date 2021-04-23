import {
  ChatState, CLEAR_CHAT_LOG,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_REQUEST_FAILURE,
  CREATE_ROOM_REQUEST_SUCCESS,
  JOIN_ROOM_REQUEST,
  JOIN_ROOM_REQUEST_FAILURE,
  JOIN_ROOM_REQUEST_SUCCESS, LOAD_CHAT_REQUEST, LOAD_CHAT_REQUEST_FAILURE, LOAD_CHAT_REQUEST_SUCCESS,
  SET_CUSTOMER_ID, SET_JOINED_ROOM,
  SET_MESSAGE,
  SET_SESSION_ID,
  UPDATE_CHAT_LOG
} from "./types";
import Message from "../../models/Message";

const initialState: ChatState = {
  chatHistory: [],
  loading: false,
  hasErrors: false,
  isTyping: false,
  sessionId: null,
  message: '',
  customerId: null,
  socket: null,
  stompClient: null,
  joinedRoom: false,
}

export default function chatReducer(state = initialState, action): ChatState {
  switch (action.type) {
    case CREATE_ROOM_REQUEST:
      return {...state, loading: true}
    case CREATE_ROOM_REQUEST_SUCCESS:
      return {...state, loading: false, hasErrors: false}
    case CREATE_ROOM_REQUEST_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case SET_JOINED_ROOM:
      return {...state, joinedRoom: action.payload}
    case JOIN_ROOM_REQUEST:
      return {...state, loading: true}
    case JOIN_ROOM_REQUEST_SUCCESS:
      return {...state, joinedRoom: true, loading: false, hasErrors: false}
    case JOIN_ROOM_REQUEST_FAILURE:
      return {...state, joinedRoom: false, loading: false, hasErrors: true}
    case SET_MESSAGE:
      return {...state, message: action.payload}
    case SET_CUSTOMER_ID:
      return {...state, customerId: action.payload}
    case SET_SESSION_ID:
      return {...state, sessionId: action.payload}
    case UPDATE_CHAT_LOG:
      return {...state, chatHistory: [...state.chatHistory, action.payload]}
    case CLEAR_CHAT_LOG:
      return {...state, chatHistory: []}
    case LOAD_CHAT_REQUEST:
      return {...state, loading: true}
    case LOAD_CHAT_REQUEST_SUCCESS:
      return {...state, loading: false, hasErrors: false}
    case LOAD_CHAT_REQUEST_FAILURE:
      return {...state, loading: true, hasErrors: true}
    default:
      return state;
  }
}
