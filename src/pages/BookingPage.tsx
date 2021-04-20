import React, {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import "../styles/components/ProfilePage.scss";
import {getAllBookings} from "../store/bookings/actions";
import Booking from "../models/Booking";
import '../styles/components/booking/bookingPage.scss';
import BookingMain from "../components/bookings/BookingMain";
import BookingList from "../components/bookings/BookingList";
import {clearBooking, getBookingById} from "../store/booking/actions";
import LoadingSpinner from "../components/shared/LoadingSpinner";


const BookingPage = ({
                       dispatch, loading, hasErrors, bookings, total, booking,
                       bookingHasErrors, bookingLoading, userId, userRole
                     }: BookingProps) => {
  const [isActive, setIsActive] = useState(true);
  const mainRef = useRef<HTMLDivElement>();
  const url = `${process.env["REACT_APP_BOOKING_URL"]}`;
  const [updated, setUpdated] = useState(true);

  useEffect(() => {
    console.log('get all bookings', userId, userRole);
    dispatch(clearBooking())
    loadBookings(true);
  }, [])

  function loadBooking(id) {
    
    dispatch(getBookingById(`${process.env["REACT_APP_BOOKING_URL"]}`, id));
    console.log("booking:", booking);
    mainRef.current.scrollIntoView({behavior: "smooth", block: "start"});
  }

  const reloadBooking = (id) => {
    // dispatch(getBookingById(`${process.env["REACT_APP_BOOKING_URL"]}`, id));
    loadBooking(id);
    setUpdated(!updated);
  }

  function loadBookings(isActive = true) {
    dispatch(getAllBookings(`${process.env["REACT_APP_BOOKING_URL"]}/${userRole}s?${userRole}Id=${userId}&isActive=${isActive}`));
  }

  return (
    <div className='booking-page'>
      <BookingList className='sidebar' loadBookings={(isActive) => loadBookings(isActive)}
                   loadBooking={(id) => loadBooking(id)}
                   bookings={bookings} total={total} loading={loading} hasErrors={hasErrors}/>
      <div className='main p-5' ref={mainRef}>
        <BookingMain className='main p-5' booking={booking} hasErrors={bookingHasErrors} loading={bookingLoading} userId={userId} dispatch={dispatch} reloadBooking={reloadBooking}/>
      </div>
    </div>
  );
}

interface BookingProps {
  dispatch?: Function;
  loading?: boolean;
  bookings?: Booking[];
  total?: number;
  hasErrors?: boolean;
  userId?: number;
  userRole?: String;
  bookingLoading?: boolean;
  booking?: Booking;
  bookingHasErrors?: boolean;
}

const mapStateToProps = state => ({
  userId: state.auth.user?.id,
  userRole: (state.auth.user?.role.name === 'AGENT') ? 'agent' : 'user',
  loading: state.bookings?.loading,
  bookings: state.bookings?.bookings,
  total: state.bookings?.total,
  hasErrors: state.bookings?.hasErrors,
  bookingLoading: state.booking?.loading,
  booking: state.booking?.booking,
  bookingHasErrors: state.booking?.hasErrors,
});

export default connect(mapStateToProps)(BookingPage);