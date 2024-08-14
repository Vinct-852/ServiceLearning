import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Trashpicking.jpg";
import projImg2 from "../assets/img/EnvQuiz.jpg";
import projImg3 from "../assets/img/poster.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Trash-picking game",
      description: "Eductaional event",
      imgUrl: projImg1,
    },
    {
      title: "Environmental quiz",
      description: "Educational event",
      imgUrl: projImg2,
    },
    {
      title: "Environmentally-firendly posters design",
      description: "Educational event",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Educational team</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>other team 1</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>other team 2</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container> */}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
