import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import { forms } from "../constants";
import logo from "../assets/img/logo.jpeg";

function Forms() {
  return (
    <section className="forms" id="formsAndGuidelines">
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <h1>Forms</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent:"center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {forms.map((item, index) => {
            return (
              <div className="guidelinesBox"
          >
          <div style={{width:"150px",height:"150px"}}>
          <img src={logo} alt=""/>
          </div>
          <p style={{padding:"10px",textJustify:"inter-character"}}>{item.title}</p>
            <a href={item.url}><button>Fill Up</button></a>
          </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Forms;
