import React, { useState, useRef, useEffect } from "react";
// import navbar and footer
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import AOS from "aos";

import Circle1 from "../Assets/images/Untitled-2-01.png";
import Circle2 from "../Assets/images/Untitled-2-02.png";
import Circle3 from "../Assets/images/Untitled-2-03.png";
import Circle5 from "../Assets/images/Untitled-2-05.png";

import afterImg from "../Assets/images/after-before-slider-01.jpg";
import beforeImg from "../Assets/images/after-before-slider-02.jpg";
import bulls from "../Assets/svgs/all-icons/bulls.svg";

import { FreeMode, Pagination, Navigation } from "swiper";

// importing hero svgs
import { ReactComponent as HeroSvgicon2 } from "../Assets/svgs/all-icons/icon-02.svg";
import { ReactComponent as HeroSvgicon3 } from "../Assets/svgs/all-icons/newIcons-06.svg";
import { ReactComponent as HeroSvgicon4 } from "../Assets/svgs/all-icons/newIcons-07.svg";
import { ReactComponent as HeroSvgicon5 } from "../Assets/svgs/all-icons/newIcons-08.svg";
import { ReactComponent as HeroSvgicon6 } from "../Assets/svgs/all-icons/newIcons-09.svg";
import { ReactComponent as HeroSvgicon7 } from "../Assets/svgs/all-icons/icon-07.svg";
import { ReactComponent as HeroSvgicon8 } from "../Assets/svgs/all-icons/newIcons-10.svg";
import { ReactComponent as HeroSvgicon9 } from "../Assets/svgs/all-icons/newIcons-11.svg";
import { ReactComponent as HeroSvgicon10 } from "../Assets/svgs/all-icons/newIcons-12.svg";
import { ReactComponent as HeroSvgicon11 } from "../Assets/svgs/all-icons/icon-11.svg";
import { ReactComponent as PlayIcon } from "../Assets/svgs/all-icons/playIcon.svg";
import "swiper/css/pagination";
// importing framer motion
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// importing the map
import { ReactComponent as Map1icon } from "../Assets/svgs/all-icons/map-icons-01.svg";
import MapComponent from "../MapJs/MapComponent";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";

import SwiperCore, { Autoplay } from "swiper";
import ChartComponent from "../Components/ChartComponent";

import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../Redux/home";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";

const Homepage = () => {
  const dispatch = useDispatch();

  SwiperCore.use([Autoplay, Pagination]);
  const [clicked, setClicked] = useState(false);
  const [clickedInfo, setClickedInfo] = useState(false);
  const [showMapInfo, setShowMapInfo] = useState(false);
  const [countyName, setCountyName] = useState("");

  const homeData = useSelector((state) => state.getHomeData);
  const { loading, data } = homeData;

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  const [test, setTest] = useState(false);

  // useEffect(() => {

  // }, [])

  const mapFunction = () => {
    const US = document.getElementById("US");
    const JO = document.getElementById("JO");
    const LB = document.getElementById("LB");
    const PS = document.getElementById("PS");
    const SY = document.getElementById("SY");
    const TR = document.getElementById("TR");
    const YE = document.getElementById("YE");
    // const ML = document.getElementById('ML')
    // const GH = document.getElementById('GH')
    // const CM = document.getElementById('CM')
    // const TD = document.getElementById('TD')
    const SD = document.getElementById("SD");
    // const KE = document.getElementById('KE')
    const SL = document.getElementById("SL");
    // const MM = document.getElementById('MM')
    // const AE = document.getElementById('AE')

    let AllCOUNTRYS = [US, JO, LB, PS, SY, TR, YE, SD, SL];

    AllCOUNTRYS.forEach((country) => {
      country.addEventListener("click", () => {
        AllCOUNTRYS.forEach((ele) => {
          // console.log(ele.getAttribute("data-name"));
          ele.classList.remove("active");
        });
        country.classList.add("active");
      });

      country.onclick = () => {
        setClicked(true);
        setTimeout(() => {
          setShowMapInfo(true);
          setClickedInfo(true);
        }, 1000);
        setCountyName(country.getAttribute("data-name"));

        mapClickCountryNameFunction(country.getAttribute("data-name"));
      };
    });
  };

  const mapClickCountryNameFunction = () => {
    const US_span = document.getElementById("US_span");
    const AF_span = document.getElementById("SL_span");
    const JO_span = document.getElementById("JO_span");
    const LB_span = document.getElementById("LB_span");
    const PS_span = document.getElementById("PS_span");
    const SY_span = document.getElementById("SY_span");
    const TR_span = document.getElementById("TR_span");
    const YE_span = document.getElementById("YE_span");

    const US = document.getElementById("US");
    const JO = document.getElementById("JO");
    const LB = document.getElementById("LB");
    const PS = document.getElementById("PS");
    const SY = document.getElementById("SY");
    const TR = document.getElementById("TR");
    const YE = document.getElementById("YE");
    const ML = document.getElementById("ML");
    const SD = document.getElementById("SD");
    const SL = document.getElementById("SL");
    const AE = document.getElementById("AE");

    let AllCOUNTRYSSPANS = [
      US_span,
      JO_span,
      LB_span,
      PS_span,
      SY_span,
      TR_span,
      YE_span,
      AF_span,
    ];

    let AllCOUNTRYS = [US, JO, LB, PS, SY, TR, YE, ML, SD, SL, AE];

    AllCOUNTRYSSPANS.forEach((SPAN) => {
      if (
        AllCOUNTRYS.map(
          (item) => item.id === SPAN.getAttribute("data-country-id")
        )
      ) {
        SPAN.onclick = () => {
          AllCOUNTRYS.forEach((ele) => {
            ele.classList.remove("active");
            if (ele.id === SPAN.getAttribute("data-country-id")) {
              ele.classList.add("active");
            }
          });
          setClicked(true);
          setTimeout(() => {
            setShowMapInfo(true);
            setClickedInfo(true);
          }, 1000);
          setCountyName(SPAN.getAttribute("data-country-check"));
        };
      }
    });
  };

  console.log(countyName);

  useEffect(() => {
    setClickedInfo(false);
    setTimeout(() => {
      setClickedInfo(true);
    }, 500);

    return () => {
      setClickedInfo(false);
    };
  }, [countyName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // all map variants
  const MapContainerAnimate = {
    hidden: { width: `${100}%` },
    visible: {
      width: `${55}%`,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const maph1animation = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const mapbuttonanimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const mapContextAnimation1 = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const mapContextAnimation2 = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const mapContextAnimation3 = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const mapContextAnimation4 = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // framer motion variants
  const HandimageVariants = {
    hidden: {
      y: 500,
      transition: { duration: 3 },
    },
    visible: {
      y: 0,
      transition: { duration: 3 },
    },
  };

  const HandimageVariants2 = {
    hidden: { opacity: 0, y: 500 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  // framer motion variants
  const RightimageVariants = {
    hidden: { x: 400 },
    visible: {
      x: 0,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  const RightimageVariants1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  // framer motion variants
  const TextHeroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // framer motion variants
  const buttonHeroVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const facebookHeroVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  // framer motion variants
  const instaHeroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  // framer motion variants
  const twitterHeroVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  // framer motion variants
  const youtubeHeroVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const [mapProgram, setMapProgram] = useState([]);

  useEffect(() => {
    if (data) {
      var mapPrograms = data["countriesData"];
      mapPrograms = mapPrograms.filter(
        (program) => program.region.country === countyName
      );
      setMapProgram(mapPrograms);
    }
  }, [countyName]);

  var firstSliderImage;
  var secondSliderImage;

  // // handle all hero animations
  const mainRightImage = useRef();
  const mainH4Title = useRef();
  const handImage = useRef();
  const [iconId, setIconId] = useState(1);
  const [handleAnimate, setHandleAnimate] = useState(true);
  const [handleAnimateClick, setHandleAnimateClick] = useState(false);

  const handleIconClick = (id) => {
    setIconId(id);
    if (id === 1) {
      setHandleAnimate(false);
      // setHandleAnimateClick(true)
      setTimeout(() => {
        setHandleAnimate(true);
        mainRightImage.current.src = mainRightImage.current.getAttribute(
          "data-environment-rightimage"
        );
        mainH4Title.current.textContent = mainH4Title.current.getAttribute(
          "data-environment-h4"
        );
        handImage.current.src = handImage.current.getAttribute(
          "data-environment-handimage"
        );
      }, 1000);
    } else if (id === 2) {
      setHandleAnimate(false);
      // setHandleAnimateClick(true)
      setTimeout(() => {
        setHandleAnimate(true);
        mainRightImage.current.src = mainRightImage.current.getAttribute(
          "data-protection-rightimage"
        );
        mainH4Title.current.textContent =
          mainH4Title.current.getAttribute("data-protection-h4");
        handImage.current.src = handImage.current.getAttribute(
          "data-protection-handimage"
        );
      }, 1000);
    } else if (id === 3) {
      setHandleAnimate(false);
      // setHandleAnimateClick(true)
      setTimeout(() => {
        setHandleAnimate(true);
        mainRightImage.current.src = mainRightImage.current.getAttribute(
          "data-shelter-rightimage"
        );
        mainH4Title.current.textContent =
          mainH4Title.current.getAttribute("data-shelter-h4");
        handImage.current.src = handImage.current.getAttribute(
          "data-shelter-handimage"
        );
      }, 1000);
    } else if (id === 4) {
      setHandleAnimate(false);
      // setHandleAnimateClick(true)
      setTimeout(() => {
        setHandleAnimate(true);
        mainRightImage.current.src = mainRightImage.current.getAttribute(
          "data-nutrition-rightimage"
        );
        mainH4Title.current.textContent =
          mainH4Title.current.getAttribute("data-nutrition-h4");
        handImage.current.src = handImage.current.getAttribute(
          "data-nutrition-handimage"
        );
      }, 1000);
    } else if (id === 5) {
      setHandleAnimate(false);
      // setHandleAnimateClick(true)
      setTimeout(() => {
        setHandleAnimate(true);
        mainRightImage.current.src = mainRightImage.current.getAttribute(
          "data-orphan-sponsorship-rightimage"
        );
        mainH4Title.current.textContent = mainH4Title.current.getAttribute(
          "data-orphan-sponsorship-h4"
        );
        handImage.current.src = handImage.current.getAttribute(
          "data-orphan-sponsorship-handimage"
        );
      }, 1000);
    } else if (id === 6) {
      setHandleAnimate(false);
      // setHandleAnimateClick(true)
      setTimeout(() => {
        setHandleAnimate(true);
        mainRightImage.current.src = mainRightImage.current.getAttribute(
          "data-food-rightimage"
        );
        mainH4Title.current.textContent =
          mainH4Title.current.getAttribute("data-food-h4");
        handImage.current.src = handImage.current.getAttribute(
          "data-food-handimage"
        );
      }, 1000);
    } else if (id === 7) {
      setHandleAnimate(false);
      // setHandleAnimateClick(true)
      setTimeout(() => {
        setHandleAnimate(true);
        mainRightImage.current.src = mainRightImage.current.getAttribute(
          "data-health-rightimage"
        );
        mainH4Title.current.textContent =
          mainH4Title.current.getAttribute("data-health-h4");
        handImage.current.src = handImage.current.getAttribute(
          "data-health-handimage"
        );
      }, 1000);
    } else if (id === 8) {
      setHandleAnimate(false);
      // setHandleAnimateClick(true)
      setTimeout(() => {
        setHandleAnimate(true);
        mainRightImage.current.src = mainRightImage.current.getAttribute(
          "data-education-rightimage"
        );
        mainH4Title.current.textContent =
          mainH4Title.current.getAttribute("data-education-h4");
        handImage.current.src = handImage.current.getAttribute(
          "data-education-handimage"
        );
      }, 1000);
    } else if (id === 9) {
      setHandleAnimate(false);
      // setHandleAnimateClick(true)
      setTimeout(() => {
        setHandleAnimate(true);
        mainRightImage.current.src = mainRightImage.current.getAttribute(
          "data-w-a-s-h-rightimage"
        );
        mainH4Title.current.textContent =
          mainH4Title.current.getAttribute("data-w-a-s-h-h4");
        handImage.current.src = handImage.current.getAttribute(
          "data-w-a-s-h-handimage"
        );
      }, 1000);
    } else if (id === 10) {
      setHandleAnimate(false);
      // setHandleAnimateClick(true)
      setTimeout(() => {
        setHandleAnimate(true);
        mainRightImage.current.src = mainRightImage.current.getAttribute(
          "data-non-food-items-rightimage"
        );
        mainH4Title.current.textContent = mainH4Title.current.getAttribute(
          "data-non-food-items-h4"
        );
        handImage.current.src = handImage.current.getAttribute(
          "data-non-food-items-handiImage"
        );
      }, 1000);
    }
  };

  const [content, setContent] = useState("");

  const [AboutvideoIsOpen, setAboutVideoIsOpen] = useState(false);

  const [MapvideoIsOpen, setMapVideoIsOpen] = useState(false);

  // map importing
  const Testcomp = ({ content }) => {
    return (
      <h1 style={{ position: "absolute", top: "0", left: "0" }}>{content}</h1>
    );
  };

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  // campaigns
  const [slideIndex, setSlideIndex] = useState(null);
  const camp_h2 = useRef();
  const camp_p_second = useRef();
  const camp_p_country = useRef();
  const camp_p_date = useRef();

  const handleCampaignsSlideChanges = () => {
    if (slideIndex === 0) {
      camp_h2.current.textContent =
        camp_h2.current.getAttribute("data-h2-camp-one");
      camp_p_second.current.textContent = camp_p_second.current.getAttribute(
        "data-second-p-camp-one"
      );
      camp_p_country.current.textContent = camp_p_country.current.getAttribute(
        "data-country-p-camp-one"
      );
      camp_p_date.current.textContent = camp_p_date.current.getAttribute(
        "data-date-p-camp-one"
      );
    } else if (slideIndex === 1) {
      camp_h2.current.textContent =
        camp_h2.current.getAttribute("data-h2-camp-two");
      camp_p_second.current.textContent = camp_p_second.current.getAttribute(
        "data-second-p-camp-two"
      );
      camp_p_country.current.textContent = camp_p_country.current.getAttribute(
        "data-country-p-camp-two"
      );
      camp_p_date.current.textContent = camp_p_date.current.getAttribute(
        "data-date-p-camp-one"
      );
    } else if (slideIndex === 2) {
      camp_h2.current.textContent =
        camp_h2.current.getAttribute("data-h2-camp-three");
      camp_p_second.current.textContent = camp_p_second.current.getAttribute(
        "data-second-p-camp-three"
      );
      camp_p_country.current.textContent = camp_p_country.current.getAttribute(
        "data-country-p-camp-three"
      );
      camp_p_date.current.textContent = camp_p_date.current.getAttribute(
        "data-date-p-camp-three"
      );
    }
  };
  handleCampaignsSlideChanges();

  // ourlatestnews
  const [slideIndexNews, setSlideIndexNews] = useState(null);
  const news_h6 = useRef();
  const news_span_date = useRef();
  const news_span_country = useRef();
  const news_p_title = useRef();
  const handleNewsSlideChanges = () => {
    if (slideIndexNews === 0) {
      news_h6.current.textContent =
        news_h6.current.getAttribute("data-h6-news-one");
      news_span_date.current.textContent = news_span_date.current.getAttribute(
        "data-span-news-date-one"
      );
      news_span_country.current.textContent =
        news_span_country.current.getAttribute("data-span-news-country-one");
      news_p_title.current.textContent = news_p_title.current.getAttribute(
        "data-p-news-title-one"
      );
    } else if (slideIndexNews === 1) {
      news_h6.current.textContent =
        news_h6.current.getAttribute("data-h6-news-tow");
      news_span_date.current.textContent = news_span_date.current.getAttribute(
        "data-span-news-date-tow"
      );
      news_span_country.current.textContent =
        news_span_country.current.getAttribute("data-span-news-country-tow");
      news_p_title.current.textContent = news_p_title.current.getAttribute(
        "data-p-news-title-tow"
      );
    } else if (slideIndexNews === 2) {
      news_h6.current.textContent =
        news_h6.current.getAttribute("data-h6-news-three");
      news_span_date.current.textContent = news_span_date.current.getAttribute(
        "data-span-news-date-three"
      );
      news_span_country.current.textContent =
        news_span_country.current.getAttribute("data-span-news-country-three");
      news_p_title.current.textContent = news_p_title.current.getAttribute(
        "data-p-news-title-three"
      );
    }
  };
  handleNewsSlideChanges();

  const [smType, setSmType] = useState("id-fb");

  const handleNewsChange = (id) => {
    setSmType(id);
  };

  const FIRST_IMAGE = {
    imageUrl: afterImg,
  };

  const SECOND_IMAGE = {
    imageUrl: beforeImg,
  };

  useEffect(() => {
    AOS.init();
  }, []);

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

  const [mapSpanActive, setMapSpanActive] = useState(0);

  const MapSpanActiveOnclick = (el) => {
    setMapSpanActive(el);
  };

  var MapSpanActiveColor = {
    color: "#2b3990",
  };

  var MapSpanNotActiveColor = {
    color: "#707070",
  };

  // console.log(iconId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleRedirect = (value) => {
    if (value === "Seasonal") {
      window.location.replace("https://rahmaww.org/#/udhia");
    } else {
      window.location.replace(`https://rahmaww.org?form=${value}`);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        data && (
          <>
            <NavBar />
            {windosY >= 550 ? <DonateBtnAndsocialMedia /> : ""}
            <div className="homepage">
              <div className="hero-section">
                <div className="animation-screen">
                  <div className="container">
                    <div className="donate-now">
                      <motion.h4
                        variants={TextHeroVariants}
                        initial="hidden"
                        animate={handleAnimate ? "visible" : "heddin"}
                        ref={mainH4Title}
                        layout
                        data-environment-h4={data["heros"][0]?.title}
                        data-protection-h4={data["heros"][1]?.title}
                        data-shelter-h4={data["heros"][2]?.title}
                        data-nutrition-h4={data["heros"][3]?.title}
                        data-orphan-sponsorship-h4={data["heros"][4]?.title}
                        data-food-h4={data["heros"][5]?.title}
                        data-health-h4={data["heros"][6]?.title}
                        data-education-h4={data["heros"][7]?.title}
                        data-w-a-s-h-h4={data["heros"][8]?.title}
                        data-non-food-items-h4={data["heros"][9]?.title}
                      >
                        {data["heros"][0]?.title}
                      </motion.h4>
                      <motion.button
                        variants={buttonHeroVariants}
                        layout
                        className="donateBtnHomeHero"
                        initial="hidden"
                        style={{ width: "220px", height: "70px" }}
                        animate="visible"
                      >
                        {iconId === 1 ? (
                          <a onClick={() => handleRedirect("Shelter")}>
                            DONATE NOW
                          </a>
                        ) : iconId === 2 ? (
                          <a onClick={() => handleRedirect("Shelter")}>
                            DONATE NOW
                          </a>
                        ) : iconId === 3 ? (
                          <a onClick={() => handleRedirect("Shelter")}>
                            DONATE NOW
                          </a>
                        ) : iconId === 4 ? (
                          <a onClick={() => handleRedirect("Nutrition")}>
                            DONATE NOW
                          </a>
                        ) : iconId === 5 ? (
                          <a onClick={() => handleRedirect("Seasonal")}>
                            DONATE NOW
                          </a>
                        ) : iconId === 6 ? (
                          <a onClick={() => handleRedirect("Food")}>
                            DONATE NOW
                          </a>
                        ) : iconId === 7 ? (
                          <a onClick={() => handleRedirect("Health")}>
                            DONATE NOW
                          </a>
                        ) : iconId === 8 ? (
                          <a onClick={() => handleRedirect("Education")}>
                            DONATE NOW
                          </a>
                        ) : iconId === 9 ? (
                          <a onClick={() => handleRedirect("WASH")}>
                            DONATE NOW
                          </a>
                        ) : iconId === 10 ? (
                          <a onClick={() => handleRedirect("NFI")}>
                            DONATE NOW
                          </a>
                        ) : (
                          <></>
                        )}

                        {/* <a href=""></a>
                        <a href=""></a>
                        <a href=""></a> */}
                        {/* <a
                          target="blank"
                          rel="noopener noreferrer"
                          href={
                            iconId === 1
                              ? "https://rahmaww.donorsupport.co/-/XJNGCZEZ"
                              : iconId === 2
                              ? "https://rahmaww.donorsupport.co/-/XJZSVUBB"
                              : iconId === 3
                              ? "https://rahmaww.donorsupport.co/-/XWVRMWTP"
                              : iconId === 4
                              ? "https://rahmaww.donorsupport.co/-/XJNGCZEZ"
                              : iconId === 5
                              ? "https://rahmaww.donorsupport.co/-/XJZSVUBB"
                              : iconId === 6
                              ? "https://rahmaww.donorsupport.co/-/XQEWQQHD"
                              : iconId === 7
                              ? "https://rahmaww.donorsupport.co/-/XHLDJMLM"
                              : iconId === 8
                              ? "https://rahmaww.donorsupport.co/-/XZEQAVHE"
                              : iconId === 9
                              ? "https://rahmaww.donorsupport.co/-/XAJKZXKZ"
                              : iconId === 10
                              ? "https://rahmaww.donorsupport.co/-/XHSPSPAY"
                              : "https://rahmaww.donorsupport.co/-/XWVRMWTP"
                          }
                          style={{ padding: "2rem" }}
                        >
                          DONATE NOW
                        </a> */}
                      </motion.button>
                      <div>
                        <motion.a
                          variants={facebookHeroVariants}
                          initial="hidden"
                          animate="visible"
                          href="https://www.facebook.com/RahmaWorldwide/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </motion.a>
                        <motion.a
                          variants={instaHeroVariants}
                          initial="hidden"
                          animate="visible"
                          href="https://www.instagram.com/rahmaworldwide/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </motion.a>
                        <motion.a
                          variants={twitterHeroVariants}
                          initial="hidden"
                          animate="visible"
                          href="https://twitter.com/rahmaworldwide"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </motion.a>
                        <motion.a
                          variants={youtubeHeroVariants}
                          initial="hidden"
                          animate="visible"
                          href="https://www.youtube.com/c/RahmaWorldwide"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-youtube"></i>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <div className="hero-hand-img">
                    <AnimatePresence>
                      {setHandleAnimate && (
                        <motion.img
                          variants={HandimageVariants}
                          initial="hidden"
                          animate={
                            handleAnimate
                              ? { y: 0, transition: { duration: 1.5 } }
                              : { y: 600, transition: { duration: 1.5 } }
                          }
                          src={data["heros"][0]?.center_image}
                          ref={handImage}
                          // exit={{ y: 500, transition: { duration: 6 } }}
                          layout
                          data-environment-handimage={
                            data["heros"][0]?.center_image
                          }
                          data-protection-handimage={
                            data["heros"][1]?.center_image
                          }
                          data-shelter-handimage={
                            data["heros"][2]?.center_image
                          }
                          data-nutrition-handimage={
                            data["heros"][3]?.center_image
                          }
                          data-orphan-sponsorship-handimage={
                            data["heros"][4]?.center_image
                          }
                          data-food-handimage={data["heros"][5]?.center_image}
                          data-health-handimage={data["heros"][6]?.center_image}
                          data-education-handimage={
                            data["heros"][7]?.center_image
                          }
                          data-w-a-s-h-handimage={
                            data["heros"][8]?.center_image
                          }
                          data-non-food-items-handiImage={
                            data["heros"][9]?.center_image
                          }
                          alt="hero middle img"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="hero-main-img">
                    <div></div>
                    <AnimatePresence>
                      {setHandleAnimate && (
                        <motion.img
                          variants={RightimageVariants}
                          initial="hidden"
                          animate={
                            handleAnimate
                              ? { x: 0, transition: { duration: 1 } }
                              : { x: 450, transition: { duration: 1 } }
                          }
                          src={data["heros"][0]?.right_image}
                          ref={mainRightImage}
                          layout
                          data-environment-rightimage={
                            data["heros"][0]?.right_image
                          }
                          data-protection-rightimage={
                            data["heros"][1]?.right_image
                          }
                          data-shelter-rightimage={
                            data["heros"][2]?.right_image
                          }
                          data-nutrition-rightimage={
                            data["heros"][3]?.right_image
                          }
                          data-orphan-sponsorship-rightimage={
                            data["heros"][4]?.right_image
                          }
                          data-food-rightimage={data["heros"][5]?.right_image}
                          data-health-rightimage={data["heros"][6]?.right_image}
                          data-education-rightimage={
                            data["heros"][7]?.right_image
                          }
                          data-w-a-s-h-rightimage={
                            data["heros"][8]?.right_image
                          }
                          data-non-food-items-rightimage={
                            data["heros"][9]?.right_image
                          }
                          alt="hero right img"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="animation-remotecontrol">
                <div className="container">
                  <Swiper
                    slidesPerView="auto"
                    spaceBetween={0}
                    freeMode={false}
                    modules={[FreeMode]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div
                        className={
                          iconId === 1
                            ? "boxbeforestyle environment active"
                            : "environment box-style"
                        }
                        onClick={() => (
                          handleIconClick(1), setHandleAnimate(false)
                        )}
                        id="donate-option"
                      >
                        <div>
                          <div className="circle"></div>
                          <HeroSvgicon2 />
                        </div>
                        <p>Environment</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          iconId === 5
                            ? "boxbeforestyle orphan-sponsorship active"
                            : "orphan-sponsorship box-style"
                        }
                        onClick={() => handleIconClick(5)}
                        id="donate-option"
                      >
                        <div>
                          <div className="circle"></div>
                          <HeroSvgicon6 />
                        </div>
                        <p>Seasonal Campaigns</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          iconId === 2
                            ? "boxbeforestyle protection active"
                            : "protection box-style"
                        }
                        onClick={() => (
                          handleIconClick(2), setHandleAnimate(false)
                        )}
                        id="donate-option"
                      >
                        <div>
                          <div className="circle"></div>
                          <HeroSvgicon3 />
                        </div>
                        <p>Protection</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          iconId === 3
                            ? "boxbeforestyle shelter active"
                            : "shelter box-style"
                        }
                        onClick={() => handleIconClick(3)}
                        id="donate-option"
                      >
                        <div>
                          <div className="circle"></div>
                          <HeroSvgicon4 />
                        </div>
                        <p>Shelter</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          iconId === 4
                            ? "boxbeforestyle nutrition active"
                            : "nutrition box-style"
                        }
                        onClick={() => handleIconClick(4)}
                        id="donate-option"
                      >
                        <div>
                          <div className="circle"></div>
                          <HeroSvgicon5 />
                        </div>
                        <p>Nutrition</p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div
                        className={
                          iconId === 6
                            ? "boxbeforestyle food active"
                            : "food box-style"
                        }
                        onClick={() => handleIconClick(6)}
                        id="donate-option"
                      >
                        <div>
                          <div className="circle"></div>
                          <HeroSvgicon7 />
                        </div>
                        <p>Food</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          iconId === 7
                            ? "boxbeforestyle health active"
                            : "health box-style"
                        }
                        onClick={() => handleIconClick(7)}
                        id="donate-option"
                      >
                        <div>
                          <div className="circle"></div>
                          <HeroSvgicon8 />
                        </div>
                        <p>Health</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          iconId === 8
                            ? "boxbeforestyle education active"
                            : "education box-style"
                        }
                        onClick={() => handleIconClick(8)}
                        id="donate-option"
                      >
                        <div>
                          <div className="circle"></div>
                          <HeroSvgicon9 style={{ transform: "scale(0.9)" }} />
                        </div>
                        <p>Education</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          iconId === 9
                            ? "boxbeforestyle w-a-s-h active"
                            : "w-a-s-h box-style"
                        }
                        onClick={() => handleIconClick(9)}
                        id="donate-option"
                      >
                        <div>
                          <div className="circle"></div>
                          <HeroSvgicon10 />
                        </div>
                        <p>W.A.S.H</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          iconId === 10
                            ? "boxbeforestyle non-food-items active"
                            : "non-food-items box-style"
                        }
                        onClick={() => handleIconClick(10)}
                        id="donate-option"
                      >
                        <div>
                          <div className="circle"></div>
                          <HeroSvgicon11 />
                        </div>
                        <p>Non-Food Items</p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>

              {/* {!data["events"].title === "" &&
              !data["events"].description === "" &&
              !data["events"].image === null ? (
                <></>
              ) : (
                <div
                  className="campaingns EVENTS"
                  style={{
                    backgroundColor: "transparent",
                    marginBottom: "5rem",
                  }}
                >
                  <div className="container">
                    <section className="campaingns-container">
                      <div className="campaingns-img-slider">
                        <h3>EVENTS</h3>
                        <Swiper
                          cssMode={true}
                          navigation={true}
                          mousewheel={true}
                          keyboard={true}
                          modules={[]}
                          className="mySwiper new-events-section-mod"
                          style={{ width: "529px", height: "457px" }}
                          onSlideChange={(swiper) =>
                            setSlideIndex(swiper.realIndex)
                          }
                        >
                          <SwiperSlide>
                            <img
                              src={data["events"]?.image}
                              alt={data["events"]?.title}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div className="context">
                        <img src={bulls} alt="small bulls img" />
                        <h2>
                          {data["events"]?.title.length > 50
                            ? data["events"]?.title.slice(0, 50) + "..."
                            : data["events"]?.title}
                        </h2>
                        <p style={{ whiteSpace: "break-spaces" }}>
                          {data["events"]?.description.length > 350
                            ? data["events"]?.description.slice(0, 350) + "..."
                            : data["events"]?.description}
                        </p>
                        <div>
                          <div>
                            <i class="fa-solid fa-location-dot"></i>
                            <p>{data["events"]?.region.country}</p>
                            <i class="fa-solid fa-calendar-days"></i>{" "}
                            <p>{data["events"]?.published_date.slice(0, 10)}</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              )} */}

              <div className="aboutus-section" style={{ position: "relative" }}>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={AboutvideoIsOpen}
                  videoId={data["aboutus_section"]?.video_link_code}
                  onClose={() => setAboutVideoIsOpen(false)}
                />
                <div
                  className="container"
                  style={{ position: "relative", zIndex: "100" }}
                >
                  <div
                    className="about"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="about-text-video">
                      <h1 className="h1-styles">
                        ABOUT <span>US</span>
                      </h1>
                      <h4 style={{ whiteSpace: "break-spaces" }}>
                        {data["aboutus_section"]?.sub_title}
                      </h4>
                      <p style={{ whiteSpace: "break-spaces" }}>
                        {data["aboutus_section"]?.description}
                      </p>
                      <ul>
                        <li>
                          <i className="fa-solid fa-check"></i>{" "}
                          {data["aboutus_section"]?.value_1}
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>{" "}
                          {data["aboutus_section"]?.value_2}
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>{" "}
                          {data["aboutus_section"]?.value_3}
                        </li>
                      </ul>
                      <div className="video">
                        <button
                          className="btn-primary"
                          onClick={() => setAboutVideoIsOpen(true)}
                        >
                          <PlayIcon />
                        </button>
                        <h6>
                          <span>Watch</span> video
                        </h6>
                      </div>
                    </div>
                    <div className="about-images">
                      <div>
                        <img src={data["aboutus_section"]?.image_1} alt="img" />
                      </div>
                      <div>
                        <img src={data["aboutus_section"]?.image_2} alt="img" />
                      </div>
                      <div>
                        <img src={data["aboutus_section"]?.image_3} alt="img" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="success-stories"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="success-stories-text">
                      <h1>SUCCESS STORIES</h1>
                      <p style={{ whiteSpace: "break-spaces" }}>
                        {data["successStories"][0]?.description}
                      </p>
                      <button>
                        <Link to="/their-stories">Read More</Link>{" "}
                        <i class="fa-solid fa-angles-right"></i>
                      </button>
                    </div>
                    <div className="success-stories-video">
                      <div>
                        <video
                          controlslist="nodownload"
                          controls
                          poster={
                            data["successStories"][0]?.video_thumbnail_image
                          }
                        >
                          <source src={data["successStories"][0]?.video} />
                          Your browser does not support the video element.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={Circle3}
                  alt=""
                  style={{
                    position: "absolute",
                    right: "50px",
                    width: "440px",
                    height: "300px",
                    top: "621px",
                    zIndex: "0",
                  }}
                />
                <img
                  src={Circle1}
                  alt=""
                  style={{
                    position: "absolute",
                    left: "-50px",
                    width: "300px",
                    height: "300px",
                    top: "700px",
                    zIndex: "0",
                  }}
                  className="aboutLastCircle"
                />
              </div>

              <div className="best_moment">
                <div
                  className="container"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <h1>
                    Join our community, in rebuilding lives for a better
                    tomorrow
                  </h1>
                  <p>
                    <i class="fa-solid fa-chevron-right"></i>
                  </p>
                  <ReactBeforeSliderComponent
                    firstImage={
                      (firstSliderImage = {
                        imageUrl: data["before_after_images"]?.before_image,
                      })
                    }
                    secondImage={
                      (secondSliderImage = {
                        imageUrl: data["before_after_images"]?.after_image,
                      })
                    }
                  />
                </div>
              </div>

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
                            {/* <div className='heddin-massage'>
                                                        <p>{form.hidden_message}
                                                        </p>
                                                    </div> */}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="campaingns">
                <div className="container">
                  <section className="campaingns-container">
                    <div className="campaingns-img-slider">
                      <h3>CAMPAIGNS</h3>
                      <Swiper
                        cssMode={true}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        onSlideChange={(swiper) =>
                          setSlideIndex(swiper.realIndex)
                        }
                      >
                        {data["campaigns"].length > 3
                          ? data["campaigns"].slice(0, 3)?.map((campaign) => (
                              <SwiperSlide key={campaign.id}>
                                <img
                                  src={campaign.image}
                                  alt={campaign.title}
                                />
                              </SwiperSlide>
                            ))
                          : data["campaigns"]?.map((campaign) => (
                              <SwiperSlide key={campaign.id}>
                                <img
                                  src={campaign.image}
                                  alt={campaign.title}
                                />
                              </SwiperSlide>
                            ))}
                      </Swiper>
                    </div>
                    <div className="context">
                      <img src={bulls} alt="small bulls img" />
                      <h2
                        data-h2-camp-one={data["campaigns"][0]?.title}
                        data-h2-camp-two={data["campaigns"][1]?.title}
                        data-h2-camp-three={data["campaigns"][2]?.title}
                        ref={camp_h2}
                      >
                        {data["campaigns"][0]?.title}
                      </h2>
                      {/* <p
                                            data-first-p-camp-one='MONTREAL, QC. 111'
                                            data-first-p-camp-tow='MONTREAL, QC. 222'
                                            ref={camp_p_first}
                                        >MONTREAL, QC. {slideIndex}</p> */}
                      <p
                        data-second-p-camp-one={
                          data["campaigns"][0]?.description
                        }
                        data-second-p-camp-two={
                          data["campaigns"][1]?.description
                        }
                        data-second-p-camp-three={
                          data["campaigns"][2]?.description
                        }
                        ref={camp_p_second}
                        style={{ whiteSpace: "break-spaces" }}
                      >
                        {data["campaigns"][0]?.description}
                      </p>
                      <div>
                        <div>
                          <i class="fa-solid fa-location-dot"></i>
                          <p
                            data-country-p-camp-one={
                              data["campaigns"][0]?.region.country
                            }
                            data-country-p-camp-two={
                              data["campaigns"][1]?.region.country
                            }
                            data-country-p-camp-three={
                              data["campaigns"][2]?.region.country
                            }
                            ref={camp_p_country}
                          >
                            {data["campaigns"][0]?.region.country}
                          </p>
                          <i class="fa-solid fa-calendar-days"></i>{" "}
                          <p
                            data-date-p-camp-one={data[
                              "campaigns"
                            ][0]?.posted_at.slice(0, 10)}
                            data-date-p-camp-two={data[
                              "campaigns"
                            ][1]?.posted_at.slice(0, 10)}
                            data-date-p-camp-three={data[
                              "campaigns"
                            ][2]?.posted_at.slice(0, 10)}
                            ref={camp_p_date}
                          >
                            {data["campaigns"][0]?.posted_at.slice(0, 10)}
                          </p>
                        </div>
                        <button>
                          <Link
                            to={
                              slideIndex === null
                                ? "/udhia"
                                : slideIndex === 0
                                ? "/udhia"
                                : slideIndex === 1
                                ? "/services/8"
                                : slideIndex === 2
                                ? "/ramadan"
                                : ""
                            }
                            style={{
                              textDecoration: "none",
                              color: "#2b3990",
                              display: "inline-block",
                              width: "100%",
                              height: "100%",
                              padding: "1.5rem 1rem",
                            }}
                          >
                            Learn More
                          </Link>
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              {/* data['news'][0].title */}
              {/* data['news'][0].content */}
              {/* data['news'][0].region.country */}
              {/* data['news'][0].created_at */}
              <div className="our-latest-news" style={{ position: "relative" }}>
                <div className="container">
                  <div>
                    <h1 className="h1-styles">
                      OUR LATEST <span>NEWS</span>
                    </h1>
                  </div>
                  <section className="our-latest">
                    <div className="context">
                      <h6
                        // data-h6-news-one='“SKILLS OF EVALUATING FOREIGN FUNDING” COURSES HELD IN JORDAN 111'
                        // data-h6-news-tow='“SKILLS OF EVALUATING FOREIGN FUNDING” COURSES HELD IN JORDAN 222'
                        data-h6-news-one={data["news"][0]?.title}
                        data-h6-news-tow={data["news"][1]?.title}
                        data-h6-news-three={data["news"][2]?.title}
                        ref={news_h6}
                      >
                        {data["news"][0]?.title}
                      </h6>
                      <span
                        data-span-news-country-one={
                          data["news"][0]?.region.country
                        }
                        data-span-news-country-tow={
                          data["news"][1]?.region.country
                        }
                        data-span-news-country-three={
                          data["news"][2]?.region.country
                        }
                        ref={news_span_country}
                      >
                        {data["news"][0]?.region.country}{" "}
                      </span>
                      <span
                        data-span-news-date-one={data[
                          "news"
                        ][0]?.created_at.slice(0, 10)}
                        data-span-news-date-tow={data[
                          "news"
                        ][1]?.created_at.slice(0, 10)}
                        data-span-news-date-three={data[
                          "news"
                        ][2]?.created_at.slice(0, 10)}
                        ref={news_span_date}
                      >
                        {" "}
                        {data["news"][0]?.created_at.slice(0, 10)}
                      </span>
                      <p
                        // data-p-news-title-one='Rahma Worldwide collaborated with
                        // the Department of Foreign Societies
                        // at the Jordanian
                        // Ministry of Social Development, held
                        // a workshop entitled “Skills of
                        // Evaluating Foreign Funding”
                        // which revolved around the
                        // legislation and governing foreign
                        // funding and the mechanism
                        // of its application for organizations
                        // operating in Jordan. Rahma
                        // Worldwide’s Representative
                        // in Jordan… 111'
                        // data-p-news-title-tow='Rahma Worldwide collaborated with
                        // the Department of Foreign Societies
                        // at the Jordanian
                        // Ministry of Social Development, held
                        // a workshop entitled “Skills of
                        // Evaluating Foreign Funding”
                        // which revolved around the
                        // legislation and governing foreign
                        // funding and the mechanism
                        // of its application for organizations
                        // operating in Jordan. Rahma
                        // Worldwide’s Representative
                        // in Jordan… 222'
                        data-p-news-title-one={data["news"][0]?.content}
                        data-p-news-title-tow={data["news"][1]?.content}
                        data-p-news-title-three={data["news"][2]?.content}
                        ref={news_p_title}
                      >
                        {data["news"][0]?.content}
                      </p>
                      <figure></figure>
                    </div>
                    <div className="img-slider">
                      <Swiper
                        cssMode={true}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        onSlideChange={(swiper) =>
                          setSlideIndexNews(swiper.realIndex)
                        }
                      >
                        {data["news"].length > 3
                          ? data["news"].slice(0, 3)?.map((el) => (
                              <SwiperSlide key={el.id}>
                                <img src={el.image} alt={el.title} />
                              </SwiperSlide>
                            ))
                          : data["news"]?.map((el) => (
                              <SwiperSlide key={el.id}>
                                <img src={el.image} alt={el.title} />
                              </SwiperSlide>
                            ))}
                      </Swiper>
                      <Link
                        to="/news"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          padding: "1rem 3rem",
                        }}
                      >
                        <button>
                          <i class="fa-solid fa-arrow-right"></i>READ MORE
                        </button>
                      </Link>
                    </div>
                    <div className="social-media-filter">
                      <div className="social-media">
                        <div className="social-icons">
                          <div onClick={() => handleNewsChange("id-fb")}>
                            <i
                              style={{ color: smType === "id-fb" && "#3b5998" }}
                              className="fa-brands fa-facebook-f"
                            ></i>
                          </div>
                          <div onClick={() => handleNewsChange("id-tw")}>
                            <i
                              style={{ color: smType === "id-tw" && "#1DA1F2" }}
                              className="fa-brands fa-twitter"
                            ></i>
                          </div>
                          <div onClick={() => handleNewsChange("id-ins")}>
                            <i
                              style={{
                                color: smType === "id-ins" && "#bc2a8d",
                              }}
                              className="fa-brands fa-instagram"
                            ></i>
                          </div>
                          <div onClick={() => handleNewsChange("id-yt")}>
                            <i
                              style={{ color: smType === "id-yt" && "#FF0000" }}
                              className="fa-brands fa-youtube"
                            ></i>
                          </div>
                        </div>
                        {smType === "id-fb" ? (
                          <>
                            {data["fb_posts"]?.map((el) => (
                              <div key={el.id} className="social-box">
                                <img src={el.image} alt="img" />
                                <div className="info_parent_box">
                                  <div>
                                    <span>{el.region.country}</span>
                                    <br />
                                    <b>{el.title}</b>
                                    <p>
                                      {el.content.length < 200
                                        ? el.content
                                        : el.content.slice(0, 200)}
                                      ...
                                    </p>
                                  </div>
                                  <div>
                                    <span>{el.created_at.slice(0, 10)}</span>
                                    <a
                                      href={el.post_link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <i class="fa-solid fa-arrow-right-long"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        ) : smType === "id-tw" ? (
                          <>
                            {data["tw_posts"]?.map((el) => (
                              <div key={el.id} className="social-box">
                                <img src={el.image} alt="img" />
                                <div className="info_parent_box">
                                  <div>
                                    <span>{el.region.country}</span>
                                    <br />
                                    <b>{el.title}</b>
                                    <p>
                                      {el.content.length < 200
                                        ? el.content
                                        : el.content.slice(0, 200)}
                                      ...
                                    </p>
                                  </div>
                                  <div>
                                    <span>{el.created_at.slice(0, 10)}</span>
                                    <a
                                      href={el.post_link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <i class="fa-solid fa-arrow-right-long"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        ) : smType === "id-ins" ? (
                          <>
                            {data["insta_posts"]?.map((el) => (
                              <div key={el.id} className="social-box">
                                <img src={el.image} alt="img" />
                                <div className="info_parent_box">
                                  <div>
                                    <span>{el.region.country}</span>
                                    <br />
                                    <b>{el.title}</b>
                                    <p>
                                      {el.content.length < 200
                                        ? el.content
                                        : el.content.slice(0, 200)}
                                      ...
                                    </p>
                                  </div>
                                  <div>
                                    <span>{el.created_at.slice(0, 10)}</span>
                                    <a
                                      href={el.post_link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <i class="fa-solid fa-arrow-right-long"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        ) : smType === "id-yt" ? (
                          <>
                            {data["yt_posts"]?.map((el) => (
                              <div key={el.id} className="social-box">
                                <img src={el.image} alt="img" />
                                <div className="info_parent_box">
                                  <div>
                                    <span>{el.region.country}</span>
                                    <br />
                                    <b>{el.title}</b>
                                    <p>
                                      {el.content.length < 200
                                        ? el.content
                                        : el.content.slice(0, 200)}
                                      ...
                                    </p>
                                  </div>
                                  <div>
                                    <span>{el.created_at.slice(0, 10)}</span>
                                    <a
                                      href={el.post_link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <i class="fa-solid fa-arrow-right-long"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </section>
                </div>
                <img
                  src={Circle5}
                  alt=""
                  style={{
                    position: "absolute",
                    right: "965px",
                    width: "303px",
                    height: "300px",
                    top: "615px",
                    zIndex: "0",
                  }}
                />
              </div>

              <div className="map-world" style={{ position: "relative" }}>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={MapvideoIsOpen}
                  videoId="X9uLXfjpzho"
                  onClose={() => setMapVideoIsOpen(false)}
                />
                <div
                  className="container"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div>
                    <h3>WORLD MAP SHOWS SOME OF OUR CURRENT</h3>
                    <h4>WORK AROUND THE WORLD</h4>
                    <h5>
                      Rahma worldwide has different programs implemented in each
                      country. Their humanitarian aid reaches various countries
                      including:
                    </h5>
                    <h5 onMouseOver={() => mapClickCountryNameFunction()}>
                      <span
                        id="US_span"
                        data-country-check="United States of America"
                        data-country-id="US"
                        className="span_map_controler"
                        onClick={() => MapSpanActiveOnclick(1)}
                        style={
                          mapSpanActive == 1 &&
                          countyName === "United States of America"
                            ? MapSpanActiveColor
                            : MapSpanNotActiveColor
                        }
                      >
                        UNITED STATES
                      </span>{" "}
                      –{" "}
                      <span
                        className="span_map_controler"
                        id="SL_span"
                        data-country-check="Sierra Leone"
                        data-country-id="SL"
                        onClick={() => MapSpanActiveOnclick(2)}
                        style={
                          mapSpanActive == 2 && countyName === "Sierra Leone"
                            ? MapSpanActiveColor
                            : MapSpanNotActiveColor
                        }
                      >
                        SIERRA LEONE
                      </span>{" "}
                      –{" "}
                      <span
                        className="span_map_controler"
                        id="JO_span"
                        data-country-check="Jordan"
                        data-country-id="JO"
                        onClick={() => MapSpanActiveOnclick(3)}
                        style={
                          mapSpanActive == 3 && countyName === "Jordan"
                            ? MapSpanActiveColor
                            : MapSpanNotActiveColor
                        }
                      >
                        JORDAN
                      </span>{" "}
                      –{" "}
                      <span
                        className="span_map_controler"
                        id="LB_span"
                        data-country-check="Lebanon"
                        data-country-id="LB"
                        onClick={() => MapSpanActiveOnclick(4)}
                        style={
                          mapSpanActive == 4 && countyName === "Lebanon"
                            ? MapSpanActiveColor
                            : MapSpanNotActiveColor
                        }
                      >
                        LEBANON
                      </span>{" "}
                      –{" "}
                      <span
                        className="span_map_controler"
                        id="PS_span"
                        data-country-check="Palestine"
                        data-country-id="PS"
                        onClick={() => MapSpanActiveOnclick(5)}
                        style={
                          mapSpanActive == 5 && countyName === "Palestine"
                            ? MapSpanActiveColor
                            : MapSpanNotActiveColor
                        }
                      >
                        PALESTINE
                      </span>{" "}
                      –{" "}
                      <span
                        className="span_map_controler"
                        id="SY_span"
                        data-country-check="Syria"
                        data-country-id="SY"
                        onClick={() => MapSpanActiveOnclick(6)}
                        style={
                          mapSpanActive == 6 && countyName === "Syria"
                            ? MapSpanActiveColor
                            : MapSpanNotActiveColor
                        }
                      >
                        SYRIA
                      </span>{" "}
                      –{" "}
                      <span
                        className="span_map_controler"
                        id="TR_span"
                        data-country-check="Turkey"
                        data-country-id="TR"
                        onClick={() => MapSpanActiveOnclick(7)}
                        style={
                          mapSpanActive == 7 && countyName === "Turkey"
                            ? MapSpanActiveColor
                            : MapSpanNotActiveColor
                        }
                      >
                        TURKEY
                      </span>{" "}
                      –{" "}
                      <span
                        className="span_map_controler"
                        id="YE_span"
                        data-country-check="Yemen"
                        data-country-id="YE"
                        onClick={() => MapSpanActiveOnclick(8)}
                        style={
                          mapSpanActive == 8 && countyName === "Yemen"
                            ? MapSpanActiveColor
                            : MapSpanNotActiveColor
                        }
                      >
                        YEMEN
                      </span>{" "}
                      - <span style={{ fontWeight: "600" }}>MYANMAR</span> -{" "}
                      <span style={{ fontWeight: "600" }}>UAE</span>
                    </h5>
                  </div>
                  <section className="map">
                    <motion.div
                      onMouseOver={() => mapFunction()}
                      variants={MapContainerAnimate}
                      initial={"hidden"}
                      animate={clicked ? "visible" : "hidden"}
                      className="the-map"
                      id="MapContainer"
                    >
                      <MapComponent />
                      <div className="video">
                        <button
                          className="btn-primary"
                          onClick={() => setMapVideoIsOpen(true)}
                        >
                          <PlayIcon />
                        </button>
                        <h6>
                          <span>Watch</span> video
                        </h6>
                      </div>
                    </motion.div>
                    {showMapInfo ? (
                      <div className="map-context">
                        <motion.h1
                          variants={maph1animation}
                          initial={"hidden"}
                          animate={clickedInfo ? "visible" : "hidden"}
                        >
                          {countyName}
                        </motion.h1>
                        {mapProgram?.map((el) => (
                          <motion.div
                            variants={
                              el.id == 0
                                ? mapContextAnimation1
                                : el.id == 1
                                ? mapContextAnimation2
                                : el.id == 2
                                ? mapContextAnimation3
                                : el.id == 3
                                ? mapContextAnimation4
                                : mapContextAnimation4
                            }
                            initial={"hidden"}
                            animate={clickedInfo ? "visible" : "hidden"}
                            key={el.id}
                          >
                            <div className="the-svg">
                              <img src={el.mainImg} />
                            </div>
                            <div>
                              <h5>
                                {String(el.total_beneficiaries).replace(
                                  /(.)(?=(\d{3})+$)/g,
                                  "$1,"
                                )}
                              </h5>
                              {/* <h5>{el.areas_served}</h5> */}
                            </div>
                            <div>
                              <Map1icon />
                              {/* <Map2icon /> */}
                            </div>
                            <div style={{ whiteSpace: "break-spaces" }}>
                              {el.description.length > 60
                                ? el.description.slice(0, 60)
                                : el.description}
                              ...
                            </div>
                          </motion.div>
                        ))}
                        <motion.button
                          variants={mapbuttonanimation}
                          initial={"hidden"}
                          to="/ramadan"
                          animate={clickedInfo ? "visible" : "hidden"}
                        >
                          <Link
                            to="/country"
                            style={{
                              color: "white",
                              display: "block",
                              padding: "0.4rem 1.7rem",
                            }}
                          >
                            <i class="fa-solid fa-arrow-right-long"></i>
                          </Link>
                        </motion.button>
                      </div>
                    ) : (
                      ""
                    )}
                  </section>
                </div>
              </div>
              <div className="supported-by">
                <div
                  className="container"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <p>
                    <i class="fa-solid fa-chevron-right"></i>
                  </p>
                  {data["awards"]?.map((el, index) => (
                    <>
                      {index % 2 === 0 ? (
                        <div key={index.id} className="secound-support">
                          <img src={el.image} alt="" />
                          <div>
                            <h4>{el.title}</h4>
                            <p>{el.description}</p>
                          </div>
                        </div>
                      ) : (
                        <div key={el.id} className="first-support">
                          <img src={el.image} alt="" />
                          <div>
                            <h4>{el.title}</h4>
                            <p>{el.description}</p>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
            <ChartComponent />
            <Footer />
          </>
        )
      )}
    </>
  );
};

export default Homepage;
