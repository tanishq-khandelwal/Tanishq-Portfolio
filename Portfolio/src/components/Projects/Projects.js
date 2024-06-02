import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medvault from "../../Assets/Projects/medvault.png";
import helmet from "../../Assets/Projects/helmet.png";
import newshub from "../../Assets/Projects/newshub.png";
import ignitelearning from "../../Assets/Projects/ignitelearning.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medvault}
              isBlog={false}
              title="Medvault"
              description="Medvault is an application for efficient management and accessibility of patient information and providing effective medical care.It comes with realtime appointmment booking,chats and automatic prescription generation"
              ghLink="https://github.com/tanishq-khandelwal/Fullstack-Medvault"
              demoLink="https://fullstack-medvault.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ignitelearning}
              isBlog={false}
              title="Ignite Learning"
              description=" Ignite Learning is a platform committed to making education accessible to everyone. Whether you're a student, professional, or a lifelong learner, we've got something for you! It has Progress tracking
              ,Seamless payment integration & Dashboard for Admins"
              ghLink="https://github.com/tanishq-khandelwal/Ignite-Learning"
              demoLink="https://ignitelearning.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newshub}
              isBlog={false}
              title="NewsHub"
              description=" I've created an interactive platform that aggregates news articles from various sources, giving users a seamless way to stay informed about current events, trends, and stories from around the world."
              ghLink="https://github.com/tanishq-khandelwal/NewsHub"
              demoLink="https://github.com/tanishq-khandelwal/NewsHub"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helmet}
              isBlog={false}
              title="Helmet Detection Using Yolo"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/tanishq-khandelwal/helmet_detection_AI"
              demoLink="https://github.com/tanishq-khandelwal/helmet_detection_AI"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
