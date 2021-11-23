import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

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
              imgPath={chatify}
              isBlog={false}
              title="IdiotBox"
              description="Love to watch Movies/Series? Love Social Media? IdiotBox combines the two."
              link="https://github.com/ishangogna"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="HelpMeJarvis"
              description="Unsure where to dine tonight? Let Jarvis help you out there."
              link="https://github.com/ishangogna"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AR Based Navigation"
              description="Android application that helps you figure out the path to your destination right on your camera."
              link="https://github.com/ishangogna"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
