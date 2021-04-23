import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, Input, MenuItem, Paper, TextField, Typography, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PassengerInformation = ({ passengers, handleRemove }: PassengerProp) => {

    return (
        <div>
            {passengers.length > 0 && passengers.map((passenger, i) => (
                <div className="m-3">
                    <Accordion key={i}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <div style={{color: "#1a1a1a", fontSize: "1.1rem"}}>
                                {passenger.givenName} {passenger.familyName}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Paper>
                                <div className="d-flex">
                                    <div className="m-3" >{passenger.givenName}</div>
                                    <div className="m-3">{passenger.familyName}</div>
                                    <div className="m-3">{passenger.dob}</div>
                                    <div className="m-3">{passenger.gender}</div>
                                    <div className="m-3">{passenger.address}</div>
                                </div>
                                {handleRemove &&<Button onClick={() => {handleRemove(passenger)}}>Remove Passenger</Button>}
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </div>
                
            ))}
         </div>
    )
}

interface PassengerProp {
    passengers: any[];
    handleRemove?: Function;
}

export default PassengerInformation;