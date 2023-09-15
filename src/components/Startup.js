import React from 'react';
import Carousel from 'react-multi-carousel';
import { InView } from 'react-intersection-observer';

import 'react-multi-carousel/lib/styles.css';
import 'animate.css';

import Img1 from "../assets/img/ophyellowai.png";
import Img2 from "../assets/img/ophlysto.png";
import Img3 from "../assets/img/ophskylark.png";
import Img4 from "../assets/img/ophalmabase.png";
import Img5 from "../assets/img/ophbugclaim.png";

const Startup = () => {
      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };
  return (
    <InView threshold={0.2}>
      {({ inView, ref, entry }) => ( 
      <div ref={ref}>
      {(inView) &&   
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        centerMode={true}
        focusOnSelect={true}
        autoPlaySpeed={4000}
        transitionDuration={500}
        containerClass="carousel-container"
      >
        <div className="slide">
          <img draggable={false} src={Img1} alt="Yellow AI" />
        </div>
        <div className="slide">
          <img draggable={false} src={Img2} alt="Lysto" />
        </div>
        <div className="slide">
          <img draggable={false} src={Img3} alt="Skylark" />
        </div>
        <div className="slide">
          <img draggable={false} src={Img4} alt="AlmaBase" />
        </div>
        <div className="slide">
          <img draggable={false} src={Img5} alt="BugClaim" />
        </div>
      </Carousel>
      }
      </div>
      )}
    </InView>
  )
}

export default Startup