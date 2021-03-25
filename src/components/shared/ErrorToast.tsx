import React, {useState} from 'react';
import {Button, Col, Row, Toast} from 'react-bootstrap';
import '../../styles/components/LoadingModal.scss';
import IconButton from "./IconButton";

interface ErrorProps {
  error: boolean;
  setShow?: Function;
  message?: string;
  status?: number;
}

const ErrorToast = ({error, message, status}: ErrorProps) => {
  const [show, setShow] = useState(error);
  return (
    <div className='toast-error-wrapper'>
      <Toast className='toast-error' onClose={() => setShow(false)} show={show} delay={3000} autohide={true}>
        <Toast.Body className='d-flex'>
          <i className="fas fa-exclamation-circle align-self-center mr-2" style={{fontSize:"1.35rem"}}/>
          <div className='align-self-center'>{message}</div>
          <IconButton className='fas fa-times align-self-center' onClick={() => setShow(false)}/>
        </Toast.Body>
      </Toast>
    </div>
  );
}


export default ErrorToast;
