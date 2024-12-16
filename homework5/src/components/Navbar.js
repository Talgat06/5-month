import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';

const Navbar = () => {
        return (
            <BootstrapNavbar>
                    <Nav className='mr-auto'>
                            <NavLink className='nav-link' to="/cats">Cats</NavLink>
                            <NavLink className='nav-link' to="/bitcoin">Bitcoin</NavLink>
                            <NavLink className='nav-link' to="/nasa">NASA</NavLink>
                            <NavLink className='nav-link' to="/dogs">Dogs</NavLink>
                            <NavLink className='nav-link' to="/weather">Weather</NavLink>
                    </Nav>
            </BootstrapNavbar>
        );
};

export default Navbar;
