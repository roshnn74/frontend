import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';


function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if(window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
      }

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }, [])
    
    const handleOnClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <Link to="/" onClick={handleOnClick}>
            <img src={logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon" ></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
            <Nav.Link href="/achievements" className="navbar-link">Achievements</Nav.Link>
            <Nav.Link href="/aboutUs" className="navbar-link">About Us</Nav.Link>
            <Nav.Link href="/community" className="navbar-link">Community</Nav.Link>
            <Nav.Link href="/events" className="navbar-link">Events</Nav.Link>
            <Nav.Link href="/alumni" className="navbar-link">Alumni</Nav.Link>
            <Nav.Link href="/contactUs" className="navbar-link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;