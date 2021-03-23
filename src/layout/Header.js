import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Link className='navbar-brand' to="/home">Utopia</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to='/home'>Home</Link>
          <Link className="nav-link" to='/flights'>Flights</Link>

        </Nav>
        <Nav>
          <NavDropdown title="User" alignRight id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to='/login'>Login</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/myAccount'>My Account</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/bookings'>My Bookings</NavDropdown.Item>
            <NavDropdown.Divider/>
            {/*<NavDropdown.Item onClick>logout</NavDropdown.Item>*/}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
