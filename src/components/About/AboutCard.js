import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple"><strong>Ishan Gogna,</strong> </span>
            <br />
            pursuing Masters in Computer Science at  
            <span className="purple"> <strong>New York University. </strong></span>
            <br />
            <br />
            I build meaningful software to try and make this world a tad bit easier!
            <br />
            <br />
          </p>
          

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "I do not fear computers. I fear lack of them."{" "}
          </p>
          <footer className="blockquote-footer">Isaac Asimov</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
