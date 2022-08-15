import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown,
  ButtonGroup,
  DropdownButton,
} from "react-bootstrap";
import logo from "../Assets/images/logo.png";
import MHAlogo from "../Assets/images/mha-logo-02.png";
import { NavLink, Link } from "react-router-dom";

// import { useDispatch, useSelector } from 'react-redux'
// import { getOurWorkData } from '../Redux/ourWork'

const NavBar = ({ pass, passNews, passPrograms }) => {
  const [windosYmenue, setWindosYmenue] = useState(0);
  window.addEventListener("resize", () => {
    setWindosYmenue(window.innerWidth);
  });
  useEffect(() => {
    setWindosYmenue(window.innerWidth);
  }, []);

  const handleTopColor = () => {
    const emailPhone = document.getElementById("email-phone");
    emailPhone.style.transition = "all .5s ease-in-out";
    emailPhone.style.backgroundColor = "#2b7634";
  };

  const handleTopColorBack = () => {
    const emailPhone = document.getElementById("email-phone");
    emailPhone.style.transition = "all .5s ease-in-out";
    emailPhone.style.backgroundColor = "#2b3990";
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const showDropdown = (e) => {
    setShow(true);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const showDropdown1 = (e) => {
    setShow1(true);
  };
  const hideDropdown1 = (e) => {
    setShow1(false);
  };

  const showDropdown2 = (e) => {
    setShow2(true);
  };
  const hideDropdown2 = (e) => {
    setShow2(false);
  };

  // const dispatch = useDispatch()

  // const getWorkData = useSelector(state => state.getOurWorkData)
  // const { loading, data, error } = getWorkData

  // useEffect(() => {
  //     dispatch(getOurWorkData())
  // }, [dispatch])

  return (
    <>
      {/* {data && ( */}
      <div className="rahma-nav">
        <div className="email-phone" id="email-phone">
          <div className="container">
            <a href="mailto:info@rahmaww.org" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i> info@rahmaww.org
            </a>
            <a href="tel:+2485663111" rel="noopener noreferrer">
              <i className="fa-solid fa-phone-volume"></i> +(248) 566 3111
            </a>
          </div>
        </div>

        <div className="prand-links">
          <div className="container">
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#">
                <NavLink to="/home-page">
                  <img src={logo} alt="Rahma Logo" />
                </NavLink>
              </Navbar.Brand>
              <div className="donate-btn">
                <a
                  href="https://rahmaww.donorsupport.co/-/XGDAEUZV"
                  onMouseOver={() => handleTopColor()}
                  className="donateBtnLink"
                  onMouseLeave={() => handleTopColorBack()}
                >
                  Donate
                </a>
                <a
                  href="https://www.mhanational.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={MHAlogo} alt="MHA Logo" />
                </a>
              </div>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link>
                    {" "}
                    <NavLink to="/home-page" style={{ textDecoration: "none" }}>
                      Home
                    </NavLink>
                  </Nav.Link>
                  {/* <Nav.Link> <NavLink to='/our-work' style={{ textDecoration: 'none' }} className={pass}>Our Work</NavLink></Nav.Link> */}
                  {windosYmenue >= 992 ? (
                    <Dropdown
                      className="dropdownMenu"
                      show={show1}
                      onMouseOver={showDropdown1}
                      onMouseLeave={hideDropdown1}
                    >
                      <Dropdown.Toggle
                        style={{ padding: "8px" }}
                        className="dropdownmenuourwork"
                      >
                        <NavLink
                          to="/our-work"
                          style={{ textDecoration: "none", cursor: "pointer" }}
                          className={pass}
                        >
                          Our Work
                        </NavLink>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        onMouseOver={showDropdown1}
                        onMouseLeave={hideDropdown1}
                      >
                        <Dropdown.Item id="dropdown-item">
                          <NavLink
                            to="/services/10"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Non-Food Items
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item id="dropdown-item">
                          <NavLink
                            to="/services/9"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            W.A.S.H
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item id="dropdown-item">
                          <NavLink
                            to="/services/8"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Education
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item id="dropdown-item">
                          <NavLink
                            to="/services/7"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Health
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item id="dropdown-item">
                          <NavLink
                            to="/services/1"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Environment
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item id="dropdown-item">
                          <NavLink
                            to="/services/2"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Protection
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item id="dropdown-item">
                          <NavLink
                            to="/services/3"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Shelter
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item id="dropdown-item">
                          <NavLink
                            to="/services/4"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Nutrition
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item id="dropdown-item">
                          <NavLink
                            to="/services/6"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Food Security
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item
                          id="dropdown-item"
                          style={{ padding: "0rem 0rem" }}
                        >
                          <NavLink
                            to="/their-stories"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Their Stories
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        {["end"].map((direction) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            className="dropend-menu"
                            drop={direction}
                            variant="secondary"
                            title="Seasonal Campaigns"
                            show={show2}
                            onMouseOver={showDropdown2}
                            onMouseLeave={hideDropdown2}
                          >
                            <Dropdown.Item eventKey="1">
                              <NavLink
                                to="/ramadan"
                                style={{
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  display: "block",
                                }}
                                id="RightALinkStyle"
                              >
                                Ramadan 2022
                              </NavLink>
                            </Dropdown.Item>
                            <hr />
                            <Dropdown.Item eventKey="1" id="RightALinkStylemar">
                              <NavLink
                                to="/udhia"
                                style={{
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  paddingLeft: "16px !important",
                                  display: "block",
                                }}
                                id="RightALinkStyle"
                              >
                                Udhia
                              </NavLink>
                            </Dropdown.Item>
                          </DropdownButton>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <Dropdown as={ButtonGroup}>
                      <Button variant="info">
                        <Link
                          to="/our-work"
                          style={{ textDecoration: "none" }}
                          className={pass}
                        >
                          Our Work
                        </Link>
                      </Button>
                      <Dropdown.Toggle
                        split
                        variant="success"
                        id="dropdown-custom-2"
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item
                          id="dropdown-item"
                          style={{ padding: "0rem 0rem" }}
                        >
                          <NavLink
                            to="/services/10"
                            style={{
                              textDecoration: "none",
                              fontSize: "14px",
                              width: "100%",
                              height: "100%",
                            }}
                          >
                            Non-Food Items
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="dropdown-item"
                          style={{ padding: "0rem 0rem" }}
                        >
                          <NavLink
                            to="/services/9"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            W.A.S.H
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="dropdown-item"
                          style={{ padding: "0rem 0rem" }}
                        >
                          <NavLink
                            to="/services/8"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Education
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="dropdown-item"
                          style={{ padding: "0rem 0rem" }}
                        >
                          <NavLink
                            to="/services/7"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Health
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="dropdown-item"
                          style={{ padding: "0rem 0rem" }}
                        >
                          <NavLink
                            to="/services/1"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Environment
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="dropdown-item"
                          style={{ padding: "0rem 0rem" }}
                        >
                          <NavLink
                            to="/services/2"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Protection
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="dropdown-item"
                          style={{ padding: "0rem 0rem" }}
                        >
                          <NavLink
                            to="/services/3"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Shelter
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="dropdown-item"
                          style={{ padding: "0rem 0rem" }}
                        >
                          <NavLink
                            to="/services/4"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Nutrition
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="dropdown-item"
                          style={{ padding: "0rem 0rem" }}
                        >
                          <NavLink
                            to="/services/6"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Food Security
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item
                          id="dropdown-item"
                          style={{ padding: "0rem 0rem" }}
                        >
                          <NavLink
                            to="/their-stories"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Their Stories
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">
                          <NavLink
                            to="/ramadan"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Ramadan 2022
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">
                          <NavLink
                            to="/udhia"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Udhia
                          </NavLink>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                  <Nav.Link>
                    {" "}
                    <NavLink
                      to="/where-we-work"
                      style={{ textDecoration: "none" }}
                    >
                      Where We Work
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    {" "}
                    <NavLink
                      to="/gift"
                      style={{ textDecoration: "none" }}
                    >
                      Gift a Donation
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    {" "}
                    <NavLink
                      to="/News"
                      style={{ textDecoration: "none" }}
                      className={passNews}
                    >
                      News
                    </NavLink>{" "}
                  </Nav.Link>
                  {/* <Nav.Link> <NavLink to='/ramadan' style={{ textDecoration: 'none' }}>Ramadan</NavLink> </Nav.Link> */}
                  {windosYmenue >= 992 ? (
                    <Dropdown
                      className="dropdownMenu"
                      show={show}
                      onMouseOver={showDropdown}
                      onMouseLeave={hideDropdown}
                    >
                      <Dropdown.Toggle
                        style={{ padding: "8px" }}
                        className="dropdownmenuprograms"
                      >
                        <NavLink
                          to="/programs"
                          style={{ textDecoration: "none", cursor: "pointer" }}
                          className={passPrograms}
                        >
                          Programs
                        </NavLink>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        onMouseOver={showDropdown}
                        onMouseLeave={hideDropdown}
                      >
                        <Dropdown.Item target="_blank" id="dropdown-item">
                          <NavLink
                            to="/academy"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Rahma International Academy
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item
                          href="https://rahmaworldwide.givecloud.co/sponsorship"
                          target="_blank"
                          id="dropdown-item"
                          style={{ padding: "5px", cursor: "pointer" }}
                        >
                          Orphan Sponsorship
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item
                          target="_blank"
                          id="dropdown-item"
                          style={{ cursor: "pointer" }}
                        >
                          <NavLink
                            to="/mental-health"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Mental Health Programs
                          </NavLink>
                        </Dropdown.Item>
                        <hr style={{ margin: "0" }} />
                        <Dropdown.Item
                          target="_blank"
                          id="dropdown-item"
                          style={{ cursor: "pointer" }}
                        >
                          <NavLink
                            to="/covid_19"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            COVID-19 Efforts & Resources
                          </NavLink>
                        </Dropdown.Item>
                        {/* <hr style={{margin: '0'}}/>
                                                <Dropdown.Item href="https://mhanational.org/programs" id='dropdown-item'  style={{padding: '5px'}}>Meet Our Mental Health</Dropdown.Item>
                                                <hr style={{margin: '0'}}/>
                                                <Dropdown.Item href="https://mhanational.org/programs" id='dropdown-item'  style={{padding: '5px'}}>COVID-19 Efforts & Resources</Dropdown.Item>
                                                <hr style={{margin: '0'}}/>
                                                <Dropdown.Item href="https://mhanational.org/mentalhealthfacts" target='_blank' id='dropdown-item'  style={{padding: '5px'}}>Quick Facts & Statistics</Dropdown.Item>
                                                <hr style={{margin: '0'}}/>
                                                <Dropdown.Item href="https://mhanational.org/staying-mentally-healthy"  target='_blank' id='dropdown-item'  style={{padding: '5px'}}>Staying Mentally Healthy</Dropdown.Item>
                                                <hr style={{margin: '0'}}/>
                                                <Dropdown.Item href="https://mhanational.org/recovery-support" target='_blank' id='dropdown-item'  style={{padding: '5px'}}>Recovery & Support</Dropdown.Item>
                                                <hr style={{margin: '0'}}/>
                                                <Dropdown.Item href="https://mhanational.org/self-help-tools"  target='_blank' id='dropdown-item'  style={{padding: '5px'}}>Mental Health Tools</Dropdown.Item>
                                                <hr style={{margin: '0'}}/>
                                                <Dropdown.Item href="https://mhanational.org/b4stage4-philosophy"  target='_blank' id='dropdown-item'  style={{padding: '5px'}}>B4 Stage 4 Philosophy</Dropdown.Item> */}
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <Dropdown as={ButtonGroup}>
                      <Button variant="info">
                        <Link
                          to="/programs"
                          style={{ textDecoration: "none" }}
                          className={passPrograms}
                        >
                          Programs
                        </Link>
                      </Button>
                      <Dropdown.Toggle
                        split
                        variant="success"
                        id="dropdown-custom-2"
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item target="_blank" id="dropdown-item">
                          <NavLink
                            to="/academy"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Rahma International Academy
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="https://rahmaworldwide.givecloud.co/sponsorship"
                          target="_blank"
                          id="dropdown-item"
                        >
                          Orphan Sponsorship
                        </Dropdown.Item>
                        <Dropdown.Item target="_blank" id="dropdown-item">
                          <NavLink
                            to="/mental-health"
                            style={{ textDecoration: "none" }}
                          >
                            Mental Health Programs
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item
                          target="_blank"
                          id="dropdown-item"
                          style={{ cursor: "pointer" }}
                        >
                          <NavLink
                            to="/covid_19"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            COVID-19 Efforts & Resources
                          </NavLink>
                        </Dropdown.Item>
                        {/* <Dropdown.Item href="https://www.mhanational.org/" id='dropdown-item'>Meet Our Mental Health</Dropdown.Item>
                                            <Dropdown.Item href="https://www.mhanational.org/" id='dropdown-item'>COVID-19 Efforts & Resources</Dropdown.Item>
                                                <Dropdown.Item href="https://mhanational.org/mentalhealthfacts" target='_blank' id='dropdown-item'>Quick Facts & Statistics</Dropdown.Item>
                                                <Dropdown.Item href="https://mhanational.org/staying-mentally-healthy"  target='_blank' id='dropdown-item'>Staying Mentally Healthy</Dropdown.Item>
                                                <Dropdown.Item href="https://mhanational.org/recovery-support" target='_blank' id='dropdown-item'>Recovery & Support</Dropdown.Item>
                                                <Dropdown.Item href="https://mhanational.org/self-help-tools"  target='_blank' id='dropdown-item'>Mental Health Tools</Dropdown.Item>
                                                <Dropdown.Item href="https://mhanational.org/b4stage4-philosophy"  target='_blank' id='dropdown-item'>B4 Stage 4 Philosophy</Dropdown.Item> */}
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                  {/* <Nav.Link> <NavLink to='/programs' style={{ textDecoration: 'none' }}>Programs</NavLink> </Nav.Link> */}
                  <Nav.Link>
                    {" "}
                    <NavLink to="/about-us" style={{ textDecoration: "none" }}>
                      About Us
                    </NavLink>{" "}
                  </Nav.Link>
                  {/* <Nav.Link>
                    {" "}
                    <NavLink
                      to="/success-stories"
                      style={{ textDecoration: "none" }}
                    >
                      Success stories
                    </NavLink>
                  </Nav.Link> */}
                  <Nav.Link>
                    {" "}
                    <NavLink to="/contact" style={{ textDecoration: "none" }}>
                      Contact
                    </NavLink>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default NavBar;

// {windosYmenue >= 992 ?
//     <Dropdown className='dropdownMenu'
//         show={show}
//         onMouseOver={showDropdown}
//         onMouseLeave={hideDropdown}
//     >
//         <Dropdown.Toggle>
//             {/* <NavLink to='/programs' style={{ textDecoration: 'none' }}>Programs</NavLink> */}
//         </Dropdown.Toggle>
//         <Dropdown.Menu
//             onMouseOver={showDropdown}
//             onMouseLeave={hideDropdown}>
//             {/* <Dropdown.Item href="#/action-1" id='dropdown-item'>Rahma International Academy</Dropdown.Item> */}
//             {/* <Dropdown.Item target='_blank' id='dropdown-item'><NavLink to='/programs' style={{ textDecoration: 'none', fontSize: '14px' }}>Rahma International Academy</NavLink></Dropdown.Item>
//             <Dropdown.Item href="https://rahmaworldwide.givecloud.co/sponsorship" target='_blank' id='dropdown-item'>Orphan Sponsorship</Dropdown.Item>
//             <Dropdown.Item href="https://mhanational.org/programs" target='_blank' id='dropdown-item'>Mental Health Programs</Dropdown.Item> */}
//             {/* <Dropdown.Item href="#/action-1" id='dropdown-item'>Meet Our Mental Health</Dropdown.Item>
//         <Dropdown.Item href="#/action-1" id='dropdown-item'>COVID-19 Efforts & Resources</Dropdown.Item> */}
//             {/* <Dropdown.Item href="https://mhanational.org/mentalhealthfacts" target='_blank' id='dropdown-item'>Quick Facts & Statistics</Dropdown.Item> */}
//             {/* <Dropdown.Item href="https://mhanational.org/staying-mentally-healthy"  target='_blank' id='dropdown-item'>Staying Mentally Healthy</Dropdown.Item> */}
//             {/* <Dropdown.Item href="https://mhanational.org/recovery-support" target='_blank' id='dropdown-item'>Recovery & Support</Dropdown.Item> */}
//             {/* <Dropdown.Item href="https://mhanational.org/self-help-tools"  target='_blank' id='dropdown-item'>Mental Health Tools</Dropdown.Item> */}
//             {/* <Dropdown.Item href="https://mhanational.org/b4stage4-philosophy"  target='_blank' id='dropdown-item'>B4 Stage 4 Philosophy</Dropdown.Item> */}
//         </Dropdown.Menu>
//     </Dropdown> :
//     <Dropdown as={ButtonGroup}>
//         <Button variant="info"><Link to='/programs' style={{ textDecoration: 'none' }}>Programs</Link></Button>
//         <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
//         <Dropdown.Menu className="super-colors">
//             {/* <Dropdown.Item href="#/action-1" id='dropdown-item'>Rahma International Academy</Dropdown.Item> */}
//             {/* <Dropdown.Item target='_blank' id='dropdown-item'><NavLink to='/programs' style={{ textDecoration: 'none', fontSize: '14px' }}>Rahma International Academy</NavLink></Dropdown.Item>
//             <Dropdown.Item href="https://rahmaworldwide.givecloud.co/sponsorship" target='_blank' id='dropdown-item'>Orphan Sponsorship</Dropdown.Item>
//             <Dropdown.Item href="https://mhanational.org/programs" target='_blank' id='dropdown-item'>Mental Health Programs</Dropdown.Item> */}
//             {/* <Dropdown.Item href="#/action-1" id='dropdown-item'>Meet Our Mental Health</Dropdown.Item>
//         <Dropdown.Item href="#/action-1" id='dropdown-item'>COVID-19 Efforts & Resources</Dropdown.Item> */}
//             {/* <Dropdown.Item href="https://mhanational.org/mentalhealthfacts" target='_blank' id='dropdown-item'>Quick Facts & Statistics</Dropdown.Item> */}
//             {/* <Dropdown.Item href="https://mhanational.org/staying-mentally-healthy"  target='_blank' id='dropdown-item'>Staying Mentally Healthy</Dropdown.Item> */}
//             {/* <Dropdown.Item href="https://mhanational.org/recovery-support" target='_blank' id='dropdown-item'>Recovery & Support</Dropdown.Item> */}
//             {/* <Dropdown.Item href="https://mhanational.org/self-help-tools"  target='_blank' id='dropdown-item'>Mental Health Tools</Dropdown.Item> */}
//             {/* <Dropdown.Item href="https://mhanational.org/b4stage4-philosophy"  target='_blank' id='dropdown-item'>B4 Stage 4 Philosophy</Dropdown.Item> */}
//         </Dropdown.Menu>
//     </Dropdown>}
