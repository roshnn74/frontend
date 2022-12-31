import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

const Counter = () => {
  return (
    <Container>
      <InView threshold={0.5}>
      {({ inView, ref, entry }) => (
      <div ref={ref}>
      <Row className="align-items-center">
        <Col size={12} sm={3}></Col>
        <Col className="counter-container" size={12} sm={8}>
          Startups Incubated:&nbsp;
          {(inView) && 
            <CountUp
              
              start={0}
              end={800}
              duration={5}
            />}
        </Col>
      </Row> 
      </div>
      )}
      </InView>
    </Container>
  )
}

export default Counter