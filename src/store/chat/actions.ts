import {ChatActionTypes, DELETE_MESSAGE, Message, SEND_MESSAGE} from "./types";

export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  }
}

export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  }
}

// export function fetchPosts() {
//   return async (dispatch) => {
//     dispatch(sendMessage({message: 'react redux thunk'}));
//
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();
//       dispatch(getPostsSuccess(data));
//     } catch (err) {
//       dispatch(getPostsFailure());
//     }
//   }
// }
