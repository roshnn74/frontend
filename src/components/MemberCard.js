import React from 'react';
import { Col } from "react-bootstrap";
import 'animate.css';

const MemberCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} className="animate__animated animate__zoomInUp animate__delay-1s">
      <div className="proj-imgbx">
        <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default MemberCard;