import React, {useEffect} from 'react';
import {Autocomplete, Box} from "@material-ui/core";
import {CircularProgress, TextField} from "@material-ui/core";

const AutocompleteBar = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('https://api.first.org/data/v1/countries');
      let countries = await response.json();
      countries = countries.data;
      // countries = Object.keys(countries).map((key) => countries[key]['country'])
      console.log('countries', countries);
      if (active) {
        setOptions(Object.keys(countries).map((key) =>({name: countries[key]['country']})));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  // {/*<Autocomplete*/}
  // {/*  id="combo-box-demo"*/}
  // {/*  options={top100Films}*/}
  // {/*  getOptionLabel={(option) => option.title}*/}
  // {/*  renderInput={(params) =>*/}
  // {/*    <TextField {...params} label="Destination" variant="outlined"*/}
  // {/*               color='secondary' required/>}*/}
  // {/*/>*/}
  return (
    <Autocomplete
      id="auto-complete-bar"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Destination"
          variant="outlined"
          color='secondary'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default AutocompleteBar;
