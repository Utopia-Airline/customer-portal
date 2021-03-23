import "./styles/App.scss";
import Header from './layout/Header';
import Footer from './layout/Footer';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import Flights from './components/flights/Flights';
import Home from './components/home/Home';
import {connect} from "react-redux";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import {useEffect} from "react";
import {getAuth} from "./store/auth/actions";
import BookingHistoryPage from "./pages/BookingHistoryPage";


const App = ({getSession}) => {
  useEffect(() => {
    getSession(process.env["REACT_APP_SESSION_URL"])
  });
  return (
    <>
      {
        <Router>
          <Header/>
          <div className='full-page'>
            <Switch>
              <Route exact={true} path="/home" component={Home}/>
              <Route path="/myaccount" component={ProfilePage}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/bookings" component={BookingHistoryPage}/>
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
      }
    </>
  )
}
const mapDispatchToProps = {
  getSession: getAuth
}
// export default App;
export default connect(null, mapDispatchToProps)(App);
