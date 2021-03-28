import React, {useState} from 'react';
import {makeStyles, MuiThemeProvider, Theme, withStyles} from "@material-ui/core/styles";
import {useTheme} from "@emotion/react";
import {AppBar, Box, createMuiTheme, Tab, Tabs, Typography} from "@material-ui/core";

// <Tab label="Booking History" {...a11yProps(1)} />
function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    color: "white"
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a1a1a',
      light: '#1a1a1a',
      dark: '#1a1a1a',
      contrastText: '#1a1a1a',
    }
  },
});
const BookingTabPanel = ({loadBookings}) => {
  const [value, setValue] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" style={{backgroundColor: '#FFFFFF'}}>
        <Tabs value={value} onChange={handleChange}
              indicatorColor="primary">
          <Tab label="Active Bookings" onClick={() => {
            if (!isActive) {
              setIsActive(true);
              loadBookings(true);
            }
          }}/>
          <Tab label="Booking History" onClick={() => {
            if (isActive) {
              setIsActive(false);
              loadBookings(false);
            }
          }}/>
        </Tabs>
      </AppBar>
      {/*<TabPanel value={value} index={0}>*/}
      {/*  Active Bookings*/}
      {/*</TabPanel>*/}
      {/*<TabPanel value={value} index={1}>*/}
      {/*  Booking History*/}
      {/*</TabPanel>*/}
    </MuiThemeProvider>
  );
};

export default BookingTabPanel;
