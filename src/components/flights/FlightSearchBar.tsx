import React, {useState} from 'react';
import DateFnsUtils from "@date-io/date-fns";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
  Box, Button, FormControl, FormHelperText, Grid,
  Input, InputLabel, MenuItem, Paper, Select, TextField,
} from "@material-ui/core";
import {Autocomplete,} from "@material-ui/core";
import FlightDatePicker from "../shared/FlightDatePicker";
import {makeStyles} from "@material-ui/core/styles";
import AutocompleteBar from "../shared/AutocompleteBar";

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
  const top100Films = [{title: 'The Lord of the Rings'}, {title: 'Pulp Fiction'}];
  const classes = useStyles();
  const [passenger, setPassenger] = React.useState(null);

  const handleChangePassenger = (event) => {
    setPassenger(event.target.value);
  };
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
                    <Autocomplete
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) =>
                        <TextField {...params} label="Origin" variant="outlined" color='secondary'/>}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box m={1}>

                    <AutocompleteBar/>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box m={1}>
                    <FlightDatePicker/>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box m={1}>
                    <FormControl variant="outlined" color='secondary' fullWidth className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label">Passenger</InputLabel>
                      <Select
                        labelId="passenger-label"
                        id="demo-simple-select-outlined"
                        value={passenger}
                        onChange={handleChangePassenger}
                        label="Passenger"
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={3}>4</MenuItem>
                        <MenuItem value={3}>5</MenuItem>
                        <MenuItem value={3}>6</MenuItem>
                        <MenuItem value={3}>7</MenuItem>
                        <MenuItem value={3}>8</MenuItem>
                        <MenuItem value={3}>9</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </FormControl>
          <Box m={1} alignSelf='center'>
            <Button color='secondary' style={{borderRadius: '25rem'}}>
              <ArrowForwardIcon fontSize='large'/>
            </Button>
          </Box>
        </Box>
      </Paper>

    </Box>
  );
};

export default FlightSearchBar;
