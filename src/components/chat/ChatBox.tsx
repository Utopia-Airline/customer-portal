import React, {useEffect, useRef, useState} from 'react';
import {
  Button, createStyles,
  IconButton, Paper, Slide, TextField,

} from "@material-ui/core";
import {TransitionProps} from "@material-ui/core/transitions";
import {makeStyles} from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import CancelIcon from '@material-ui/icons/Cancel';
import ChatMessages from "./ChatMessages";
import MessageIcon from '@material-ui/icons/Message';
import CachedIcon from '@material-ui/icons/Cached';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {SET_IS_TYPING, SET_JOINED_ROOM, SET_MESSAGE} from "../../store/chat/types";
import {handleSend, handleTyping, handleConnect, disconnect} from "../../store/chat/action";

const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    right: '0 !important',
    bottom: '0 !important'
  }
});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let socket = null;
let stompClient = null;
let sender = 'guest';

const ChatBox = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const toggleOpen = () => {
      setOpen(p => !p);
    };
    const dispatch = useDispatch();
    const {
      message,
      chatHistory,
      customerId,
      joinedRoom,
      isTyping,
      loading,
      hasErrors
    } = useSelector((state: RootState) => state.chat);
    const {
      user,
      isLoggedIn,
      hasErrors: userError,
      loading: userLoading
    } = useSelector((state: RootState) => state.auth);

    const messageInput = useRef<HTMLInputElement>();
    const connect = () => {
      try {
        toggleOpen();
        if (!userLoading && !joinedRoom) {
          if (isLoggedIn)
            dispatch(handleConnect(user.username));
          else
            dispatch(handleConnect("Guest"));
        }
      } catch (err) {
        console.log('socket error:', err);
      }
    }
    const reconnect = () => {
      try {
        if (!userLoading) {
          dispatch(disconnect('disconnect'));
          if (isLoggedIn)
            dispatch(handleConnect(user.username));
          else
            dispatch(handleConnect("Guest"));
        }
      } catch (err) {
        console.log('socket error:', err);
      }
    }
    useEffect(() => {
      if (message.length > 0)
        setIsEmpty(false);
      else
        setIsEmpty(true);
    }, [message])

    function sendMessage() {
      if (messageInput.current.value.length > 0) {
        dispatch(handleSend(customerId, message));
        messageInput.current.value = '';
      }
    }

    return (
      <div style={{margin: 155}}>
        <Button variant="contained" color="primary" size='large' fullWidth
                style={{fontSize: '1.5rem', paddingTop: 20, paddingBottom: 20}}
                onClick={() => connect()} disabled={open}>
          Message Us
        </Button>
        {/*<Button variant="outlined" color="primary" onClick={() => dispatch(disconnect("som"))}>*/}
        {/*  disconnect*/}
        {/*</Button>*/}
        <Slide direction='up' in={open} mountOnEnter unmountOnExit>
          <div style={{
            position: "fixed", right: 5, bottom: 0,
            maxWidth: "550px", width: "45%", zIndex: 5
          }}>
            <Paper>
              <div className='d-flex align-items-center' style={{backgroundColor: "#1a1a1a", color: "#E5E5E5"}}>
                <MessageIcon className='p-2' style={{backgroundColor: "firebrick", color: "white", fontSize: "3.25rem"}}/>
                <div className='ml-2'>Message us</div>
                <IconButton color="secondary" onClick={reconnect}>
                  <CachedIcon style={{color: "firebrick", fontSize: "1.5rem"}}/>
                </IconButton>
                <div className='ml-auto'>
                  <IconButton color="secondary" onClick={handleClose}>
                    <CancelIcon style={{color: "firebrick", fontSize: "1.5rem"}}/>
                  </IconButton>
                </div>
              </div>
              <div className='mt-3'>
                <ChatMessages/>
              </div>
              <Paper>
                <div className='d-flex m-2 p-2'>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Type your messages"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    inputRef={messageInput}
                    onKeyUp={(event) => {
                      if (event.key === 'Enter') {
                        sendMessage();
                        dispatch({type: SET_IS_TYPING, payload: false});
                      } else
                        dispatch({type: SET_IS_TYPING, payload: true});
                    }}
                    onChange={(e) => {
                      dispatch({type: SET_MESSAGE, payload: e.target.value});
                    }}/>
                  <IconButton className='my-4 mx-2' color="secondary"
                              onClick={() => sendMessage()}
                              disabled={isEmpty}>
                    <SendIcon/>
                  </IconButton>
                </div>
              </Paper>
            </Paper>
          </div>
        </Slide>
      </div>
    );
  }
;

export default ChatBox;
