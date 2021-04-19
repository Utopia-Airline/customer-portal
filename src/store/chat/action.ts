import {
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_REQUEST_FAILURE,
  CREATE_ROOM_REQUEST_SUCCESS,
  JOIN_ROOM_REQUEST,
  JOIN_ROOM_REQUEST_FAILURE,
  JOIN_ROOM_REQUEST_SUCCESS,
  SET_CUSTOMER_ID,
  SET_MESSAGE,
  SET_SESSION_ID,
  UPDATE_CHAT_LOG,
  SET_IS_TYPING,
  LOAD_CHAT_REQUEST,
  LOAD_CHAT_REQUEST_SUCCESS,
  LOAD_CHAT_REQUEST_FAILURE,
  CLEAR_CHAT_LOG,
  SET_JOINED_ROOM
} from "./types";
import {Stomp} from "stompjs/lib/stomp";
import * as SockJS from 'sockjs-client';
import Message from "../../models/Message";

let socket = null;
let stompClient = null;

function getSessionId(url: string): string {
  try {
    console.log('url', url);
    const session = url.match(/ws:\/\/.*\/secured\/room\/.*\/(.*)\/websocket/);
    return session[1];
  } catch (err) {
    console.log(err);
    return '';
  }
}

export function handleConnect(user: string) {
  return async (dispatch, getState) => {
    console.log('this is the current state::::', getState());
    dispatch({type: CREATE_ROOM_REQUEST});
    try {
      socket = new SockJS("/secured/room");
      stompClient = Stomp.over(socket);
      stompClient.connect({}, (frame) => {
        try {
          dispatch({type: CREATE_ROOM_REQUEST_SUCCESS})
          console.log('stompClient:::', stompClient);
          const sessionId = getSessionId(stompClient.ws._transport.url);
          const senderId = (user === 'Guest') ? user + sessionId : user;
          dispatch({type: SET_SESSION_ID, payload: sessionId});
          dispatch({type: SET_CUSTOMER_ID, payload: senderId});
          stompClient.subscribe(`/secured/user/${senderId}/queue/private/chat`, (msgOut) => {
            const message: Message = JSON.parse(msgOut.body);
            if (message && message.senderId === 'admin') {
              message.incoming = true;
              dispatch({type: UPDATE_CHAT_LOG, payload: message})
            }
          });
          stompClient.subscribe(`/secured/user/${senderId}/queue/private/join`, (msgOut) => {
            console.log('subscribe to join');
            const message: Message = JSON.parse(msgOut.body);
            if (message) {
              message.incoming = true;
              dispatch({type: UPDATE_CHAT_LOG, payload: message})
            }
          });
          stompClient.subscribe(`/secured/user/${senderId}/queue/private/update`, (msgOut) => {
            console.log('subscribe to update');
          });
          stompClient.subscribe(`/secured/user/${senderId}/queue/private/load`, (msgOut) => {
            console.log('subscribe to load');
            const message: Message = JSON.parse(msgOut.body);
            if (message) {
              console.log('load message', message);
              message.incoming = (message.senderId !== senderId);
              dispatch({type: UPDATE_CHAT_LOG, payload: message});
            }
          });
          console.log("senderId", senderId);
          dispatch(handleJoin(senderId));
          dispatch(handleLoad(senderId));
        } catch (err) {
          console.log('socket inner error:', err);
          dispatch({type: CREATE_ROOM_REQUEST_FAILURE})
        }
      });
    } catch (err) {
      console.log('socket error:', err);
      dispatch({type: CREATE_ROOM_REQUEST_FAILURE})
    }
  }
}

function handleJoin(senderId: string) {
  return async (dispatch) => {
    dispatch({type: JOIN_ROOM_REQUEST});
    try {
      stompClient.send(`/app/secured/room/join`, {},
        JSON.stringify(
          {
            message: "...",
            senderId,
            receiverUsername: "admin"
          }));
      dispatch({type: JOIN_ROOM_REQUEST_SUCCESS})
    } catch (err) {
      dispatch({type: JOIN_ROOM_REQUEST_FAILURE})
    }
  }
}

function handleLoad(senderId: string) {
  return async (dispatch) => {
    console.log("CLEAR CHAT");
    dispatch({type: CLEAR_CHAT_LOG});
    dispatch({type: LOAD_CHAT_REQUEST});
    try {
      stompClient.send(`/app/secured/room/chat/history`, {}, JSON.stringify({
        senderId, receiverUsername: 'admin'
      }));
      dispatch({type: LOAD_CHAT_REQUEST_SUCCESS});
    } catch (err) {
      dispatch({type: LOAD_CHAT_REQUEST_FAILURE})
    }
  }
}

export function handleSend(senderId: string, message: string) {
  return async (dispatch) => {
    try {
      dispatch({type: SET_MESSAGE, payload: message});
      const newMessage: Message = {
        content: message, incoming: false, senderId, receiverUsername: 'admin'
      };
      dispatch({type: UPDATE_CHAT_LOG, payload: newMessage})
      stompClient.send(`/app/secured/room/chat`, {},
        JSON.stringify(
          {
            message,
            senderId,
            receiverUsername: "admin"
          }));
      dispatch({type: SET_MESSAGE, payload: ''});
    } catch (err) {
    }
  }
}

export function disconnect(us: string) {
  return async (dispatch) => {
    try {
      if (stompClient !== null) {
        stompClient.disconnect();
        dispatch({type: SET_JOINED_ROOM, payload: false})
        dispatch({type: CLEAR_CHAT_LOG})
        dispatch({type: SET_SESSION_ID, payload: null})
        dispatch({type: SET_CUSTOMER_ID, payload: null})
      }
    } catch (err) {
    }
  }
}


export function handleTyping(senderId: string) {
  try {
    stompClient.send(`/app/secured/room/update`, {},
      JSON.stringify({
        senderId,
        receiverUsername: "admin"
      }));
  } catch (err) {
  }
}
