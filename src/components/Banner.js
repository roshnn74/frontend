import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

// import headerImg from '../assets/img/facade.jpg';
// import headerImg from '../assets/img/startup.png';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Ideate", "Innovate", "Incubate"]; 
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 700;

    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      },delta)

      return () => { clearInterval(ticker); }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta/1.5);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }

    }

    const handleOnClick = () => {
        window.scrollTo({ top: 550, behavior: 'smooth' });
    }

  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={0} md={2} xl={2}>
                    {/* <img src={headerImg} alt="Header img" /> */}
                </Col>
                <Col xs={12} md={10} xl={10}>
                    <h1><span className="wrap">{text}|</span></h1>
                    <p>We are an incubation center that strives to promote innovations that have direct impact on society. We do this by providing a platform for young and passionate innovators to incubate their startup and assist them at every step. From assisting innovators in acquiring the skills required to make their idea a reality to Intellectual Property Rights Cell, we have it all.</p>
                    <button onClick={handleOnClick}>Explore <ArrowRightCircle size={25} /></button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner;