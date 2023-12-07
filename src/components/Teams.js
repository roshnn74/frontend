import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import LaunchIcon from "@mui/icons-material/Launch";
import MemberCard from "./MemberCard";
import Startup from "./Startup";
import {
  genManagers,
  designTeamMembers,
  prTeamMembers,
  eccTeamMembers,
  sfTeamMembers,
  techTeamMembers,
  iTeamMembers,
  boardMembers,
  outreachTeam,
} from "../constants";
import "animate.css";
import shirish from "../assets/img/prof/shirish.png";

const Teams = () => {
  return (
    <section className="project" id="teams">
      <Container>
        <Row mt={3}>
          <Col size={12}>
            <div>
              <h2>Board Members</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    className="proj-imgbx animate__animated animate__zoomInUp animate__delay-1s"
                    style={{ width: "350px" }}
                  >
                    <img
                      src={shirish}
                      style={{ height: "350px", width: "350px" }}
                      alt=""
                    />
                    <div className="proj-txtx">
                      <h4>Prof Shirish H Sonawane</h4>
                      <span>Head, CII</span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <a href="https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16328">
                          <LaunchIcon
                            fontSize="large"
                            sx={{ color: " #FFEA00" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </Row>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {boardMembers.map((members, index) => {
                    return (
                      <div
                        className="proj-imgbx animate__animated animate__zoomInUp animate__delay-1s"
                        style={{ width: "350px" }}
                      >
                        <img
                          src={members.imgUrl}
                          style={{ height: "350px", width: "350px" }}
                          alt=""
                        />
                        <div className="proj-txtx">
                          <h4>{members.name}</h4>
                          <span>{members.description}</span>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <a href={members.url}>
                              <LaunchIcon
                                fontSize="large"
                                sx={{ color: " #FFEA00" }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Row>
                <div style={{ marginTop: "50px" }}>
                  <h2>General Managers</h2>
                </div>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {genManagers.map((members, index) => {
                    return <MemberCard key={index} props={members} />;
                  })}
                </Row>
                <Nav
                  variant="pills"
                  className="nav-pills-first mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Executive Wing</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Innovation Wing</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content
                  id="slideInUp"
                  className="animate__animated animate__zoomIn"
                >
                  <Tab.Pane eventKey="first">
                    <Tab.Container
                      id="projects-tabs"
                      defaultActiveKey="second-first"
                    >
                      <Nav
                        variant="pills"
                        className="nav-pills-second mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="second-first">ECC</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp">
                        <Tab.Pane eventKey="second-first">
                          <p className="animate__animated animate__zoomIn">
                            The Event Conduction and Coordination team is an
                            integral part of Innovation Garage (IG). As the name
                            suggests, the key role of the ECC team is to ensure
                            that events organized by IG run smoothly and
                            efficiently.ECC will require you to be an
                            organizational freak, someone who owns the floor and
                            takes control of the team’s actions and at some
                            point leads the team. Anyway, where’s the fun in
                            working behind a desktop?
                          </p>
                          <Row
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {eccTeamMembers.map((members, index) => {
                              return <MemberCard key={index} props={members} />;
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Tab.Container
                      id="projects-tabs"
                      defaultActiveKey="third-first"
                    >
                      <Nav
                        variant="pills"
                        className="nav-pills-second mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="third-first">
                            Startup Facilities
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third-second">Tech Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third-third">
                            Design Team
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third-fourth">
                            Media Team
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third-fifth">
                            Outreach Team
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp">
                        <Tab.Pane eventKey="third-first">
                          <p className="animate__animated animate__zoomIn">
                            Startup Facilities is one of the core departments of
                            CII, which streamlines all its energies into
                            empowering startups and startup culture in NIT
                            Warangal. Emphasizing on startup culture, Startup
                            Facilities makes sure to be a support to the
                            founders through their startup journey, right from
                            the ideation phase to investment phase to the
                            scaling up phase. SF is the one stop agency to take
                            care of everything and anything that regards to
                            startups of students of NIT Warangal. Apart from
                            empowering startups, Startup Facilities also take up
                            the responsibility of networking and collaborating
                            with external arenas to help bring the best of the
                            resources to our budding entrepreneurs.
                          </p>
                          <Row
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {sfTeamMembers.map((members, index) => {
                              return <MemberCard key={index} props={members} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third-second">
                          <p className="animate__animated animate__zoomIn">
                            "IG Tech Team" at NIT Warangal is the epicenter of
                            technological innovation. We unite tech enthusiasts,
                            fostering innovation through projects, hackathons,
                            and workshops. Embrace cutting-edge tech,
                            collaborate with peers, and embark on an inspiring
                            journey of discovery and creation in the digital
                            age.
                          </p>
                          <Row
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {techTeamMembers.map((members, index) => {
                              return <MemberCard key={index} props={members} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third-third">
                          <p className="animate__animated animate__zoomIn">
                            The design team is the visual communicator of
                            Innovation Garage and plays a critical role in
                            shaping the visual and user experiences of the
                            projects and initiatives undertaken by the IG
                            itself. We create illustrative posters, websites,
                            designs, trailers, logos, T-shirts, and other
                            graphic designs. We utilize our creativity to bring
                            brand representation to our campus.
                          </p>
                          <Row
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {designTeamMembers.map((members, index) => {
                              return <MemberCard key={index} props={members} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third-fourth">
                          <p className="animate__animated animate__zoomIn">
                            The Media Team is the face of the organization and
                            acts as the bridge between Innovation Garage and the
                            student community of NITW. We strive to promote
                            entrepreneurship and innovation on the campus by
                            engaging with the students who approach IG and
                            providing them with the resources they require. We
                            maintain the brand integrity and online presence of
                            IG on campus by engaging in spontaneous & creative
                            social media marketing and by being the Frontline
                            desk of IG. The Media team focuses on brainstorming
                            with the team and bringing up new ideas to the table
                            along with curation of quality.
                          </p>
                          <Row
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {prTeamMembers.map((members, index) => {
                              return <MemberCard key={index} props={members} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third-fifth">
                          <p className="animate__animated animate__zoomIn">
                            Our Outreach Team builds community ties, engages
                            stakeholders, and amplifies our club's impact
                            through strategic partnerships and effective
                            communication.
                          </p>
                          <Row
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {outreachTeam.map((members, index) => {
                              return <MemberCard key={index} props={members} />;
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <h2 className="animate__animated animate__zoomInDown">Our Startups</h2>
      <p className="animate__animated animate__zoomInDown">
        Explore the Pioneering Startups Supported by Our Club for Inspiration
        and Entrepreneurial Insights.
      </p>
      <Startup />
    </section>
  );
};

export default Teams;
