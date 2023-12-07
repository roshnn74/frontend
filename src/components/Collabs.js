import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee from "react-marquee-slider";
import { nanoid } from "nanoid";

import Img1 from "../assets/img/almabase.png";
import Img2 from "../assets/img/aufenbach.jpeg";
import Img3 from "../assets/img/cusmat.png";
import Img4 from "../assets/img/epickbikes.png";
import Img5 from "../assets/img/facebook.png";
import Img6 from "../assets/img/flowrhex.png";
import Img7 from "../assets/img/game.png";
import Img8 from "../assets/img/girlscript.png";
import Img9 from "../assets/img/google.png";
import Img10 from "../assets/img/ISB.png";
import Img11 from "../assets/img/llfnd.png";
import Img12 from "../assets/img/ms.png";
import Img13 from "../assets/img/servicenow.png";
import Img14 from "../assets/img/skylark.png";
import Img15 from "../assets/img/ti.png";
import Img16 from "../assets/img/yellowai.png";

const Photo = styled.img`
  width: ${(props) => props.scale * 350}px;
  height: ${(props) => props.scale * 200}px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  
  margin-left: ${(props) => (props.offset === "true" ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${(props) => (props.offset === "true" ? props.scale * 80 : 0)}px;
`;

const photos = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
  ];

const Collabs = () => {
    const [key, setKey] = useState(nanoid());

    useEffect(() => {
        setKey(nanoid());
    }, []);

    let scale = 0.4;
    return (
        <div className="collab">
            <h1>Past Collaborations: </h1>

            <div style={{ height: scale * 60 }} />

            <div style={{ height: scale * 200 }}>
                <Marquee key={key} velocity={150}>
                    {times(8, Number).map((id) => (
                        <Photo src={photos[id]} alt="" key={`marquee-${id}`} scale={scale} />
                    ))}
                </Marquee>
            </div>

            <div style={{ height: scale * 60 }} />

            <div style={{ height: scale * 200 }}>
                <Marquee key={key} velocity={140}>
                    {times(8, Number).map((id) => (
                        <Photo
                            src={photos[id + 8]}
                            alt=""
                            key={`marquee-${id + 8}`}
                            offset="true"
                            scale={scale}
                        />
                    ))}
                </Marquee>
            </div>

            <div style={{ height: scale * 60 }} />
        </div>
    )
}

export default Collabs;