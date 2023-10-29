import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import { guidelines } from "../constants";

function Guideline() {
  return (
    <section className="guidelines" id="formsAndGuidelines">
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "35px",
          }}
        >
          <h1>Guidelines</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
        {
        guidelines.map((item,index)=>{
          return(
          <div className="guidelinesBox"
          >
          <p style={{padding:"10px",textJustify:"inter-character"}}>{item.title}</p>
            <a href={item.url}><button>Check Out</button></a>
          </div>
        )
        })
        }
        </div>
      </Container>
    </section>
  );
}

export default Guideline;
