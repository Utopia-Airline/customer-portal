import React, {useState} from 'react';
import {addWeeks} from "date-fns";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import {TextField} from "@material-ui/core";

import {DateRangePicker, DateRange, DateRangeDelimiter, LocalizationProvider} from '@material-ui/pickers';
import {makeStyles, alpha} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
      color: "black"
    }
  }
});

const FlightDatePicker = ({handleChange}) => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  const classes = useStyles();

  function getWeeksAfter(date: Date, amount: number) {
    return date ? addWeeks(date, amount) : undefined;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        disablePast
        startText="Departing"
        endText="Returning"
        value={value}
        maxDate={getWeeksAfter(value[0], 4)}
        onChange={(newValue) => {
          setValue(newValue);
          handleChange(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField  {...startProps} className='flight-date' color='secondary' helperText={null}/>
            <TextField  {...endProps} className='flight-date' color='secondary' helperText={null}/>
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default FlightDatePicker;
