import React from 'react';
import {FlightNode} from "../../models/FlightNode";
import ErrorToast from "../shared/ErrorToast";
import LoadingSpinner from "../shared/LoadingSpinner";
import {Button, Paper} from "@material-ui/core";
import {Col, Row} from "react-bootstrap";
import {format} from "date-fns";
import {Link} from "react-router-dom";
import Flight from '../../models/Flight';
import { keepBookingFlight } from '../../store/booking/actions';



const FlightList = ({dispatch, loading, hasErrors, flights, total}: FlightProps) => {

  return (
    <>
      {!loading && hasErrors && <ErrorToast error={hasErrors} message='Something went wrong.'/>}
      {loading && <LoadingSpinner className="mt-5 mx-auto text-center"/>}
      {!loading && total === 0 && <div className='text-center h1'>No Flights Found</div>}
      {!loading && flights &&
      <div>
        {flights.map((flight, i) => (
          <Paper style={{borderRadius: 0, margin: 15}} key={i}>
            <Row>
              <Col xs lg="4">
                <img style={{width: "100%", height: "100%"}}
                     src={`https://c.ekstatic.net/shared/images/destination/v1/airports/DXB/510x340.jpg`}
                     alt='country'/>
                <div className='mask-light'/>
              </Col>
              <Col style={{borderTop: "3px solid #287214", padding: 20}}>
                <div style={{color: "#287214"}}>Economy</div>
                <>
                  <span style={{fontSize: "1.75rem", fontWeight: 900}}>{flight.seats.price}</span>
                  <span>USD</span>
                </>
                <Row style={{paddingTop: 70, paddingBottom: 20}}>
                  <Col>
                    <div style={{fontSize: "1rem"}}>
                        <span
                          className='font-weight-bold'>{flight.route.origin.city}</span>, {flight.route.origin.country}({flight.route.origin.iataId})
                      <span className='small'> to </span>
                      <span
                        className='font-weight-bold'>{flight.route.destination.city}</span>, {flight.route.destination.country}({flight.route.destination.iataId})
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className='m-2'>
                    <div className='small'>Departing</div>
                    <div>{format(new Date(flight.departureTime), 'EEEE, dd MMMM yyyy')}</div>
                  </Col>
                  {/*<div className='m-2'>*/}
                  {/*  <div className='small'>Returning</div>*/}
                  {/*  /!*<div>{format(new Date(flight.departureTime), 'EEEE, dd MMMM yyyy')}</div>*!/*/}
                  {/*</div>*/}
                  <Col className='m-2'>
                    <div className='small'>Seats available</div>
                    <div>{flight.seats.available}</div>
                  </Col>
                  <Col xs lg="2" className='text-right align-self-center'>
                    <Button variant="contained" size="large" disableElevation className='btn-link'
                            style={{backgroundColor: "#1a1a1a", margin: 15}} onClick={() => { dispatch(keepBookingFlight([flight])); }} component={Link} to='/bookings/new'>
                      Book
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Paper>
        ))}
      </div>
      }
    </>
  );
};

interface FlightProps {
  dispatch?: Function;
  loading?: boolean;
  flights?: FlightNode[];
  hasErrors?: boolean;
  total?: number;
}

export default FlightList;
