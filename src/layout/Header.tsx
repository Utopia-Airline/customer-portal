import React from 'react';
import {useHistory, Link} from 'react-router-dom'
import {connect} from "react-redux";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {logout} from "../store/auth/actions";
import User from "../models/User";
import LinearProgress from "../components/shared/LinearProgress";
import {Button} from '@material-ui/core';
import {makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 0,
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[200],
    '&:hover': {
      backgroundColor: grey[300],
    }
  },
}));

const NavButton = withStyles((theme: Theme) => ({
  root: {
    padding: "0 !important",
    color: `${theme.palette.getContrastText(grey[500])} !important`,
    backgroundColor: `${grey[200]} !important`,
    '&:hover': {
      backgroundColor: `${grey[300]} !important`,
    },
  },
}))(Button);

const Header = ({dispatch, isLoggedIn, user, hasErrors, loading}: UserProps) => {
  const classes = useStyles();
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
          {user && <Nav>
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
          <NavButton variant="contained"
                     type='button' disableElevation>
            <Link className='nav-link' to='/login'
                  style={{padding: "9px 17px"}}>Sign In</Link>
          </NavButton>}
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
