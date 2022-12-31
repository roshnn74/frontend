import React from "react";
import img1 from "../assets/img/1_center.jpg";
import img2 from "../assets/img/1_center.png";

const MissionVision = () => {
  return (
    <>
      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="sec-title">
                  <h2>Mission</h2>
                </div>
                <div class="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  libero quisquam illum quos. Sint ipsum fuga aliquam laboriosam
                  ad autem veritatis eum, atque est suscipit ducimus cupiditate
                  debitis ex nobis numquam fugiat iusto distinctio itaque nulla
                  tempore modi. Perspiciatis, temporibus.
                </div>
                <div class="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  libero quisquam illum quos. Sint ipsum fuga aliquam laboriosam
                  ad autem veritatis eum, atque est suscipit ducimus cupiditate
                  debitis ex nobis numquam fugiat iusto distinctio itaque nulla
                  tempore modi. Perspiciatis, temporibus.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            dolores repellendus esse eos alias rem quidem vero unde cum
            eligendi! Adipisci nihil vitae nobis officia, repellat dolorum eum
            dignissimos harum.
          </div>
          <div class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            incidunt quibusdam cumque, quos amet, quod quia rerum explicabo
            dolore expedita voluptatibus mollitia. Placeat a eius vitae
            explicabo officia optio cupiditate.
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
