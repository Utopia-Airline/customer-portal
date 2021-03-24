import React from 'react';
import {Button} from "react-bootstrap";
import {useHistory, Link} from 'react-router-dom'
import {connect} from "react-redux";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {logout} from "../store/auth/actions";
import User from "../models/User";

const Header = ({dispatch, isLoggedIn, user, hasErrors, loading}: UserProps) => {
  const history = useHistory();

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Link className='navbar-brand' to="/home">Utopia</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to='/home'>Home</Link>
          <Link className="nav-link" to='/flights'>Flights</Link>

        </Nav>
        {user && <Nav>
          <NavDropdown title={user.username} alignRight id="collapsible-nav-dropdown">
            <NavDropdown.Item as={Link} to='/myAccount'>My Account</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/bookings'>My Bookings</NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                dispatch(logout(process.env["REACT_APP_SESSION_URL"])).then(res => {
                  if (res)
                    history.push('/home');
                  else
                    history.push('/home');
                })
              }}>Logout</NavDropdown.Item>
            <NavDropdown.Divider/>
            {/*<NavDropdown.Item onClick>logout</NavDropdown.Item>*/}
          </NavDropdown>
        </Nav>}
        {!user && <Button className="btn btn-secondary btn-sm" type="button">
          <Link className="nav-link" to='/login'>Login</Link>
        </Button>}
      </Navbar.Collapse>
    </Navbar>
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
  user: state.auth.user
});
export default connect(mapStateToProps)(Header);
