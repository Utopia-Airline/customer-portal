import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const Header = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/home">Utopia</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/flights">Flights</Nav.Link>
                    <NavDropdown  className="account justify-content-end" title="User">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/myAccount">My Account</NavDropdown.Item>
                        <NavDropdown.Item href="/myBookings">My Bookings</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </>
    )
}

export default Header;