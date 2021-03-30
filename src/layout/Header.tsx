import React from 'react';
import {Button} from "react-bootstrap";
import {useHistory, Link} from 'react-router-dom'
import {connect} from "react-redux";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {logout} from "../store/auth/actions";
import User from "../models/User";
import LinearProgress from "../components/shared/LinearProgress";

const Header = ({dispatch, isLoggedIn, user, hasErrors, loading}: UserProps) => {
  const history = useHistory();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top'>
        <Link className='navbar-brand' to="/home">Utopia</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to='/home'>Home</Link>
            <Link className="nav-link" to='/flights'>Top flights</Link>
            <Link className="nav-link" to='/flights'>My trips</Link>
            <Link className="nav-link" to='/flights'>Flight status</Link>
          </Nav>
          {user && <Nav >
            <NavDropdown title={user.username} alignRight id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/myAccount'>My Account</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/bookings'>My Bookings</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item
                onClick={() => {
                  dispatch(logout(process.env["REACT_APP_SESSION_URL"])).then(res => {
                    if (res)
                      history.push('/home');
                    else
                      history.push('/home');
                  })
                }}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>}
          {!user &&
          <Button variant="secondary" size='sm' type="button">
            <Link className="nav-link" to='/login'>Sign In</Link>
          </Button>}
        </Navbar.Collapse>
      </Navbar>
      {loading && <LinearProgress/>}
    </>
  )
}

interface UserProps {
  dispatch?: Function;
  loading?: boolean;
  user?: User;
  hasErrors?: boolean;
  isLoggedIn: boolean;
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
  loading: state.auth.loading,
  hasErrors: state.auth.hasErrors
});
export default connect(mapStateToProps)(Header);
