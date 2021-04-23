import Message from "../../models/Message";

export interface ChatState {
  chatHistory: Message[];
  loading: boolean;
  hasErrors: boolean;
  isTyping: boolean;
  sessionId: string;
  message: string;
  customerId: string;
  socket: object;
  stompClient: object;
  joinedRoom: boolean;
}

export const CREATE_ROOM_REQUEST = 'CREATE_ROOM_REQUEST';
export const CREATE_ROOM_REQUEST_SUCCESS = 'CREATE_ROOM_REQUEST_SUCCESS';
export const CREATE_ROOM_REQUEST_FAILURE = 'CREATE_ROOM_REQUEST_FAILURE';

export const JOIN_ROOM_REQUEST = 'JOIN_ROOM_REQUEST';
export const JOIN_ROOM_REQUEST_SUCCESS = 'JOIN_ROOM_REQUEST_SUCCESS';
export const JOIN_ROOM_REQUEST_FAILURE = 'JOIN_ROOM_REQUEST_FAILURE';

export const LOAD_CHAT_REQUEST = 'LOAD_CHAT_REQUEST';
export const LOAD_CHAT_REQUEST_SUCCESS = 'LOAD_CHAT_REQUEST_SUCCESS';
export const LOAD_CHAT_REQUEST_FAILURE = 'LOAD_CHAT_REQUEST_FAILURE';

export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_JOINED_ROOM = 'SET_JOINED_ROOM';
export const SET_CUSTOMER_ID = 'SET_CUSTOMER_ID';
export const SET_SESSION_ID = 'SET_SESSION_ID';
export const SET_IS_TYPING = 'SET_IS_TYPING';
export const UPDATE_CHAT_LOG = 'UPDATE_CHAT_LOG';
export const CLEAR_CHAT_LOG = 'CLEAR_CHAT_LOG';
