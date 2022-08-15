import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import DRshadi from "../Assets/images/dr_shadi.jpg";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import headerImg from "../Assets/images/aboutusnewimage.jpg";
import bgShadow from "../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg";

import { ReactComponent as AboutIcon1 } from "../Assets/svgs/all-icons/aboutIcons-03.svg";
import { ReactComponent as AboutIcon2 } from "../Assets/svgs/all-icons/aboutIcons-04.svg";
import { ReactComponent as AboutIcon3 } from "../Assets/svgs/all-icons/aboutIcons-05.svg";
import { ReactComponent as AboutIcon4 } from "../Assets/svgs/all-icons/aboutIcons-06.svg";

import { ReactComponent as History1 } from "../Assets/svgs/all-icons/historyIcons-01.svg";
import { ReactComponent as History2 } from "../Assets/svgs/all-icons/historyIcons-02.svg";
import aboutSmallimg from "../Assets/images/aboutSmallimg.jpg";

import bg from "../Assets/images/aboutbuttonbg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getAboutData } from "../Redux/history";
import Loader from "../Components/Loader";

const AboutUs = () => {
  const dispatch = useDispatch();

  const getAbout = useSelector((state) => state.getAboutData);
  const { loading, data, error } = getAbout;

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  useEffect(() => {
    dispatch(getAboutData());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : data ? (
        <>
          <div style={{ backgroundColor: "#f3f0ea" }}>
            <NavBar />
            {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
            <section className="aboutPage-header">
              <div className="shadowONtheImage" style={{ opacity: "0.7" }}>
                <img src={bgShadow} alt="" />
              </div>
              <img className="" src={headerImg} />
              <h1 style={{ fontWeight: "700" }}>ABOUT US</h1>
            </section>

            <div className="container_about_text">
              <div className="container">
                <div className="hero_about_text">
                  <p>
                    WE TAKE SERIOUSLY THE RESPONSIBILITY TO CARE FOR THE NEEDY
                    WITH DONATIONS FROM INDIVIDUALS, GOVERNMENT, AND MAJOR
                    MULTI-FAITH ORGANIZATIONS (CHRISTIAN, JEWISH, AND OTHERS)
                    AROUND THE GLOBE IN SUPPORT OF DISTRESS INDIVIDUALS,
                    EDUCATION, HUMANITARIAN WORK AND RELIEF EFFORTS LOCALLY IN
                    THE USA, AND THROUGHOUT THE WORLD.
                  </p>
                </div>
              </div>
            </div>

            <div className="letterSection">
              <div className="container col-7">
                <div>
                  <div className="ShadiimgCon">
                    <img src={DRshadi} alt="" />
                    <h5>
                      DR. SHADI ZAZA <br /> CEO
                    </h5>
                  </div>
                </div>
                <div className="shadi_letter">
                  <h1 style={{ marginBottom: "2rem" }}>
                    LETTER FROM THE <span>CEO</span>
                  </h1>
                  <b>DEAR GENEROUS DONORS,</b>
                  <p
                    style={{
                      marginTop: "2rem",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Thank you for visiting rahma worldwide’s official website!
                    On behalf of rahma worldwide’s board of directors, I am
                    filled with gratitude as we have your continued support. Our
                    dedicated donors and staff have done an incredible job
                    supporting our outreach aid and development while
                    strengthening our programs and services. We hope you will
                    become a supporter of our worthy projects.
                    <br />
                    <br />
                    On the ground, our response to the crisis in Yemen has seen
                    more and more resources directed toward the aid and relief
                    efforts therein. Your unyielding support will enable our
                    mission to assist our brothers and sisters during this
                    difficult time. I would also like to extend my appreciation
                    to our dedicated staff members who are working in
                    extraordinary risk and circumstances and to fulfill our
                    mission and bring sanctuary to those in need. Since the
                    establishment of Rahma worldwide , we have touched more than
                    3.5 million lives, whether through humanitarian impacts such
                    as food, water, and medicine, or development programs such
                    as training, educating, and building families. Our goal of
                    increasing the number of beneficiaries in the fields, and
                    you truly make this possible!
                    <br />
                    <br />
                    Rahma worldwide is stronger than ever due to our continually
                    expanding community who comes together to donate time,
                    resources, and talent in support of our important mission.
                    Our network of volunteers expanded on the ground in many
                    countries, especially in areas of crisis such as Yemen and
                    Syria, and where refugees resettle such as Jordan, Lebanon,
                    and the USA. This year, Rahma worldwide is adding more usa
                    programs to support displaced refugees. We will remain on
                    course to ease the pain and suffering of all people
                    regardless of religion, background, gender, or nationality.
                    <br />
                    <br />
                    Your support is needed now more than ever, as areas of
                    crisis deteriorate tragically with every passing day,
                    however, we believe that hope forever grows and communities
                    will rise again after the fall and you can make a difference
                    in people’s lives.
                  </p>
                  <b>Sincerely,</b>
                  <br />
                  <b>DR. SHADI ZAZA</b>
                </div>
              </div>
            </div>

            <div className="core_values">
              <h3>CORE VALUES</h3>
              <div className="container">
                <div>
                  <AboutIcon1 />
                  <h6>COMPASSION</h6>
                  <p>
                    Dedicating ourselves to improving the lives of Those we
                    serve and to treating each other With care and respect.
                  </p>
                </div>

                <div>
                  <AboutIcon2 />
                  <h6>TRANSPARENCY</h6>
                  <p>
                    Conducting ourselves with openness in all Aspects of our
                    work. We are open to Discussion and to improving how we work
                    to Reflect our values.
                  </p>
                </div>

                <div>
                  <AboutIcon3 />
                  <h6>INTEGRITY</h6>
                  <p>
                    Fulfilling our promises through behavior that Reflects our
                    honesty, responsibility, and Fairness. We are committed to
                    doing what is Right for our beneficiaries.
                  </p>
                </div>

                <div>
                  <AboutIcon4 />
                  <h6>HUMANITY</h6>
                  <p>
                    We strive to prevent and alleviate human Suffering and
                    promote mutual understanding, Cooperation and respect for
                    the human being.
                  </p>
                </div>
              </div>
            </div>

            <div className="vision_mission">
              {/* <h2 className='firsth2'>.</h2> */}
              <div className="container">
                <div className="vision">
                  <h2>VISION</h2>
                  <p>
                    A world in where every community is provided the Opportunity
                    to be more efficient,and sustainable.
                  </p>
                </div>
                <div className="mission">
                  <h2>MISSION</h2>
                  <p>
                    Dedication to humanity by assisting the most vulnerable
                    Communities by responding to crisis, implementing Programs
                    to achieve Social equity; create development strategies, and
                    Facilitate self-sufficient sustainability.
                  </p>
                </div>
              </div>
            </div>

            <div className="history">
              <h2>HISTORY</h2>
              <div className="container">
                <div className="hero_about_text_history">
                  <p>
                    We take seriously the responsibility to care for the needy
                    with Donations from individuals, government, and major
                    multi-faith organizations (christian, jewish, and others)
                    around the globe in support of distress Individuals,
                    education, humanitarian work and relief efforts locally in
                    the usa, and Throughout the world.
                  </p>
                </div>
              </div>
              <div className="updates_by_years">
                <div className="container">
                  {data["history"].map((el, index) => (
                    <>
                      {index % 2 === 0 &&
                      !el.year.toLowerCase().includes("rw") ? (
                        <div key={index} className="to_left">
                          <div>
                            <h5>{el.year}</h5>
                            <History1 />
                            <figure>
                              <img
                                src={el.image}
                                alt=""
                                style={{
                                  width: "100%",
                                  hegiht: "100%",
                                  minWidth: "99.9%",
                                  minHeight: "99.9%",
                                  objectfit: "cover",
                                  borderRadius: "17px",
                                }}
                              />
                            </figure>
                          </div>
                          <p>{el.description}</p>
                        </div>
                      ) : index % 2 !== 0 &&
                        !el.year.toLowerCase().includes("rw") ? (
                        <div key={index} className="from_left">
                          <p>{el.description}</p>
                          <div>
                            <h5>{el.year}</h5>
                            <History2 />
                            <figure>
                              <img
                                src={el.image}
                                alt=""
                                style={{
                                  width: "100%",
                                  hegiht: "100%",
                                  minWidth: "99.9%",
                                  minHeight: "99.9%",
                                  objectfit: "cover",
                                  borderRadius: "17px",
                                }}
                              />
                            </figure>
                          </div>
                        </div>
                      ) : el.year.toLowerCase().includes("rw") ? (
                        <div className="to_center">
                          <div>
                            <h5>{el.year}</h5>
                            <History2 />
                            <figure>
                              <img
                                src={el.image}
                                alt=""
                                style={{
                                  width: "100%",
                                  hegiht: "100%",
                                  minWidth: "99.9%",
                                  minHeight: "99.9%",
                                  objectfit: "cover",
                                  borderRadius: "17px",
                                }}
                              />
                            </figure>
                          </div>
                          <p>{el.description}</p>
                        </div>
                      ) : null}
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="financial">
              <img src={bg} alt="" />
              <div className="bg-shaow"></div>
              <div className="container">
                <h2>FINANCIAL AND ANNUAL REPORTS</h2>
                <h6>You can view our annual reports since 2016</h6>
                <div className="button-con">
                  {data["reports"].map((el) => (
                    <a key={el.id} href={el.pdf_file} className="flipBtnEffect">
                      <div className="qube">
                        <button className="front">{el.button_title}</button>
                        <button className="back">{el.button_title}</button>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AboutUs;
