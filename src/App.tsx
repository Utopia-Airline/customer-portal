import "./styles/App.scss";
import Header from './layout/Header';
import Footer from './layout/Footer';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import Flights from './components/flights/Flights';
import Home from './components/home/Home';
import {connect} from "react-redux";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import UpdatePage from "./pages/UpdatePage";
import {useEffect} from "react";
import {getAuth} from "./store/auth/actions";
import BookingPage from "./pages/BookingPage";
import BookingGuestPage from "./pages/BookingGuestPage";


const App = ({getSession, isLoggedIn, loading}) => {
  useEffect(() => {
    console.log('loading', loading);
    getSession(process.env["REACT_APP_SESSION_URL"])
  }, []);
  return (
    <Router>
      <Header/>
      <div className='full-page'>
        <Switch>
          <Route exact={true} path="/bookings/guest" component={BookingGuestPage}/>
          <Route exact={true} path="/home" component={Home}/>
          <Route path="/myaccount/update" component={UpdatePage}/>
          {!loading &&
          <Route path="/bookings">
            {isLoggedIn ? <BookingPage/> : <Redirect to='/login'/>}
          </Route>
          }
          {!loading &&
          <Route path="/myaccount">
            {isLoggedIn ? <ProfilePage/> : <Redirect to='/login'/>}
          </Route>
          }
          <Route path="/login">
            {!isLoggedIn ? <LoginPage/> : <Redirect to='/myaccount'/>}
          </Route>
          <Route path="/signup" component={SignupPage}/>
          <Route exact={true} path="/"> <Redirect to="/home"/> </Route>
          <Route exact={true} path="/flights" component={Flights}/>
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
    loading: state.auth.loading
  }
);
const mapDispatchToProps = {
  getSession: getAuth
}
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
