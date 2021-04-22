import { Button, Card, CardActions, CardContent, TextField, MenuItem, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';

const genders = [
    {
        value: 'Male',
        label: 'M'
    },
    {
        value: 'Female',
        label: 'F'
    },
    {
        value: 'Other',
        label: 'Other'
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const PassengerForm = ({handleAdd}: PassengerProp) => {
    const classes = useStyles();

    const [givenName, setGivenName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [dob, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");

    return(
        <div className="justify-content-center text-center">
            <Card className="add-passengers" variant="outlined">
                <CardContent>
                    <div>
                        <Form className={`${classes.root} justify-content-center text-center`}>
                            <div>
                                <TextField placeholder="Given Name" onChange={e => setGivenName(e.target.value)}/>
                                <TextField placeholder="Family Name" onChange={e => setFamilyName(e.target.value)}/>
                            </div>
                            <div>
                                <TextField placeholder="Date Of Birth" onChange={e => setDOB(e.target.value)}/>
                                <TextField id="select-gender" select label="Gender" value={gender}  onChange={e => setGender(e.target.value)} helperText="Please Select a Gender">
                                    {genders.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <TextField placeholder="Address" onChange={e => setAddress(e.target.value)}/>
                        </Form>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>handleAdd({givenName, familyName, dob, gender, address})}>Add Passenger</Button>
                </CardActions>
            </Card>
        </div>
    )
}

interface PassengerProp {
    handleAdd: Function;
}
export default PassengerForm;