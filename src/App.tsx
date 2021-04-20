import "./styles/App.scss";
import Header from './layout/Header';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import UpdatePage from "./pages/UpdatePage";
import {useEffect} from "react";
import {getAuth} from "./store/auth/actions";
import BookingPage from "./pages/BookingPage";
import BookingGuestPage from "./pages/BookingGuestPage";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import FlightSearchPage from "./pages/FlightSearchPage";
import FlightsListPage from "./pages/FlightsListPage";
import BookingCreationPage from "./pages/BookingCreationPage";

const App = ({getSession, isLoggedIn, loading, numPassengers}) => {
  useEffect(() => {
    console.log('loading', loading);
    getSession(process.env["REACT_APP_SESSION_URL"])
  }, []);
  return (
    <Router>
      <Header/>
      <div className='full-page'>
        <Switch>
          <Route exact={true} path="/bookings/new" component={BookingCreationPage}>
            {numPassengers > 0 ? <BookingCreationPage/> : <Redirect push to='/home'/>}
          </Route>
          <Route exact={true} path="/bookings/guest" component={BookingGuestPage}/>
          <Route exact={true} path="/home" component={HomePage}/>
          <Route path="/myaccount/update" component={UpdatePage}/>
          {!loading &&
          <Route exact={true} path="/bookings">
            {isLoggedIn ? <BookingPage/> : <Redirect push to='/login'/>}
          </Route>
          }
          {!loading &&
          <Route path="/myaccount">
            {isLoggedIn ? <ProfilePage/> : <Redirect push to='/login'/>}
          </Route>
          }
          <Route path="/login">
            {!isLoggedIn ? <LoginPage/> : <Redirect to='/myaccount'/>}
          </Route>
          <Route path="/signup" component={SignupPage}/>
          <Route exact={true} path="/"> <Redirect to="/home"/> </Route>
          <Route exact={true} path="/flights/search" component={FlightSearchPage}/>
          <Route exact={true} path="/flights" component={FlightsListPage}/>
          {/*
              <Route path="/signup" component={Signup} />
              <Route exact={true} path="/bookings" component={Bookings} />
              <Route path='bookings/add' component={BookingAdd} />
              <Route path='bookings/:id' component={BookingById} />
              <Route exact={true} path='users' component={users} />
              <Route path='users/add' component={UserCreation} />
              <Route path='users/:id' component={UserById} />  */}
        </Switch>
      </div>
      <Footer/>
    </Router>
  )
};
const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    loading: state.auth.loading,
    numPassengers: state.flights.passengers
  }
);
const mapDispatchToProps = {
  getSession: getAuth
}
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
