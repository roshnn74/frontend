import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import skylark from '../assets/img/skylark.png';
import icon4 from '../assets/img/handshake.png';
import icon2 from '../assets/img/mentoring.png';
import icon3 from '../assets/img/clock.png';
import icon1 from '../assets/img/knowledge.png';

const Alumni = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  function reveal1() {
    var reveals1 = document.querySelectorAll(".reveal1");
    for (var i = 0; i < reveals1.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals1[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals1[i].classList.add("active");
      } else {
        reveals1[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", reveal1);
  reveal();
  reveal1();


  return (
    <section className="alumni" id="home">
      <Container>

        <h1>STARTUPS</h1>
        {/* skylark startup */}
        <Row className="align-items-center" >

           <Col xs={0} lg={7} sm={12}>
            <Card className="discription reveal1" style={{ backgroundColor: "#B85252" }} >
              <Card.Body>
                <Card.Text>
                  Skylark Labs develops continuously evolving and customizable threat
                  detection systems for enhanced physical security. Clients (CCTV or Drone companies)
                  can customize proprietary AI solutions at the time of deployment or continuously
                  evolve them if needed after deployment making them preferable to other comparable
                  market solutions.
                </Card.Text>
                <Button variant="light">LEARN MORE</Button>
              </Card.Body>
            </Card>

          </Col> 
          <Col xs={12} lg={5}>
            <Card className="aa reveal" style={{ backgroundColor: "#6EA9FF" }}>
              <Card.Body>
                <Card.Title className="startup-title">SKYLARK</Card.Title>
                <img className="startup-logo" src={skylark} alt="Header img" />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/*  */}
        <Row className="align-items-center" >
          <Col xs={12} lg={5} >
            <Card className="aa reveal1" style={{ backgroundColor: "#FF731D" }} >
              <Card.Body>
                <Card.Title className="startup-title">CUSMAT</Card.Title>
                <img className="startup-logo" src={skylark} alt="Header img" />
      
              </Card.Body>
            </Card>
          </Col>
          <Col xs={0} lg={0}>
            <Card className="discription reveal" style={{ backgroundColor: "#8B07DD" }}>
              <Card.Body>
                <Card.Text>
                  Enable organizations to Onboard, Assess, Train, Upskill, Plan Learning Tracks
                  for the employees/ workforce to maximize retention rates and on the Job
                  Performance by using our AR/VR, Cloud-based Learning Management system
                </Card.Text>
                <Button variant="light">LEARN MORE</Button>
              </Card.Body>
            </Card>
          </Col>


        </Row>
        {/*  */}
        <Row className="align-items-center" >
          <Col xs={0} lg={0}>
            <Card className="discription reveal1" style={{ backgroundColor: "#77AF38" }} >
              <Card.Body>
                <Card.Text>
                  Skylark Labs develops continuously evolving and customizable threat
                  detection systems for enhanced physical security. Clients (CCTV or Drone companies)
                  can customize proprietary AI solutions at the time of deployment or continuously
                  evolve them if needed after deployment making them preferable to other comparable
                  market solutions.
                </Card.Text>
                <Button variant="light">LEARN MORE</Button>
              </Card.Body>
            </Card>

          </Col>
          <Col xs={12} lg={5} >
            <Card className="aa reveal" style={{ backgroundColor: "#815B5B" }} >
              <Card.Body>
                <Card.Title className="startup-title">SKYLARK</Card.Title>
                <img className="startup-logo" src={skylark} alt="Header img" />
              </Card.Body>
            </Card>
          </Col>
        </Row>


        {/* contribute */}
        <h1>CONTRIBUTE  </h1>

        <div class="Row container1">
          <Col class="column" xs={0} lg={4} md={6}>
            <div class="box">
              <div class="boxContent">
                <i class="fa fa-microchip icon"></i>
                <img className="logo icon " src={icon1} />
                <h1 class="title">SUPPORT  STARTUP</h1>
                <p class="desc">Less unicorn and apart and credibly yikes touched much jeez that so reverent the by a as that kiwi fed wherever more aboard.</p>
                <Button variant="light">LEARN MORE</Button>
              </div>

            </div>
          </Col>
          <Col class="column" xs={0} lg={4} md={6}>
            <div class="box">
              <div class="boxContent">
                <i class="fa fa-podcast icon"></i>
                <img className="logo icon" src={icon2} />
                <h1 class="title">BECOME A MENTOR</h1>
                <p class="desc">Less unicorn and apart and credibly yikes touched much jeez that so reverent the by a as that kiwi fed wherever more aboard.</p>
                <Button variant="light">CONTACT US</Button>
              </div>
              <a href="#"></a>
            </div>
          </Col>
          <Col class="column" xs={0} lg={4} md={6}>
            <div class="box">
              <div class="boxContent">
                <i class="fa fa-podcast icon"></i>
                <img className="logo icon" src={icon3} />
                <h1 class="title">DONATE</h1>
                <p class="desc">Less unicorn and apart and credibly yikes touched much jeez that so reverent the by a as that kiwi fed wherever more aboard.</p>
                <Button variant="light">LEARN MORE</Button>
              </div>
              <a href="#"></a>
            </div>
          </Col>

          <Col class="column" xs={0} lg={6} md={6}>
            <div class="box">
              <div class="boxContent">
                <i class="fa fa-podcast icon"></i>
                <img className="logo icon" src={icon4} />
                <h1 class="title">PARTNER WITH US</h1>
                <p class="desc">Less unicorn and apart and credibly yikes touched much jeez that so reverent the by a as that kiwi fed wherever more aboard.</p>
                <Button variant="light">CONNECT</Button>
              </div>
              <a href="#"></a>
            </div>
          </Col>


        </div>


      </Container>
    </section>
  )
}

export default Alumni 