import React, {useEffect, useState} from 'react';
import BookingCreationComponent from '../components/bookings/BookingCreationComponent';
import ErrorToast from "../components/shared/ErrorToast";
import {connect, useDispatch} from "react-redux";

const BookingCreationPage = ({numPassengers, flights, user}) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log('error', error);
  }, [error])

  return (
    <div className='booking-creation-page'>
      <div className='booking-creation-form m-5'><BookingCreationComponent dispatch={dispatch} numPassengers={numPassengers} flights={flights} user={user}/></div>
    </div>
  );
};

const mapStateToProps = state => ({
    numPassengers: state.flights.passengers,
    flights: state.booking.flights,
    user: state.auth.user
})
export default connect(mapStateToProps)(BookingCreationPage);
