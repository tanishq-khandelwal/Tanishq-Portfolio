import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tanishq Khandelwal </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently in my Final Year at D.Y.Patil College of Engineering.
            <br />
            I am pursing my Bachelors in Artificial Intelligence and Data Science
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

         
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
