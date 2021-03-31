import React from 'react';
import Booking from "../../models/Booking";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorToast from "../shared/ErrorToast";
import { Button } from 'react-bootstrap';
import {connect} from "react-redux";
import { cancelBooking } from '../../store/booking/actions';

const BookingMain = ({className, booking, loading, hasErrors, userId, dispatch}: BookingProps) => {
    const url = process.env["REACT_APP_BOOKING_URL"];
    return (
      <div className={className}>
        {loading && <LoadingSpinner className="text-center m-5"/>}
        {!loading && hasErrors && <ErrorToast error={hasErrors} message='Something went wrong.'/>}
        {!loading && booking &&
        <div className='m-5'>
          <div>{booking.id}</div>
          <div>{booking.confirmationCode}</div>
          <div>{booking.isActive ? 'ACTIVE' : 'INACTIVE'}</div>
          flights:
          {booking.flights.map((flight, i) => (
            <div className='m-3' key={i}>
              <div>{flight.id}</div>
              <div>{flight.departureTime}</div>
              <div>{flight.route.origin.city}</div>
              <div>{flight.route.origin.country}</div>
              <div>{flight.route.origin.name}</div>
              <div>{flight.route.destination.city}</div>
              <div>{flight.route.destination.country}</div>
              <div>{flight.route.destination.name}</div>
            </div>
          ))}
          passengers:
          {booking.passengers.map((passenger, i) => (
            <div className='m-3' key={i}>
              <div>{passenger.id}</div>
              <div>{passenger.givenName}</div>
              <div>{passenger.familyName}</div>
              <div>{passenger.gender}</div>
              <div>{passenger.dob}</div>
              <div>{passenger.address}</div>
            </div>
          ))}
          {userId && <Button onClick={e => {
            dispatch(cancelBooking(url, booking.id));
          }}>Cancel Booking</Button>}
          {!userId && <Button onClick={e => {
            dispatch(cancelBooking(url, booking.id));
            }}>Cancel Booking</Button>}
        </div>}
      </div>
    );
  }
;



interface BookingProps {
  className?: any;
  loading?: boolean;
  booking?: Booking;
  hasErrors?: boolean;
  userId?: number;
  dispatch?: any;
}


export default BookingMain;
