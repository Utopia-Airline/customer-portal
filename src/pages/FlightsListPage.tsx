import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {FlightNode} from "../models/FlightNode";
import {fetchFeaturedFlights, setPassengers} from "../store/flights/action";
import FlightList from "../components/flights/FlightList";
import {RootState} from "../store";


const FlightsListPage = ({dispatch, loading, hasErrors, flights}: FlightProps) => {
  useEffect(() => {
    const queries = new Map<string, string>();
    queries.set('destination', 'united');
    queries.set('origin', 'united');
    dispatch(fetchFeaturedFlights(process.env["REACT_APP_FLIGHT_URL"] + "/featured-fares"));
    dispatch(setPassengers(1));
    console.log('flights', flights);
  }, []);
  return (
    <>
      <div className='picture-hero'/>
      <div className="container m-5 mx-auto" data-testid="testingFlightListPage">
        <FlightList dispatch={dispatch} flights={flights} loading={loading} hasErrors={hasErrors}/>
      </div>
    </>
  );
};

interface FlightProps {
  dispatch?: Function;
  loading?: boolean;
  flights?: FlightNode[];
  hasErrors?: boolean;
}

const mapStateToProps = (state: RootState) => ({
  flights: state.flights.departureFlights.flights,
  loading: state.flights.loading,
  hasErrors: state.flights.hasErrors,
  chosenFlight: state.flight
});

export default connect(mapStateToProps)(FlightsListPage);
