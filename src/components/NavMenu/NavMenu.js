import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './navMenuStyle.module.css';

export default function NavMenu() {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink
                        to='/'
                        exact
                        activeClassName={styles.activePage}
                        className={styles.navLink}
                    >
                        Home
                     </NavLink>

                    <NavLink
                        to='/about'
                        exact
                        activeClassName={styles.activePage}
                        className={styles.navLink}
                    >
                        About
                       </NavLink>
                    <NavLink
                        to='/contact'
                        exact
                        activeStyle={{ color: 'red' }}
                        className={styles.navLink}
                    >
                        Contact
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}