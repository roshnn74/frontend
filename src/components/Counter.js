import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

const Counter = () => {
  return (
    <Container style={{marginTop:"50px",marginBottom:"50px"}}>
      <InView threshold={0.5}>
      {({ inView, ref, entry }) => (
      <div ref={ref} style={{display:"flex",justifyContent:"center"}}>
      <Row  className="align-items-center">
        <Col className="counter-container" >
          Startups Incubated:&nbsp;
          {(inView) && 
            <CountUp
              
              start={0}
              end={16}
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