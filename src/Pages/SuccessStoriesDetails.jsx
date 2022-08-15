import React, { useEffect, useState } from "react";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import headerImg from "../Assets/images/about_bg-01.jpg";
import bgShadow from "../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleSuccessStoriesDataAction } from "../Redux/succes_stories";
import Loader from "../Components/Loader";

const SuccessStoriesDetails = ({ match }) => {
  const id = match.params.id;

  const dispatch = useDispatch();

  SwiperCore.use([Autoplay, Pagination]);

  const getSingleSuccessStoriesData = useSelector(
    (state) => state.getSingleSuccessStoriesData
  );
  const { loading, data, error } = getSingleSuccessStoriesData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    dispatch(getSingleSuccessStoriesDataAction(id));
  }, [dispatch, id]);

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });
  return (
    <>
      {loading ? (
        <Loader />
      ) : data ? (
        <>
          <div style={{ backgroundColor: "#f3f0ea" }}>
            <NavBar />
            {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
            <section className="successPage-header">
              <div className="shadowONtheImage" style={{ opacity: "0.7" }}>
                <img src={bgShadow} alt="" />
              </div>
              <img className="" src={data["story"].image} />
              <h1 style={{ fontWeight: "700" }}>Their Stories</h1>
            </section>

            <div className="success_details_container">
              <div className="container">
                <div className="VideoContainer">
                  <iframe className="" src={data["story"].video_url}></iframe>
                </div>
              </div>
            </div>

            <div className="text_under_video">
              <div className="container">
                <h1>{data["story"].title}</h1>
                <p>{data["story"].description}</p>
              </div>
            </div>

            <div className="success_details_slider">
              <div className="container">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper SwiperSuccess"
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
                      slidesPerView: 2,
                    },
                  }}
                >
                  {data["story"]?.images.map((el, index) => (
                    <SwiperSlide key={index}>
                      <img src={el.image} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {data["related_story_1"] &&
              data["related_story_2"](
                <div className="interestedIn">
                  <h1>YOU MAY BE INTERESTED IN…</h1>
                  <div className="container">
                    <div>
                      <div>
                        <Link
                          to={`/success-stories/${data["related_story_1"]?.id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <img src={data["related_story_1"]?.image} alt="" />
                          <p>
                            {data["related_story_1"]?.description.length > 200
                              ? data["related_story_1"]?.description.slice(
                                  0,
                                  200
                                )
                              : data["related_story_1"]?.description}
                          </p>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to={`/success-stories/${data["related_story_2"]?.id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <img src={data["related_story_2"]?.image} alt="" />
                          <p>
                            {data["related_story_2"]?.description.length > 200
                              ? data["related_story_2"]?.description.slice(
                                  0,
                                  200
                                )
                              : data["related_story_2"]?.description}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            <Footer />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SuccessStoriesDetails;
