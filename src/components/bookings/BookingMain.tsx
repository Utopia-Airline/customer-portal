import React from 'react';
import Booking from "../../models/Booking";
import {Badge, ListGroup} from "react-bootstrap";

const BookingMain = ({className, booking, loading, hasErrors}: BookingProps) => {
  return (
    <div className={className}>
      {loading && <div>loading your booking ...</div>}
      {!loading && hasErrors && <div>Unable to load the booking</div>}
      {!loading && booking &&
      <div className='m-5'>
        <div>{booking.id}</div>
        <div>{booking.confirmationCode}</div>
        <div>{booking.isActive ? 'ACTIVE' : 'INACTIVE'}</div>
      </div>}
    </div>
  );
};

interface BookingProps {
  className?: any;
  loading?: boolean;
  booking?: Booking;
  hasErrors?: boolean;
}

export default BookingMain;
