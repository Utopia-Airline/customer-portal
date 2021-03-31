import React from 'react';
import Booking from "../../models/Booking";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorToast from "../shared/ErrorToast";
import { Button } from 'react-bootstrap';
import {connect} from "react-redux";
import { cancelBooking } from '../../store/booking/actions';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card
} from "@material-ui/core";
import FlightIcon from '@material-ui/icons/Flight';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import {Col, Row} from "react-bootstrap";
import {format} from "date-fns";

const BookingMain = ({className, booking, loading, hasErrors, userId, dispatch}: BookingProps) => {
    const url = process.env["REACT_APP_BOOKING_URL"];
    return (
      <div className={className}>
        {loading && <LoadingSpinner className="text-center m-5"/>}
        {!loading && hasErrors && <ErrorToast error={hasErrors} message='Something went wrong.'/>}
        {!loading && booking &&
        <div className='m-5'>
          <div style={{
            padding: "20px", color: "#1a1a1a", fontWeight: 700,
            backgroundColor: (booking.isActive) ? "#cddc39" : "firebrick"
          }}>
            <span>Confirmation Code: </span>{booking.confirmationCode}
          </div>

          <Card style={{borderRadius: 0}}>
            <Row>
              <Col className='d-flex align-items-center' style={{backgroundColor: "#1a1a1a", color: "#E5E5E5"}}>
                <FlightIcon className='p-2' style={{backgroundColor: "firebrick", color: "white", fontSize: "3.25rem"}}/>
                <div className='ml-2'>FLIGHTS INFORMATION</div>
              </Col>
            </Row>
            <Row>
              <div className='w-100'>
                {booking.flights.map((flight, i) => (
                  <div key={i}>
                    <div className='p-2' style={{backgroundColor: '#E5E5E5'}}>
                      FLIGHT <span className='font-weight-bold'>{flight.id}</span>
                    </div>
                    <div className='p-2 font-weight-bold'
                         style={{fontSize: "1.25rem"}}>{format(new Date(flight.departureTime), 'EEEE, dd MMMM yyyy')}</div>
                    <div className='p-2' style={{fontSize: "1.75rem"}}>
                      <span>{flight.route.origin.iataId}</span>
                      <span><ArrowRightIcon style={{fontSize: "2.75rem", marginBottom: 5}}/></span>
                      <span>{flight.route.destination.iataId}</span>
                    </div>
                    <Row className='d-flex p-2'>
                      <Col className='p-2'>
                        <div className='p-1 font-weight-bold'>Departure</div>
                        <div
                          className='p-1'>{flight.route.origin.city}, {flight.route.origin.country} ({flight.route.origin.iataId})
                        </div>
                        <div className='p-1 text-secondary' style={{fontSize: "0.75rem"}}>{flight.route.origin.name}</div>
                      </Col>
                      <Col className='p-2'>
                        <div className='p-1 font-weight-bold'>Arrival</div>
                        <div
                          className='p-1'>{flight.route.destination.city}, {flight.route.destination.country} ({flight.route.destination.iataId})
                        </div>
                        <div className='p-1 text-secondary'
                             style={{fontSize: "0.75rem"}}>{flight.route.destination.name}</div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            </Row>
          </Card>

          <Col className='d-flex align-items-center mt-4' style={{backgroundColor: "#1a1a1a", color: "#E5E5E5"}}>
            <PeopleRoundedIcon className='p-2'
                               style={{backgroundColor: "firebrick", color: "white", fontSize: "3.25rem"}}/>
            <div className='ml-2'>PASSENGERS</div>
          </Col>
          {booking.passengers.map((passenger, i) => (
            <Accordion key={i}>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <div style={{color: "#1a1a1a", fontSize: "1.1rem"}}>
                  {passenger.givenName} {passenger.familyName}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div><span style={{color: "#6c6c6c"}}>Id: </span> <span
                  style={{color: "#1a1a1a", fontSize: "1.1rem"}}>{passenger.id}</span>
                </div>
                <div><span style={{color: "#6c6c6c"}}>Gender: </span> <span
                  style={{color: "#1a1a1a"}}>{passenger.gender}</span></div>
                <div><span style={{color: "#6c6c6c"}}>DOB: </span> <span
                  style={{color: "#1a1a1a", fontSize: "1.1rem"}}>{passenger.dob}</span>
                </div>
                <div><span style={{color: "#6c6c6c"}}>Address: </span> <span
                  style={{color: "#1a1a1a", fontSize: "1.1rem"}}>{passenger.address}</span></div>
              </AccordionDetails>
            </Accordion>
          ))}
          {userId && <Button onClick={e => {
            dispatch(cancelBooking(url, booking.id));
          }}>Cancel Booking</Button>}
          {!userId && <Button onClick={e => {
            dispatch(cancelBooking(url, booking.id));
            }}>Cancel Booking</Button>}

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
  userId?: number;
  dispatch?: any;
}


export default BookingMain;
