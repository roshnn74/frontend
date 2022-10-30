import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={3}></Col>
        <Col className="counter-container" size={12} sm={8}>
          Startups Incubated:&nbsp;
          <CountUp
            start={0}
            end={800}
            duration={5}
          />
        </Col>
      </Row>
      
    </Container>
  )
}

export default Counter