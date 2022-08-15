import React, { useState, useRef, useEffect } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

import Circle2 from "../Assets/images/Untitled-2-02.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "react-before-after-slider-component/dist/build.css";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../Redux/home";
import Loader from "../Components/Loader";

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

const Donate = () => {
  const dispatch = useDispatch();

  const homeData = useSelector((state) => state.getHomeData);
  const { loading, data } = homeData;

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : data ? (
        <>
          <NavBar />

          <div
            className="our-causes"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <img
              src={Circle2}
              alt=""
              style={{
                position: "absolute",
                right: "-90px",
                width: "300px",
                height: "300px",
                top: "139px",
                zIndex: "0",
              }}
            />
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ opacity: 1 }}
            >
              <figure></figure>
              <div className="our-text">
                <h4>OUR CAUSES</h4>
                <h1 className="h1-styles">
                  SUPPORT OUR <span>CAUSE</span>
                </h1>
              </div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
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
                {data["forms"]?.map((form) => (
                  <>
                    <SwiperSlide key={form.id} className="the-swiper-slide">
                      <div className="cause">
                        <div className="image-holder">
                          <img src={form.image} alt="children img" />
                          <span
                            style={
                              form.type == "Syria"
                                ? bgSyria
                                : form.type == "Palestine"
                                ? bgPalestine
                                : form.type == "Turkey"
                                ? bgTurkey
                                : form.type == "Yemen"
                                ? bgYemen
                                : form.type == "Lebanon"
                                ? bgLebanon
                                : form.type == "USA"
                                ? bgUs
                                : form.type == "Africa"
                                ? bgAfrica
                                : form.type == "Jordan"
                                ? bgJordan
                                : bgNone
                            }
                          >
                            {form.type}
                          </span>
                        </div>
                        <div className="context">
                          <h4>{form.title}</h4>
                          <p className="cause-description">
                            {form.description.length > 273
                              ? form.description.slice(0, 273)
                              : form.description}
                          </p>
                          <div className="btnDonateCause">
                            <a href="https://rahmaww.donorsupport.co/-/XGDAEUZV">
                              Donate
                            </a>
                          </div>
                          <hr />
                          <Box width={300}>
                            <Slider
                              defaultValue={(form.raised / form.goal) * 100}
                              aria-label="Always visible"
                              valueLabelDisplay="on"
                              disabled={true}
                            />
                          </Box>
                          <div className="raised-goal">
                            {/* <p>RAISED : ${form.raised} </p> */}
                            <p>GOAL : ${form.goal}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Donate;
