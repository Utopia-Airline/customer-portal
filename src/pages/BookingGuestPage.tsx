import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import {Button, Form} from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom';
import { getBookingForGuest } from '../store/booking/actions';
import BookingMain from '../components/bookings/BookingMain';


const BookingGuestPage = ({ dispatch, loading, hasErrors, booking}) => {
  const [confirmationCode, setConfirmationCode] = useState('');
  useEffect(()=>{
    console.log("component is loadeed")
  },[])
  useEffect(()=>{
    console.log("confirmation code is changed")
  },[confirmationCode])
const role = "GUEST";
  return (
   <>
    <Form className='m-5'>
      <Form.Group className='d-flex' controlId="formConfirmationCode">
          <i className="fa fa-user align-self-center mr-2 h3"/>
          <Form.Control type="text" placeholder="Booking Confirmation Code" onChange={e => setConfirmationCode(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="button"
          onClick={e =>
              dispatch(getBookingForGuest(`${process.env["REACT_APP_BOOKING_URL"]}`, confirmationCode))}>
                Submit
              </Button>
    </Form>
    <BookingMain booking={booking} loading={loading} hasErrors={hasErrors}/>
   </>
  );
}

const mapStateToProps = state => ({
  booking: state.booking.booking,
  loading: state.booking.loading,
  hasErrors: state.booking.hasErrors
});

export default connect(mapStateToProps)(BookingGuestPage);
