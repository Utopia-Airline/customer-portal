import { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import FlightsListPage from "../../pages/FlightsListPage";

const Flights = () => {
  return (
    <div>
      <div className="FlightsListPage"><FlightsListPage/></div>
    </div>
  )
}
const mapStateToProps = state => ({
  flights: state.flights.flights,
  loading: state.flights.loading,
  hasErrors: state.flights.hasErrors
});
export default connect(mapStateToProps)(Flights);
