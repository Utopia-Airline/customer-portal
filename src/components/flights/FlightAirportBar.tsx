import React, {useEffect, useState} from 'react';
import {Autocomplete, Box} from "@material-ui/core";
import {CircularProgress, TextField} from "@material-ui/core";
import {getAllOriginAirports} from "../../store/airport/origin/actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {getAllDestinationAirports} from "../../store/airport/destination/actions";
import Airport from "../../models/Airport";

const FlightAirportBar = ({label, handleChange}) => {
  const [open, setOpen] = useState(false);
  const isOrigin = (label.toLowerCase() === 'origin');
  const [options, setOptions] = useState([]);
  const [destination, setDestination] = useState(null);
  const {airports, total, loading, hasErrors} = useSelector((state: RootState) =>
    isOrigin ? state.originAirports : state.destinationAirports);
  // const loading = open && airports.length === 0;
  const dispatch = useDispatch();
  useEffect(() => {
    // let active = true;
    // if (!loading) {
    //   return undefined;
    // }
    if (isOrigin)
      dispatch(getAllOriginAirports(process.env['REACT_APP_AIRPORT_URL'], destination));
    else
      dispatch(getAllDestinationAirports(process.env['REACT_APP_AIRPORT_URL'], destination));
    // return () => {
    //   active = false;
    // };
  }, [dispatch, destination]);

  // useEffect(() => {
  //   let active = true;
  //   if (!loading) {
  //     return undefined;
  //   }
  //
  //   (async () => {
  //     const response = await fetch('https://api.first.org/data/v1/countries');
  //     let countries = await response.json();
  //     countries = countries.data;
  //     // countries = Object.keys(countries).map((key) => countries[key]['country'])
  //     console.log('countries', countries);
  //     if (active) {
  //       setOptions(Object.keys(countries).map((key) => ({name: countries[key]['country']})));
  //     }
  //   })();
  //   return () => {
  //     active = false;
  //   };
  // }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <>
      {/*<div>{airports.map(a => a.country + " | ")}</div>*/}
      <Autocomplete
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        // getOptionSelected={(option, value) => (option.country.includes(value.country)
        // )}
        filterOptions={(options, state) => {
          const filter = state.inputValue;
          return options.filter(option => option.city !== filter);
        }}
        getOptionLabel={(option) => `${option.city} (${option.iataId})`}
        options={airports}
        loading={loading}
        onChange={(event, value: Airport) => {
          try {
            // iataId = value.match(/\((\w+)\)/)[1];
            value ? handleChange(value.iataId) : handleChange(null);
          } catch (err) {
            console.log(err);
          }
        }}
        onInputChange={(event, value) => {
          setDestination(value);
        }}
        renderOption={(props, option, state) => (
          <li {...props} style={{marginBottom: "7px"}} key={option.iataId}>
            <div>
              <div>
                <span className='font-weight-bold'>{option.city}</span>, {option.country}
              </div>
              <div>
                {option.name}
              </div>
            </div>
            <div className='ml-auto p-2 text-center'
                 style={{
                   backgroundColor: "#e33371", color: "white", borderRadius: "4px",
                   fontSize: ".65rem", fontWeight: 600
                 }}>
              {option.iataId}
            </div>
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            color='secondary'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {(loading && open) ? <CircularProgress color="inherit" size={20}/> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </>
  );
}

export default FlightAirportBar;
