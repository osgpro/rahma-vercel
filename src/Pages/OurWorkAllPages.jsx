import React, { useEffect, useState } from "react";
import ChartComponent from "../Components/ChartComponent";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ourWorkBg from "../Assets/images/ourwork-bg.jpg";
import educationIcons1 from "../Assets/svgs/all-icons/educationIcons-01.svg";
import educationIcons2 from "../Assets/svgs/all-icons/educationIcons-02.svg";
import Circle2 from "../Assets/images/Untitled-2-02.png";
import CountUp from "react-countup";
import Educaimg from "../Assets/images/educaImage-02.jpg";

import { FreeMode, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getServiceData } from "../Redux/service";
import bgShadow from "../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg";
import Loader from "../Components/Loader";
import WashTable from "../Components/WashTable";
import { Box } from "@mui/material";

const OurWorkAllPages = ({ match }) => {
  const id = match.params.id;

  const dispatch = useDispatch();

  const service = useSelector((state) => state.getServiceData);
  const { loading, data, error } = service;

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  useEffect(() => {
    dispatch(getServiceData(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  var bgSyria = {
    backgroundColor: "#00908c",
  };
  var bgPalestine = {
    backgroundColor: "#fb9f01",
  };
  var bgTurkey = {
    backgroundColor: "#d95653",
  };
  var bgLebanon = {
    backgroundColor: "#1cabd6",
  };
  var bgAfrica = {
    backgroundColor: "#69c070",
  };
  var bgUs = {
    backgroundColor: "#30355f",
  };
  var bgYemen = {
    backgroundColor: "#dd6440",
  };
  var bgJordan = {
    backgroundColor: "#8b610c",
  };
  var bgNone = {
    backgroundColor: "#2b3990",
  };

  var novidPadding = {
    paddingTop: "4rem",
  };
  var vidPadding = {
    paddingTop: "10rem",
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
            <NavBar pass="active" />
            <section className="allpagesourwork">
              <div>
                <div className="shadowONtheImage">
                  <img src={bgShadow} alt="" />
                </div>
                <img
                  src={data["service"].hero_image}
                  className="theIMageImage"
                  alt="our work background"
                />
                <h1 className="firsth1">{data["services"].service_title}</h1>
              </div>
              <div className="video_section">
                <div className="container" style={{ marginBottom: "4rem" }}>
                  <h4>
                    Rahma Worldwide launched this{" "}
                    {data["services"].service_title} for refugees and displaced
                    children we want you to be part of it!
                  </h4>
                  {data["service"].main_video_url ? (
                    <div className="videoDiv">
                      <iframe
                        className="videoBox videoBox1"
                        width="420"
                        height="345"
                        src={data["service"].main_video_url}
                      ></iframe>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div
                    className="text_box_all"
                    style={
                      data["service"].main_video_url ? vidPadding : novidPadding
                    }
                  >
                    <h6>
                      {data["service"].description}
                      <br />
                      <br />
                      <figure></figure> {data["service"].body_1}
                      <br />
                      <br />
                      <figure></figure> {data["service"].body_2}
                      <br />
                      <br />
                      <figure></figure> {data["service"].body_3}
                      <br />
                      <br />
                      <figure></figure> {data["service"].body_4}
                    </h6>
                  </div>
                </div>
                {data["services"].service_title == "Protection" ||
                  data["services"].service_title == "Nutrition" ? (
                  <></>
                ) : (
                  <>
                    <div className="countUp">
                      <img
                        src={data["service"].center_image}
                        alt=""
                        className="theIMageImage lan"
                      />
                      <div className="allourworkshadow"></div>
                      <div className="container">
                        <div>
                          <h5>TOTAL BENEFICIARIES</h5>
                          <img src={educationIcons1} alt="" />
                          <h1>
                            <CountUp
                              end={data["service"].total_beneficiaries}
                            />
                          </h1>
                        </div>
                        <div>
                          <h5>AREAS SERVED</h5>
                          <img src={educationIcons2} alt="" />
                          <h1>
                            <CountUp end={data["service"].areas_served} />
                            <b>Countries</b>
                          </h1>
                        </div>
                      </div>
                    </div>

                    {id == 9 ? <WashTable data={data['wash_data']} /> : <></>}

                    <div className="videos_section">
                      <div className="container">
                        {data["videos"].map((video) => (
                          <div key={video.id} className="theVideoitSelf">
                            <div
                              style={
                                video.title.country == "Syria"
                                  ? bgSyria
                                  : video.title.country == "Palestine"
                                    ? bgPalestine
                                    : video.title.country == "Turkey"
                                      ? bgTurkey
                                      : video.title.country == "Yemen"
                                        ? bgYemen
                                        : video.title.country == "Lebanon"
                                          ? bgLebanon
                                          : video.title.country == "USA"
                                            ? bgUs
                                            : video.title.country == "Africa"
                                              ? bgAfrica
                                              : video.title.country == "Jordan"
                                                ? bgJordan
                                                : bgNone
                              }
                            >
                              {video.title.country}
                            </div>

                            <iframe
                              className="videoBox"
                              src={video.video_url}
                            ></iframe>
                            <figure
                              style={
                                video.title.country == "Syria"
                                  ? bgSyria
                                  : video.title.country == "Palestine"
                                    ? bgPalestine
                                    : video.title.country == "Turkey"
                                      ? bgTurkey
                                      : video.title.country == "Yemen"
                                        ? bgYemen
                                        : video.title.country == "Lebanon"
                                          ? bgLebanon
                                          : video.title.country == "USA"
                                            ? bgUs
                                            : video.title.country == "Africa"
                                              ? bgAfrica
                                              : video.title.country == "Jordan"
                                                ? bgJordan
                                                : bgNone
                              }
                            ></figure>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className="text_box_all_page"
                      style={{ marginBottom: "3rem " }}
                    >
                      <div className="container">
                        <h5 style={{ whiteSpace: "break-spaces" }}>
                          {data["service"].bottom_description}
                        </h5>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {id == 8 ? (
                <div
                  className="our-causes our-causes-education"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    padding: "0",
                    marginBottom: "5rem",
                    paddingBottom: "7rem",
                  }}
                >
                  <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    style={{ opacity: "1" }}
                  >
                    <figure style={{ top: "71px" }}></figure>
                    <div className="Joinus">
                      <div className="container">
                        <h1 style={{ margin: "0rem auto" }}>
                          Join us to Inspire, Enable, Celebrate and Educate For
                          only <span style={{ color: "#34598a" }}>$63</span> a
                          day, we all should participate!
                        </h1>
                      </div>
                    </div>
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Navigation]}
                      className="mySwiper"
                      breakpoints={{
                        // when window width is >= 640px
                        280: {
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 2,
                        },
                        // when window width is >= 992px
                        992: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {data['donation_forms'].map(form => (
                        <SwiperSlide key={form.id} className="the-swiper-slide">
                          <div className="cause">
                            <div className="image-holder">
                              <img src={form.image} alt="children img" />
                              <span style={form.region.country == 'Syria' ? bgSyria : form.region.country == 'Palestine' ? bgPalestine : form.region.country == 'Turkey' ? bgTurkey : form.region.country == 'Yemen' ? bgYemen : form.region.country == 'Lebanon' ? bgLebanon : form.region.country == 'USA' ? bgUs : form.region.country == 'Africa' ? bgAfrica : form.region.country == 'Jordan' ? bgJordan : bgNone}>{form.region.country}</span>
                            </div>
                            <div className="context">
                              <h4>{form.title}</h4>
                              <p className="cause-description">
                                {form.description}
                              </p>
                              <div className="btnDonateCause">
                                <a href={form.donation_url}>
                                  Donate
                                </a>
                              </div>
                              <hr />
                              <div className="raised-goal">
                                <p>GOAL : ${form.goal}</p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <ChartComponent bgColor="#e3e3e3" />
              <Footer />
            </section>
          </>
        )
      )}
    </>
  );
};

export default OurWorkAllPages;
