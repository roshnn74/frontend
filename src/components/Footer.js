import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/cii.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap"}}>
          <Col size={12} sm={4}>
            <img style={{height:"180px",width:"250px"}} src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={4}>
            <span>ADDRESS</span>
            <p>CII HOD, National Institute of Technology Campus, Hanamkonda, Telangana 506004</p>
          </Col>
          <Col size={12} sm={2}>
          <span>CONTACT</span>
            <p>+91 70321 60133</p>
            <p>+91 93955 33228</p>
            <a href='mailto:hod_cii@nitw.ac.in'>hod_cii@nitw.ac.in</a>
            <br/>
            <a href='mailto:ig-nitw@student.nitw.ac.in'>ig-nitw@student.nitw.ac.in</a>
          </Col>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;