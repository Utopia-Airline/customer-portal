import React, {useEffect, useState} from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
  Box, Button, FormControl, FormHelperText, Grid,
  Input, InputLabel, MenuItem, Paper, Select, TextField,
} from "@material-ui/core";
import FlightDatePicker from "../shared/FlightDatePicker";
import {makeStyles} from "@material-ui/core/styles";
import FlightAirportBar from "./FlightAirportBar";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setQueriesSuccess} from "../../store/flights/action";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FlightSearchBar = () => {
  const classes = useStyles();
  const [passengers, setPassengers] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departing, setDeparting] = useState('');
  const [returning, setReturning] = useState('');
  const queries = new Map<string, string>();
  const handleChangePassenger = (event) => {
    setPassengers(event.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    origin ? queries.set('origin', origin) : queries.delete('origin');
    destination ? queries.set('destination', destination) : queries.delete('destination');
    passengers ? queries.set('passengers', passengers) : queries.delete('passengers');
    departing ? queries.set('departing', departing) : queries.delete('departing');
    returning ? queries.set('returning', returning) : queries.delete('returning');
    dispatch(setQueriesSuccess(queries));
  }, [origin, destination, departing, returning, passengers])
  return (
    <Box marginX={7} style={{marginTop: '-25px', zIndex: 10, position: 'relative'}}>
      <Paper elevation={2}>
        <div className='text-center p-5'>
          <h2>Search For Flights</h2>
        </div>
        <Box display='flex' m={2}>
          <FormControl fullWidth={true}>
            <Box display='flex' m={2}>
              <Grid
                container
                // direction="row"
                // justifyContent="center"
                // alignItems="center"
              >
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box m={1}>
                    <FlightAirportBar label='Origin' handleChange={(value) => setOrigin(value)}/>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box m={1}>
                    <FlightAirportBar label='Destination' handleChange={(value) => setDestination(value)}/>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box m={1}>
                    <FlightDatePicker handleChange={(dates => {
                      setDeparting(dates[0]);
                      setReturning(dates[1]);
                    })}/>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box m={1}>
                    <FormControl variant="outlined" color='secondary' fullWidth className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label">Passenger</InputLabel>
                      <Select
                        labelId="passenger-label"
                        id="demo-simple-select-outlined"
                        value={passengers}
                        onChange={handleChangePassenger}
                        label="Passenger"
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </FormControl>
          <Box m={1} alignSelf='center'>
            <Button color='secondary' className='MuiButton-rounded'
                    style={{padding: 0, minWidth: 0}}>
              <Link to='/flights/search' className='p-3'>
                <ArrowForwardIcon style={{fontSize: '2.85rem'}}/>
              </Link>
            </Button>
          </Box>
        </Box>
      </Paper>

    </Box>
  );
};

export default FlightSearchBar;
