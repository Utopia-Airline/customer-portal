import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import "../styles/components/ProfilePage.scss";
import {getAllBookings} from "../store/bookings/actions";
import Booking from "../models/Booking";
import '../styles/components/booking/bookingPage.scss';
import BookingMain from "../components/bookings/BookingMain";
import BookingList from "../components/bookings/BookingList";
import {deleteBooking, getBookingById} from "../store/booking/actions";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const BookingPage = (
  {dispatch, loading, hasErrors, bookings, userId, booking, bookingHasErrors, bookingLoading}:
    BookingProps) => {
  const mainRef = useRef<HTMLDivElement>();
  const url = `${process.env["REACT_APP_BOOKING_URL"]}`;
  useEffect(() => {
    console.log('get all bookings', userId);
    // dispatch(deleteBooking())
    dispatch(getAllBookings(url.concat("/users?userId="+userId+"&isActive=true")));
  }, [])

  function loadBooking(id) {
    console.log('load booking', id);
    dispatch(getBookingById(`${process.env["REACT_APP_BOOKING_URL"]}`, id));
    console.log(mainRef);
    mainRef.current.scrollIntoView({behavior:"smooth", block:"start"});
  }

  return (
    <div className='booking-page'>
      {loading && <LoadingSpinner className="mt-5 mx-auto"/>}
      {!loading &&
      <>
        <BookingList className='sidebar' loadBooking={(id) => loadBooking(id)}
                     bookings={bookings} loading={loading} hasErrors={hasErrors}/>
        <div className='main' ref={mainRef}>
          <BookingMain className='main p-5' booking={booking} hasErrors={bookingHasErrors} loading={bookingLoading} userId={userId} dispatch={dispatch}/>
        </div>
      </>
      }
    </div>
  );
}

interface BookingProps {
  dispatch?: Function;
  loading?: boolean;
  bookings?: Booking[];
  hasErrors?: boolean;
  userId?: number;
  bookingLoading?: boolean;
  booking?: Booking;
  bookingHasErrors?: boolean;
}

const mapStateToProps = state => ({
  userId: state.auth.user?.id,
  loading: state.bookings?.loading,
  bookings: state.bookings?.bookings,
  hasErrors: state.bookings?.hasErrors,
  bookingLoading: state.booking?.loading,
  booking: state.booking?.booking,
  bookingHasErrors: state.booking?.hasErrors
});
export default connect(mapStateToProps)(BookingPage);
