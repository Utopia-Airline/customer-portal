import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, Input, MenuItem, Paper, TextField, Typography } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import {format} from "date-fns";
import Flight from "../../models/Flight"

const FlightDisplayComponent = ({flights}: FlightProp) => {
    return(
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
                </Row>
              </Col>
            </Row>
          </Paper>
        ))}
      </div>
    )
}

interface FlightProp {
    flights: Flight[];
}

export default FlightDisplayComponent;