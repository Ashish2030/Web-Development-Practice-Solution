import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Blog App</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link><Link to="/blogs"> Blogs</Link></Nav.Link>
            <Nav.Link><Link to="/blogs/new">New</Link></Nav.Link>
            </Nav>
        </Navbar>
        </>
        );
    }
}

export default NavigationBar;
