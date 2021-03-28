import React from 'react';
import '../../styles/components/booking/bookingSidebar.scss';
import Booking from "../../models/Booking";
import {Badge, ListGroup} from "react-bootstrap";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorToast from "../shared/ErrorToast";
import BookingTabPanel from "./BookingTabPanel";
import {format} from "date-fns";

const BookingList = ({
                       className, bookings, loadBookings,
                       total, loading, hasErrors, loadBooking
                     }: BookingProps) => {
  return (
    <div className={className}>
      {!loading && hasErrors && <ErrorToast error={hasErrors} message='Something went wrong.'/>}
      <BookingTabPanel loadBookings={loadBookings}/>
      {loading && <LoadingSpinner className="mt-5 mx-auto"/>}
      <ListGroup>
        {!loading && bookings &&
        <>
          <div className='text-center m-5'>Your total
            Bookings: {total}</div>
          {bookings.map((booking, i) => (
            <ListGroup.Item action className='booking-item' onClick={() => loadBooking(booking.id)} key={i}>
              <div><Badge>{booking.id}</Badge></div>
              <span className="mt-sm-1">{booking?.flights[0]?.route?.origin?.city} to </span>
              <span className="mt-sm-1">{booking?.flights[0]?.route?.destination?.city}</span>
              <div className="text-secondary mt-sm-1">
                at {format(new Date(booking?.flights[0]?.departureTime), 'EEEE, dd MMMM yyyy')}
              </div>
            </ListGroup.Item>
          ))}
        </>
        }
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
  total?: number;
  loadBookings?: Function;
}

export default BookingList;
