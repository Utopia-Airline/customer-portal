import React from 'react';
import Booking from "../../models/Booking";

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
}

export default BookingMain;
