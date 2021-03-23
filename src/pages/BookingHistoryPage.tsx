import React, {useEffect} from 'react';
import {connect} from "react-redux";
import "../styles/components/ProfilePage.scss";
import {getAllBookings} from "../store/bookings/actions";
import Booking from "../models/Booking";
import {Link} from 'react-router-dom';
import '../styles/components/BookingHistoryPage.scss';

const BookingHistoryPage = ({dispatch, loading, hasErrors, bookings, userId}: UserProps) => {
  useEffect(() => {
    console.log('get all bookings', userId);
    dispatch(getAllBookings(`${process.env["REACT_APP_BOOKING_URL"]}`));
  }, [])
  return (
    <div>
      <h1>bookings</h1>
      {loading && <div>loading your bookings ...</div>}
      {!loading && hasErrors && <div>Unable to load bookings</div>}
      {!loading && bookings && bookings.map((booking, i) => (
        <div className='list-group m-3' key={i}>
          <Link to='' style={{textDecoration: "none"}}>
            <div className="list-group-item booking-item rounded">
              <div className='main m-2'>
                <div className="my-2">
                <span className="mr-2 text-center"
                      style={{backgroundColor: "white", borderRadius: "0.25rem", padding: "0.25rem"}}>
                  {booking.id}
                </span>
                  <span className="font-weight-bold">{booking?.flights[0]?.route?.origin?.city}</span>
                  {booking.flights && booking.flights.length && <span> to </span>}
                  <span className="font-weight-bold">{booking?.flights.slice(-1)[0]?.route?.destination?.city}</span>
                </div>
                {booking.type === 'USER' &&
                <div className="d-flex booker mt-3 p-2">
                  <div className="m-1">Booker info:</div>
                  <div className="m-1">{booking.user?.givenName}</div>
                  <div className="m-1">{booking.user?.familyName}</div>
                  <div className="ml-auto m-1">{booking.type}</div>
                </div>}
                {booking.type === 'GUEST' &&
                <div className="d-flex booker mt-3 p-2">
                  <div className="m-1">Booker info:</div>
                  <div className="m-1">{booking.guest?.contactEmail}</div>
                  <div className="m-1">{booking.guest?.contactPhone}</div>
                  <div className="ml-auto m-1">{booking.type} </div>
                </div>}
                <div className="d-flex">
                  <div className="m-3" style={{maxWidth: "20rem"}}>
                    <span className="font-weight-bold">{booking?.flights[0]?.route?.origin?.city}, </span>
                    <span>{booking?.flights[0]?.route?.origin?.country} </span>
                    <span>({booking?.flights[0]?.route?.origin?.iataId})</span>
                    <div className="text-secondary mt-sm-1">{booking?.flights[0]?.route?.origin?.name}</div>
                    <div>
                      <div className="d-flex my-3">
                        <i className="fas fa-plane-departure mt-1 mr-2"/>
                        <div>{booking?.flights[0]?.departureTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

interface UserProps {
  dispatch?: Function;
  loading?: boolean;
  bookings?: Booking[];
  hasErrors?: boolean;
  userId?: number;
}

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  loading: state.bookings.loading,
  bookings: state.bookings.bookings,
  hasErrors: state.bookings.hasErrors
});
export default connect(mapStateToProps)(BookingHistoryPage);
