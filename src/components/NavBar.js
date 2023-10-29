import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';


function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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

    useEffect(() => {
      const currentPath = location.pathname.split("/");
      console.log(currentPath);
      const active = document.querySelector(".nav-active");
      if(!active){
        active.classList.remove("nav-active")
      }
      // active?.classList.remove("nav-active");
      let currentLink ;
      if(currentPath[1] === "") {
        currentLink = document.getElementById("home");
      }
      else {
        currentLink = document.getElementById(currentPath[1]);
      }
      currentLink.classList.add("nav-active");
    },[location])
    
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
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className="navbar-link nav-active" id="home">Home</Nav.Link>
            <Nav.Link href="/achievements" className="navbar-link" id="achievements">Achievements</Nav.Link>
            <Nav.Link href="/aboutUs" className="navbar-link" id="aboutUs">About Us</Nav.Link>
            <Nav.Link href="/community" className="navbar-link" id="community">Community</Nav.Link>
            <Nav.Link href="/formsAndGuidelines" className="navbar-link" id="formsAndGuidelines">Forms & Guidelines</Nav.Link>
            <Nav.Link href="/alumni" className="navbar-link" id="alumni">Alumni</Nav.Link>
            <Nav.Link href="/contactUs" className="navbar-link" id="contactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;