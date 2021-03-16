import "./styles/App.scss";
import Header from './layout/Header';
import Footer from './layout/Footer';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import Flights from './components/flights/Flights';
import Home from './components/home/Home';
import {Provider} from "react-redux";
import {store} from "./store";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";


const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      {
        <Router>
          <Switch>
            <Route exact={true} path="/home" component={Home}/>
            <Route path="/myaccount" component={ProfilePage}/>
            <Route path="/login" component={LoginPage}/>
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
        </Router>
      }
      {/* <Link to="/" >Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Booking' >Booking</Link>
        <Link to='/Flights' >Flights</Link>
        <Link to='/' ></Link>
        <Link to='/' >Home</Link> */}
        <Footer/>
    </Provider>
  )
}
export default App;
