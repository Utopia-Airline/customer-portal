import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import bookingsReducer from "./bookings/reducers";
import bookingReducer from "./booking/reducers";
import flightsReducer from "./flights/reducers";
import flightReducer from "./flight/reducers";
import authReducer from "./auth/reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  bookings: bookingsReducer,
  booking: bookingReducer,
  flights: flightsReducer,
  flight: flightReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log('Stored changed!', store.getState())
});
