import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import headerImg from "../Assets/images/top.jfif";
import orphanBg from "../Assets/images/orphan.jfif";
import orphanContent from "../Assets/images/orphans-img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../Redux/home";
import ModalVideo from "react-modal-video";
import { Accordion } from "react-bootstrap";
import ChartComponent from "../Components/ChartComponent";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import bgShadow from "../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg";
import { getProgramsData } from "../Redux/programs";
import Loader from "../Components/Loader";

const ProgramsPage = ({ history }) => {
  const dispatch = useDispatch();

  const programsData = useSelector((state) => state.getProgramsData);
  const { loading, data, error } = programsData;

  const [videoIsOpen, setVideoIsOpen] = useState(false);

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  useEffect(() => {
    dispatch(getProgramsData());
  }, [dispatch]);

  var novidPadding = {
    paddingTop: "0rem",
  };

  var vidPadding = {
    paddingTop: "3rem",
  };

  var novidPaddingmar = {
    marginTop: "1rem",
  };

  var vidPaddingmar = {
    marginTop: "4rem",
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : data ? (
        <>
          <NavBar history={history} />
          {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
          <section className="programsPage-header">
            <div className="shadowONtheImage">
              <img src={bgShadow} alt="" />
            </div>
            <img className="" src={headerImg} />
            <h1>PROGRAMS</h1>
          </section>

          <section className="programsPage-body">
            <h1>{data["programs"][1].title}</h1>
            <div className="container">
              {data["programs"][0].video_youtube_link ? (
                <div className="videoDiv">
                  <iframe
                    className="videoBox videoBox1"
                    src={data["programs"][0].video_youtube_link}
                  ></iframe>
                </div>
              ) : (
                <></>
              )}
              {/* <button className="btn-primary programs-video-cta" onClick={() => setVideoIsOpen(true)}><i className="fa-solid fa-circle-play"></i></button> */}
              <div
                className="row row2"
                style={
                  data["programs"][0].video_youtube_link
                    ? vidPadding
                    : novidPadding
                }
              >
                <p
                  style={
                    data["programs"][0].video_youtube_link
                      ? vidPaddingmar
                      : novidPaddingmar
                  }
                >
                  {data["programs"][0].description}
                </p>
              </div>

              <div className="row row3 mb-5">
                <h1 className="h1-styles">
                  PROGRAMS <span>OFFERED</span>
                </h1>

                <div className="row">
                  {data["intAcademy"].map((el) => (
                    <div key={el.id} className="col-md-6">
                      <p>{el.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="orphans">
            <div className="orphansectionshadow"></div>
            <img src={orphanBg} alt="" />
            <div className="container">
              <div className="orphan_sponsorship">
                <h1>ORPHAN SPONSORSHIP</h1>
                <div>
                  <div>
                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sunt magnam voluptatum .</p> */}
                    <img src={orphanContent} alt="" />
                  </div>
                  <p>Sponsorship — Rahma Worldwide</p>
                </div>
                <a
                  href="https://rahmaworldwide.givecloud.co/sponsorship"
                  target="_blank"
                >
                  <button>Orphan Sponsorship</button>
                </a>
              </div>
            </div>
          </section>

          <section className="programsPage-body">
            <h1>{data["programs"][0].title}</h1>
            <div className="container">
              {data["programs"][2].video_youtube_link ? (
                <div className="videoDiv">
                  <iframe
                    className="videoBox videoBox1"
                    src={data["programs"][2].video_youtube_link}
                  ></iframe>
                </div>
              ) : (
                <div className="my-3"></div>
              )}
              {/* <button className="btn-primary programs-video-cta" onClick={() => setVideoIsOpen(true)}></button> */}

              <div
                className="row row2"
                style={
                  data["programs"][0].video_youtube_link
                    ? vidPadding
                    : novidPadding
                }
              >
                <p
                  style={
                    data["programs"][0].video_youtube_link
                      ? vidPaddingmar
                      : novidPaddingmar
                  }
                >
                  {data["programs"][0].description}
                </p>
              </div>

              <div className="row row3">
                <h1 className="h1-styles">
                  PROGRAMS <span>OFFERED</span>
                </h1>

                <Accordion
                  className="Accordion acc_programs"
                  style={{ borderRadius: "10px" }}
                >
                  {data["mentalHealth"].map((el) => (
                    <Accordion.Item
                      key={el.id}
                      eventKey={el.id}
                      style={{
                        borderRadius: "10px",
                        width: "100%",
                        margin: "0.5rem",
                      }}
                    >
                      <Accordion.Header
                        style={{
                          fontSize: "28px",
                          borderRadius: "10px",
                          width: "100%",
                        }}
                      >
                        <h4
                          style={{
                            color: "gray",
                            letterSpacing: "0",
                            fontWeight: "300",
                            fontSize: "17px",
                            marginRight: "0",
                            textAlign: "right",
                          }}
                        >
                          {el.title}
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body
                        style={{ borderRadius: "10px", width: "100%" }}
                      >
                        <p
                          style={{
                            letterSpacing: "0",
                            width: "100%",
                            textAlign: "left",
                          }}
                        >
                          {el.description}
                        </p>
                        <a
                          href={
                            el.id == 1
                              ? "https://mhanational.org/covid19"
                              : el.id == 2
                              ? "https://mhanational.org/programs"
                              : el.id == 3
                              ? "https://mhanational.org/recovery-support"
                              : el.id == 4
                              ? "https://mhanational.org/b4stage4-philosophy"
                              : el.id == 5
                              ? "https://mhanational.org/mentalhealthfacts"
                              : el.id == 6
                              ? "https://mhanational.org/staying-mentally-healthy"
                              : el.id == 7
                              ? "https://mhanational.org/self-help-tools"
                              : "https://mhanational.org/programs"
                          }
                          target="_blank"
                          style={{
                            alignSelf: "flex-end",
                            backgroundColor: "#2b3990",
                            padding: "0.5rem 1.5rem",
                            color: "white",
                            borderRadius: "15px",
                            textDecoration: "none",
                          }}
                        >
                          Learn More
                        </a>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
          <ChartComponent bgColor="#e3e3e3" />
          <Footer />
        </>
      ) : (
        <div className="alert alert-danger">{error}</div>
      )}
    </>
  );
};

export default ProgramsPage;
