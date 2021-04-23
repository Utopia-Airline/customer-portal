import { Button, Card, CardActions, CardContent, Input, MenuItem, Paper, TextField, Step, Stepper, StepLabel, Typography} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Flight from "../../models/Flight";
import { makeStyles } from '@material-ui/core/styles';
import User from "../../models/User";
import PassengerForm from "../passengers/PassengerForm";
import ContactInformationComponent from "../passengers/ContactInformationComponent";
import FlightDisplayComponent from "../flights/FlightDisplayComponent";
import PassengerInformation from "../passengers/PassengerInformation";
import BookingCreation from "../../models/BookingCreation";
import { createBooking, createGuestBooking } from "../../store/booking/actions";
import GuestContact from "../../models/GuestContact";
import {Col, Row} from "react-bootstrap";
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import FlightIcon from '@material-ui/icons/Flight';

const BookingCreationComponent = ({ dispatch, numPassengers, flights, user }: BookingProp) => {

    var booking: BookingCreation;
    var guest: any;

    function submitBooking(){
      if(user){
        booking = {isActive: true, passengers: passengers, flights: flights.map((flight) => ({id: flight.id})), user: user};
        dispatch(createBooking('/api/bookings', booking));
        // console.log(booking);
      } else {
        booking = {isActive: true, passengers: passengers, flights: flights.map((flight) => ({id: flight.id}))};
        guest = contactInformation;
        dispatch(createGuestBooking('/api/bookings/guest', {booking, guest}));
        // console.log({booking, guest});
      }
    }

    function isEmpty(info) {
      return Object.keys(info).length === 0;
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        backButton: {
          marginRight: theme.spacing(1),
        },
        instructions: {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
        },
      }));
    
      function getSteps() {
        return ['Passenger Information', 'Contact Information', 'Summary'];
      } 
      
      function getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return (
                <div className="justify-content-center">
                    <Col className='d-flex align-items-center mt-4' style={{backgroundColor: "#1a1a1a", color: "#E5E5E5"}}>
                        <PeopleRoundedIcon className='p-2'
                               style={{backgroundColor: "firebrick", color: "white", fontSize: "3.25rem"}}/>
                        <div className='ml-2'>PASSENGERS</div>
                    </Col>
                    <PassengerInformation passengers={passengers} handleRemove={removePassenger}/>
                    {numPassengers > passengers.length && <div className="text-center">
                      <PassengerForm handleAdd={addPassenger}/>
                    </div>}
                </div>);
          case 1:
            return (
              <div>
                <Col className='d-flex align-items-center mt-4' style={{backgroundColor: "#1a1a1a", color: "#E5E5E5"}}>
                    <PeopleRoundedIcon className='p-2'
                            style={{backgroundColor: "firebrick", color: "white", fontSize: "3.25rem"}}/>
                    <div className='ml-2'>CONTACT INFORMATION</div>
                </Col>
                <ContactInformationComponent handleSave={addContactInformation} user={user}/>
              </div>
            );
          case 2:
            return (
              <div>
                <Col className='d-flex align-items-center mt-4' style={{backgroundColor: "#1a1a1a", color: "#E5E5E5"}}>
                    <FlightIcon className='p-2'
                            style={{backgroundColor: "firebrick", color: "white", fontSize: "3.25rem"}}/>
                    <div className='ml-2'>CONTACT INFORMATION</div>
                </Col>
                <FlightDisplayComponent flights={flights}/>
                <PassengerInformation passengers={passengers}/>
                {!isEmpty(contactInformation) && <ContactInformationComponent contactInfo={contactInformation}/>}
              </div>
            );
          default:
            return 'Unknown stepIndex';
        }
      }

    const [passengers, setPassengers] = useState([]);
    const [contactInformation, setContactInformation] = useState({});

    const addPassenger = (newPassenger) => {
        setPassengers([...passengers, newPassenger]);
    }    

    const removePassenger= (passenger) => {
      const index = passengers.indexOf(passenger);
      passengers.splice(index, 1);
      setPassengers([...passengers]);
    }

    const addContactInformation = (information) => {
      setContactInformation(information);
    }

    useEffect(() => {
    }, [contactInformation]) 

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    return(
        <div className={`${classes.root} container`}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              {/* <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
              {activeStep === 0 && passengers.length === numPassengers && <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>}
              {activeStep === 0 && passengers.length !== numPassengers && <Button variant="contained" color="primary" disabled>Next</Button>}
              {activeStep === 1 && !isEmpty(contactInformation) && <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>}
              {activeStep === 1 && isEmpty(contactInformation) && <Button variant="contained" color="primary" disabled>Next</Button>}
              {activeStep === 2 && <Button variant="contained" color="primary" onClick={submitBooking}>Make Payment</Button>}
            </div>
          </div>
        )}
      </div>
    </div>
    )
};

interface BookingProp {
    dispatch: Function;
    numPassengers: number;
    flights: Flight[];
    user?: User;
}

export default BookingCreationComponent;