import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorToast from "../shared/ErrorToast";

const ChatMessages = () => {
  const dispatch = useDispatch();
  const {
    chatHistory,
    joinedRoom,
    loading,
    hasErrors
  } = useSelector((state: RootState) => state.chat);
  const {
    user,
    isLoggedIn,
    hasErrors: userError,
    loading: userLoading
  } = useSelector((state: RootState) => state.auth);
  return (
    <div className='d-flex flex-column' style={{maxHeight: "500px", minHeight: "250px", overflowY: "auto"}}>
      {loading && <LoadingSpinner style={{height: "300px"}}/>}
      {!loading && hasErrors &&
      <ErrorToast error={hasErrors} message='Something went wrong trying to connect to our servers.'/>}
      {!loading && chatHistory.map((message, i) => (
        <div key={i}
             className={`chat-bubble ${message.incoming ? 'chat-bubble--left' : 'chat-bubble--right'}`}
             style={{
               backgroundColor: message.incoming ? '#eee' : '#b0d7f1',
               width: '40%',
               height: 'auto',
               alignSelf: !message.incoming && "flex-end"
             }}>
          {message.content}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
