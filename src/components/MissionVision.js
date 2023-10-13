import React from "react";
import img1 from "../assets/img/1_center.jpg";
import img2 from "../assets/img/1_center.png";

const MissionVision = () => {
  return (
    <>
      <section class="about-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="sec-title">
                  <h2>Mission</h2>
                </div>
                <div class="text">
                  To provide the necessary infrastructure, mentorship, seed
                  funding, and resources & facilities to convert innovative
                  ideas into working prototypes, independent businesses, or
                  products in line with our entrepreneurial vision.
                </div>
              </div>
            </div>

            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column wow fadeInLeft">
                <figure class="image-1">
                  <a href="#" class="lightbox-image" data-fancybox="images">
                    <img title="IG" src={img1} alt="" />
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div class="sec-title2">
            <h2>Vision</h2>
          </div>
          <div class="text">
            To accelerate the development of the technology and startup culture
            among students and promote the entrepreneurial ecosystem at NIT
            Warangal.
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
