import React from "react";
import { Link } from "react-router-dom";
import Foundation1 from "../assets/img/game.png";
const Foundation = () => {
  return (
    <>
    <section className="section-vision">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h3 className="main-heading">Foundation</h3>
            <div className="underline mx-auto"></div>
          </div>
          <div className="col-md-4 mb-4">
          <div class="box">
              <div class="boxContent">
                <h1 class="title">Overview</h1>
                <p class="desc">Innovation Garage is a 24x7 multidisciplinary maker space run for students, by the students of NIT Warangal. Since its inception in 2015, it has grown leaps and bounds on its mission to give students a platform to innovate and transform ideas into reality.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
          <div class="box">
              <div class="boxContent">
                <h1 class="title">Goal</h1>
                <p class="desc">Our main goal is to promote greater industry-academic interaction and enable the orientation of R&D activities of NITW to the needs of the industry. We encourage and incubate student projects by providing them with facilities, and financial assistance as per the norms of the Institute.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
          <div class="box">
              <div class="boxContent">
                <h1 class="title">Impact</h1>
                <p class="desc">IG houses several tech teams, working in various fields including machine learning, cyber security, robotics, the gaming world, electric vehicles, and pioneering design. Several successful start-ups have also been incubated at IG, which are run by our students as well as our alumni.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Foundation;
