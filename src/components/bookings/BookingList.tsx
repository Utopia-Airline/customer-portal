import React from 'react';
import '../../styles/components/booking/bookingSidebar.scss';
import Booking from "../../models/Booking";
import {Badge, ListGroup} from "react-bootstrap";
import LoadingSpinner from "../shared/LoadingSpinner";

const BookingList = ({className, bookings, loading, hasErrors, loadBooking}: BookingProps) => {
  return (
    <div className={className}>
      {loading && <LoadingSpinner className="text-center"/>}
      {!loading && hasErrors && <div>Unable to load bookings</div>}
      <ListGroup>
        {!loading && bookings && bookings.map((booking, i) => (
          <ListGroup.Item action onClick={() => loadBooking(booking.id)} key={i}>
            <div><Badge>{booking.id}</Badge></div>
            <span className="mt-sm-1">{booking?.flights[0]?.route?.origin?.city} to </span>
            <span className="mt-sm-1">{booking?.flights[0]?.route?.destination?.city}</span>
            <div className="text-secondary mt-sm-1"> at {booking?.flights[0]?.departureTime}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

interface BookingProps {
  className?: any;
  loading?: boolean;
  bookings?: Booking[];
  hasErrors?: boolean;
  loadBooking?: Function;
}

export default BookingList;
