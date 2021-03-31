import React, {useEffect} from 'react';
import {fetchFlights} from "../store/flights/action";
import FlightList from "../components/flights/FlightList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";

const FlightSearchPage = () => {
  const dispatch = useDispatch();
  const {departureFlights, queries, loading, hasErrors} = useSelector((state: RootState) => state.flights);
  useEffect(() => {
    dispatch(fetchFlights(process.env["REACT_APP_FLIGHT_URL"], queries));
  }, []);
  return (
    <>
      <div className='picture-hero'/>
      <div className="container m-5 mx-auto">
        <FlightList flights={departureFlights.flights} loading={loading} hasErrors={hasErrors}
                    total={departureFlights.total}/>
      </div>
    </>
  );
}
export default FlightSearchPage;
