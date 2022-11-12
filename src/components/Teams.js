import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import MemberCard from "./MemberCard";
import Startup from "./Startup";
import { genManagers, designTeamMembers, prTeamMembers, eccTeamMembers, sfTeamMembers, techTeamMembers, iTeamMembers } from '../constants';
import 'animate.css';

const Teams = () => { 
  return (
    <section className="project" id="teams">
      <Container>
        <Row mt={3}>
          <Col size={12}>
              <div>
                <h2 className="animate__animated animate__zoomInDown">Our Teams</h2>
                <p className="animate__animated animate__zoomInDown">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Row>
                        {
                            genManagers.map((members, index) => {
                                return (
                                    <MemberCard
                                        key={index}
                                        {...members}
                                    />
                                )
                            })
                        }
                    </Row>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Operation Wing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Executive Wing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Innovation Wing</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className="animate__animated animate__zoomIn">
                    <Tab.Pane eventKey="first">
                        <Tab.Container id="projects-tabs" defaultActiveKey="first-first">
                        <Nav variant="pills" className="nav-pills-first mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first-first">Design Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="first-second">PR Team</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp">
                            <Tab.Pane eventKey="first-first">
                                <p className="animate__animated animate__zoomIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero, soluta est ex alias quam natus autem. Delectus, tempora reiciendis minus recusandae deserunt commodi ratione voluptates doloribus? Ducimus sed iste atque molestias corrupti vitae nesciunt, quis cumque perferendis eveniet optio fugiat, ea magnam id excepturi deserunt consequuntur veniam repellat eius, earum dolore. Assumenda quia dicta expedita, veniam maiores voluptates animi excepturi in accusantium necessitatibus nemo hic perspiciatis soluta recusandae alias doloribus natus libero qui itaque cum at, ipsa tempora dolorum eaque. Libero neque temporibus tempore aliquam laboriosam expedita obcaecati mollitia esse, excepturi dolor pariatur eaque labore, ducimus, repudiandae porro. Autem.</p>
                                <Row>
                                {
                                    designTeamMembers.map((members, index) => {
                                        return (
                                            <MemberCard
                                                key={index}
                                                {...members}
                                            />
                                    )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="first-second">
                                <p className="animate__animated animate__zoomIn">The Public Relations Team is the face of the organization and acts as the bridge between Innovation Garage and the student community of NITW. We strive to promote entrepreneurship and innovation on the campus by engaging with the students who approach IG and providing them with the resources they require. We maintain the brand integrity and online presence of IG on campus by engaging in spontaneous & creative social media marketing and by being the Frontline desk of IG. The PR team focuses on brainstorming with the team and bringing up new ideas to the table along with curation of quality.</p>
                                <Row>
                                {
                                    prTeamMembers.map((members, index) => {
                                        return (
                                            <MemberCard
                                                key={index}
                                                {...members}
                                            />
                                    )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Tab.Container id="projects-tabs" defaultActiveKey="second-first">
                        <Nav variant="pills" className="nav-pills-second mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="second-first">ECC</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp">
                            <Tab.Pane eventKey="second-first">
                                <p className="animate__animated animate__zoomIn">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae perspiciatis saepe rem earum, dolorem harum consectetur! Facere, nihil ipsum a aut corrupti nobis provident et laboriosam amet enim facilis nostrum illo iusto suscipit dignissimos nesciunt quo incidunt doloremque placeat, assumenda illum iste vel cumque? Porro ut quam quisquam eaque cumque illo, quo amet sapiente labore ad voluptates consequatur quia iste velit nobis nemo nostrum adipisci vel dolor possimus omnis. Hic mollitia vel ipsum quisquam. Sapiente quo esse temporibus, omnis quaerat neque repudiandae asperiores doloribus at nostrum modi dolorum illo a minima error. Non eius blanditiis sapiente dolorum quod nobis.</p>
                                <Row>
                                {
                                    eccTeamMembers.map((members, index) => {
                                        return (
                                            <MemberCard
                                                key={index}
                                                {...members}
                                            />
                                    )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>          
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Tab.Container id="projects-tabs" defaultActiveKey="third-first"> 
                      <Nav variant="pills" className="nav-pills-third mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="third-first">Startup Facilities</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third-second">Tech Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third-third">I Team</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp">
                            <Tab.Pane eventKey="third-first">
                                <p className="animate__animated animate__zoomIn">Startup Facilities is one of the core departments of CII, which streamlines all its energies into empowering startups and startup culture in NIT Warangal. Emphasizing on startup culture, Startup Facilities makes sure to be a support to the founders through their startup journey, right from the ideation phase to investment phase to the scaling up phase. SF is the one stop agency to take care of everything and anything that regards to startups of students of NIT Warangal. Apart from empowering startups, Startup Facilities also take up the responsibility of networking and collaborating with external arenas to help bring the best of the resources to our budding entrepreneurs.</p>
                                <Row>
                                {
                                    sfTeamMembers.map((members, index) => {
                                        return (
                                            <MemberCard
                                                key={index}
                                                {...members}
                                            />
                                    )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third-second">
                                <p className="animate__animated animate__zoomIn">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quasi quae libero adipisci optio veniam, repellat debitis, iste facilis maxime nemo nesciunt quia voluptatum, sunt impedit saepe minus. Id earum velit repudiandae perferendis fuga, rem pariatur maiores sapiente mollitia, ex soluta culpa reiciendis quidem totam eum repellendus aliquam nemo unde fugiat ratione vel commodi, odio voluptates? Quia animi corporis quos laborum necessitatibus vel voluptates minus hic maiores omnis non ea nam excepturi fugit autem in illo quasi asperiores, vero, aliquid illum at unde dolorem ab. Ipsam aliquid maxime quibusdam reiciendis, iste placeat sunt ad labore adipisci mollitia fugiat saepe pariatur!</p>
                                <Row>
                                {
                                    techTeamMembers.map((members, index) => {
                                        return (
                                            <MemberCard
                                                key={index}
                                                {...members}
                                            />
                                    )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third-third">
                                <p className="animate__animated animate__zoomIn">I Team is the front face of the NIT Warangal Entrepreneurial community. Innovation Garage noticed that there was a lack in a team which completely channelizes their efforts just into building a startup collectively by helping each other. To fill this gap, we formed a team of a bunch of founders who have been making great progress with respect to their startup journey. Apart from building their startups, I Team also takes up the responsibility of improving the startup and product culture in NIT Warangal by collectively working with Startup Facilities. While SF takes care of the back end of the startup building framework, I Team takes care of the front end, i.e interacting with other teams and motivating them to build their startups along with I Team.</p>
                                <Row>
                                {
                                    iTeamMembers.map((members, index) => {
                                        return (
                                            <MemberCard
                                                key={index}
                                                {...members}
                                            />
                                    )
                                    })
                                }
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
      <p className="animate__animated animate__zoomInDown">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>     
      <Startup />
    </section>
  )
}

export default Teams;