import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import Flight from "../models/Flight";
import {fetchFlights} from "../store/flights/action";

const FlightsListPage = ({dispatch, loading, hasErrors, flights}: FlightProps) => {
  useEffect(() => {
    dispatch(fetchFlights(process.env["REACT_APP_FLIGHT_URL"]));
    console.log('navigate');
  }, []);
  console.log('flights', flights);
return (

  <div className="row m-5">
    <h1>Flights</h1>
 {/* <div> */}
      {/* <div >
        <h3>UAW{flights.route.id} &#x01C1; {flight.route.origin.iataId} &#10095; {flights.route.destination.iataId}</h3>
      </div>
      <div className="col-md text-md-right">
        <h4>{moment(flights.departureTime).format('MMM d, y h:mm a')}</h4>
      </div>
    </div> */}
    <div className="row table-responsive">
      <table className="table text-center">
        <thead>
        <tr>
          <th scope="col">Origin</th>
          <th scope="col">Destination</th>
          <th scope="col">Max Capacity</th>
          <th scope="col">Reserved Seats</th>
          <th scope="col">Passenger Count</th>
          <th scope="col">Available Seats</th>
          <th scope="col">Seat Price</th>
        </tr>
        </thead>
      {loading && <div>loading your flights ...</div>}
      {!loading && hasErrors && <div>Unable to load flights</div>}
      <tbody>
      {!loading && flights.map((flight, i) => (
         <tr key={i}>
         <td><span
           className="font-weight-bold">{flight.route.origin.city}</span>,
           {flight.route.origin.country} <br/>
           <span className="text-secondary small">{flight.route.origin.name}</span>
         </td>
         <td><span className="font-weight-bold">{flight.route.destination.city}</span>,
           {flight.route.destination.country}<br/>
           <span className="text-secondary small">{flight.route.destination.name}</span>
         </td>
         <td>{flight.totalSeats}</td>
         <td>{flight.reservedSeats}</td>
         <td>{flight.bookedSeats}</td>
         <td>{flight.availableSeats}</td>
         <td>${flight.seatPrice}</td>
       </tr>
    )) }
     </tbody>
      </table>
    </div>
  </div>
  );
}

interface FlightProps {
  dispatch?: Function;
  loading?: boolean;
  flights?: Flight[];
  hasErrors?: boolean;
}

const mapStateToProps = state => ({
  flights: state.flights.flights,
  loading: state.flights.loading,
  hasErrors: state.flights.hasErrors
});

export default connect(mapStateToProps)(FlightsListPage);
