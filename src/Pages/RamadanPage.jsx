import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import ChartComponent from "../Components/ChartComponent";
// import navbar and footer
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ImgSection from "../Components/ImgSection";
import { motion } from "framer-motion";
import bost from "../Assets/images/bost-03.jpg";

import heroBg from "../Assets/images/ramadanPageHeroBg-02.png";
import RamadanContext from "../ramadan.js";

import bost1 from "../Assets/images/bost1.jpg";
import bost2 from "../Assets/images/bost2.jpg";
import bost3 from "../Assets/images/bost3.jpg";

import bost4 from "../Assets/images/after-before-slider-01.jpg";
import bost5 from "../Assets/images/after-before-slider-02.jpg";
import bost6 from "../Assets/images/1M5A9432.JPG";

import Africa from "../Assets/images/Africa.jpg";
import Jordan from "../Assets/images/Jordan.jpg";
import Lebanon from "../Assets/images/Lebanon.jpg";
import palestine from "../Assets/images/palestine.jpg";
import syria from "../Assets/images/syria.jpg";
import yaman from "../Assets/images/yaman.jpg";

import child from "../Assets/images/child.jpg";
import { useEffect } from "react";

const Ramadan = () => {
  console.log(RamadanContext[0].nameAr);
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

  // framer motion variants
  const HandimageVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  const [TheId, setTheId] = useState(0);

  const [firstDonate, setFirstDonate] = useState(true);
  const [secoundDonate, setSecoundDonate] = useState(false);
  const [thirdDonate, setThirdDonate] = useState(false);
  const [Donate4, setDonate4] = useState(false);
  const [Donate5, setDonate5] = useState(false);

  const handleChange = (e) => {
    setTheId(e);
  };

  const handleChangePrice1 = (e) => {
    setFirstDonate(true);
    setSecoundDonate(false);
    setThirdDonate(false);
    setDonate5(false);
    setDonate4(false);
  };

  const handleChangePrice2 = (e) => {
    setFirstDonate(false);
    setSecoundDonate(true);
    setThirdDonate(false);
    setDonate5(false);
    setDonate4(false);
  };

  const handleChangePrice3 = (e) => {
    setFirstDonate(false);
    setSecoundDonate(false);
    setThirdDonate(true);
    setDonate5(false);
    setDonate4(false);
  };

  const handleChangePrice4 = (e) => {
    setFirstDonate(false);
    setSecoundDonate(false);
    setThirdDonate(false);
    setDonate5(false);
    setDonate4(true);
  };

  const handleChangePrice5 = (e) => {
    setFirstDonate(false);
    setSecoundDonate(false);
    setThirdDonate(false);
    setDonate5(true);
    setDonate4(false);
  };

  var bgColor = {
    backgroundColor: "#2b7634",
  };
  var bgColorblue = {
    backgroundColor: "#2b3990",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#f3f0ea" }}>
        <NavBar pass="active" />
        {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
        <div className="ramadanPage">
          <div className="hero-section">
            <div className="animation-screen">
              <div className="container">
                <div className="donate-now">
                  <div className="container">
                    <motion.h4
                      variants={TextHeroVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      RAMADAN 2022
                    </motion.h4>
                    <motion.button
                      variants={buttonHeroVariants}
                      className="donateBtnHomeHero"
                      initial="hidden"
                      style={{ width: "220px", height: "70px" }}
                      animate="visible"
                    >
                      <a href="https://rahmaww.donorsupport.co/-/XGDAEUZV">
                        {" "}
                        DONATE NOW
                      </a>
                    </motion.button>
                    <div className="links-cont">
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
                  <div></div>
                  <motion.img
                    variants={HandimageVariants}
                    initial="hidden"
                    animate="visible"
                    src={heroBg}
                    alt="hero middle img"
                  />
                </div>
              </div>
            </div>
          </div>
          <section className="ramadan_new_section">
            <div className="container">
              <h1 className="Maintitle h1-styles">
                RAMADAN <span>CAMPAIGNS</span>
              </h1>
              <div className="new_section">
                <div className="img-buttons">
                  <div className="image_cont">
                    <img
                      src={
                        TheId == 0
                          ? syria
                          : TheId == 1
                          ? syria
                          : TheId == 2
                          ? syria
                          : TheId == 3
                          ? palestine
                          : TheId == 4
                          ? Jordan
                          : TheId == 5
                          ? yaman
                          : TheId == 6
                          ? Africa
                          : ""
                      }
                      alt=""
                    />
                  </div>
                  <div className="buttons">
                    {/* <button onClick={() => handleChange(1)}>Kitchen Ramadan <br />مطبخ رمضان </button> */}
                    <button
                      onClick={() => handleChange(2)}
                      style={
                        TheId == 2
                          ? bgColor
                          : TheId == 0
                          ? bgColor
                          : bgColorblue
                      }
                    >
                      Ramadan Iftar Meals
                      <br />
                      <p>إفطار صائم </p>
                    </button>
                    <button
                      onClick={() => handleChange(3)}
                      style={TheId == 3 ? bgColor : bgColorblue}
                    >
                      Eid clothes
                      <br />
                      <p>كسوة عيد</p>
                    </button>
                    <button
                      onClick={() => handleChange(4)}
                      style={TheId == 4 ? bgColor : bgColorblue}
                    >
                      Orphan Sponsorship
                      <br />
                      <p>كفالة أيتام </p>
                    </button>
                    <button
                      onClick={() => handleChange(5)}
                      style={TheId == 5 ? bgColor : bgColorblue}
                    >
                      Ramadan Food Basket
                      <br />
                      <p> سلة رمضانية </p>
                    </button>
                    <button
                      onClick={() => handleChange(6)}
                      style={TheId == 6 ? bgColor : bgColorblue}
                    >
                      Zakat al-Fitr
                      <br />
                      <p>زكاة الفطر</p>
                    </button>
                  </div>
                </div>

                <div className="render_data">
                  {/* <h4 style={{ textAlign: 'right', marginBottom: '1rem' }}>
                                        {TheId == 0 ? RamadanContext[0].name2 : TheId == 1 ? RamadanContext[0].name2 : TheId == 2 ? RamadanContext[0].name3 : TheId == 3 ? RamadanContext[0].name4 : TheId == 4 ? RamadanContext[0].name5 : TheId == 5 ? RamadanContext[0].name6 : TheId == 6 ? RamadanContext[0].name7 : ''}
                                    </h4> */}
                  <h4 style={{ textAlign: "left" }}>
                    {TheId == 0
                      ? RamadanContext[1].name3
                      : TheId == 1
                      ? RamadanContext[1].name2
                      : TheId == 2
                      ? RamadanContext[1].name3
                      : TheId == 3
                      ? RamadanContext[1].name4
                      : TheId == 4
                      ? RamadanContext[1].name5
                      : TheId == 5
                      ? RamadanContext[1].name6
                      : TheId == 6
                      ? RamadanContext[1].name7
                      : ""}
                  </h4>
                  {/* <h4 style={{ textAlign: 'right', marginBottom: '1rem', color: 'red' }}>
                                        {TheId == 0 ? RamadanContext[2].name2 : TheId == 1 ? RamadanContext[2].name2 : TheId == 2 ? RamadanContext[2].name3 : TheId == 3 ? RamadanContext[2].name4 : TheId == 4 ? RamadanContext[2].name5 : TheId == 5 ? RamadanContext[2].name6 : TheId == 6 ? RamadanContext[2].name7 : ''}
                                    </h4> */}
                  <p style={{ margin: "1rem 0" }}>
                    {TheId == 0
                      ? RamadanContext[3].name3
                      : TheId == 1
                      ? RamadanContext[3].name2
                      : TheId == 2
                      ? RamadanContext[3].name3
                      : TheId == 3
                      ? RamadanContext[3].name4
                      : TheId == 4
                      ? RamadanContext[3].name5
                      : TheId == 5
                      ? RamadanContext[3].name6
                      : TheId == 6
                      ? RamadanContext[3].name7
                      : ""}
                  </p>

                  {TheId === 0 ? (
                    <>
                      <button
                        className="price"
                        onClick={handleChangePrice1}
                        style={firstDonate == true ? bgColor : bgColorblue}
                      >
                        10$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice2}
                        style={secoundDonate == true ? bgColor : bgColorblue}
                      >
                        60$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice3}
                        style={thirdDonate == true ? bgColor : bgColorblue}
                      >
                        120$
                      </button>
                      <p>
                        {firstDonate == true
                          ? "1 Ramadan Iftar Meal for 1 Family"
                          : secoundDonate == true
                          ? "5 Ramadan Iftar Meals for 5 Families "
                          : thirdDonate == true
                          ? "10 Ramadan Iftar Meals for 10 Families"
                          : ""}
                      </p>
                    </>
                  ) : TheId === 1 ? (
                    <>
                      <button
                        className="price"
                        onClick={handleChangePrice1}
                        style={firstDonate == true ? bgColor : bgColorblue}
                      >
                        10$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice2}
                        style={secoundDonate == true ? bgColor : bgColorblue}
                      >
                        60$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice3}
                        style={thirdDonate == true ? bgColor : bgColorblue}
                      >
                        120$
                      </button>
                      <p>
                        {firstDonate == true
                          ? "1 Ramadan Iftar Meal for 1 Family"
                          : secoundDonate == true
                          ? "5 Ramadan Iftar Meals for 5 Families "
                          : thirdDonate == true
                          ? "10 Ramadan Iftar Meals for 10 Families"
                          : ""}
                      </p>
                    </>
                  ) : TheId === 2 ? (
                    <>
                      <button
                        className="price"
                        onClick={handleChangePrice1}
                        style={firstDonate == true ? bgColor : bgColorblue}
                      >
                        10$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice2}
                        style={secoundDonate == true ? bgColor : bgColorblue}
                      >
                        50$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice3}
                        style={thirdDonate == true ? bgColor : bgColorblue}
                      >
                        100$
                      </button>
                      <p>
                        {firstDonate == true
                          ? "1 Ramadan Iftar Meals for 10 Families"
                          : secoundDonate == true
                          ? "5 Ramadan Iftar Meals for 10 Families"
                          : thirdDonate == true
                          ? "10 Ramadan Iftar Meals for 10 Families"
                          : ""}
                      </p>
                    </>
                  ) : TheId === 3 ? (
                    <>
                      <button
                        className="price"
                        onClick={handleChangePrice1}
                        style={firstDonate == true ? bgColor : bgColorblue}
                      >
                        25$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice2}
                        style={secoundDonate == true ? bgColor : bgColorblue}
                      >
                        100$
                      </button>
                      <p>
                        {firstDonate == true
                          ? "Eid Clothes and Gift for 1 Child"
                          : secoundDonate == true
                          ? "Eid Clothes and Gift for 1 Family"
                          : ""}
                      </p>
                    </>
                  ) : TheId === 4 ? (
                    <>
                      <button
                        className="price"
                        onClick={handleChangePrice1}
                        style={firstDonate == true ? bgColor : bgColorblue}
                      >
                        50$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice2}
                        style={secoundDonate == true ? bgColor : bgColorblue}
                      >
                        60$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice3}
                        style={thirdDonate == true ? bgColor : bgColorblue}
                      >
                        65$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice4}
                        style={Donate4 == true ? bgColor : bgColorblue}
                      >
                        70$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice5}
                        style={Donate5 == true ? bgColor : bgColorblue}
                      >
                        75$
                      </button>
                      <p>
                        {firstDonate == true
                          ? "Sponsor an Oprhan in Africa for 1 Month"
                          : secoundDonate == true
                          ? " Sponsor an Orphan in Lebanon for 1 Month"
                          : thirdDonate == true
                          ? "Sponsor an Oprhan in Yemen for 1 Month"
                          : Donate4 == true
                          ? " Sponsor an Oprhan in Palestine for 1 Month "
                          : Donate5 == true
                          ? "Sponsor an Oprhan in Syria for 1 Month "
                          : ""}
                      </p>
                    </>
                  ) : TheId === 5 ? (
                    <>
                      <button
                        className="price"
                        onClick={handleChangePrice1}
                        style={firstDonate == true ? bgColor : bgColorblue}
                      >
                        100$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice2}
                        style={secoundDonate == true ? bgColor : bgColorblue}
                      >
                        200$
                      </button>
                      <button
                        className="price"
                        onClick={handleChangePrice3}
                        style={thirdDonate == true ? bgColor : bgColorblue}
                      >
                        300$
                      </button>
                      <p>
                        {firstDonate == true
                          ? "1 Food Basket for 1 Family for 1 Month"
                          : secoundDonate == true
                          ? "2 Food Baskets for 2 Families for 1 Month"
                          : thirdDonate == true
                          ? "3 Food Baskets for 3 Families for 1 Month"
                          : ""}
                      </p>
                    </>
                  ) : TheId === 6 ? (
                    <>
                      <button
                        className="price"
                        onClick={handleChangePrice1}
                        style={firstDonate == true ? bgColor : bgColorblue}
                      >
                        15$
                      </button>
                      <p>{firstDonate == true ? "Per Persons" : ""}</p>
                    </>
                  ) : (
                    ""
                  )}

                  {/* <p style={{ margin: '1rem 0' }}>
                                        {TheId == 0 ? RamadanContext[4].name2 : TheId == 1 ? RamadanContext[4].name2 : TheId == 2 ? RamadanContext[4].name3 : TheId == 3 ? RamadanContext[4].name4 : TheId == 4 ? RamadanContext[4].name5 : TheId == 5 ? RamadanContext[4].name6 : TheId == 6 ? RamadanContext[4].name7 : ''}
                                    </p> */}
                  <a href="https://rahmaww.donorsupport.co/-/XGDAEUZV">
                    <button className="donateBtn">DONATE NOW</button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="MainTitlediv">
            <h1 className="Maintitle center">THE PROPHET & MESSENGER OF </h1>{" "}
            <h1 className="Maintitle center">GOD (PBUH) ONCE SAID</h1>
          </div>

          <Container className="textCon" style={{ marginBottom: "2rem" }}>
            <div className="videoDiv">
              <iframe
                className="videoBox videoBox1"
                src="https://www.youtube.com/embed/kmaPVWamclE"
              ></iframe>
            </div>
            <div className="videoDiscDiv">
              <p className="videoDiscHead">
                Ramadan has come to you. (it is) a month of blessing, in which
                god covers you with blessing, for he sends down mercy, decreases
                sins and answers prayers… in it, god looks at your competition
                (in good deeds), and boasts about you to his angels. So show god
                goodness from yourselves.
              </p>
            </div>

            <div className="MainTitlediv">
              <h1 className="Maintitle h1-styles">
                <span>RAMADAN</span> MUBARAK FROM RAHMA WORLDWIDE
              </h1>
            </div>
            <div className="discriptionPaDiv">
              <p className="discriptionPa">
                Six consecutive ramadan seasons have passed and we are
                witnessing the seventh one. Yet, the situation of the syrian
                people hasn’t been improved. It is getting even worse
              </p>
              <p className="discriptionPa">
                {" "}
                Ramadan is an opportunity to give and provide for individuals
                who are less fortunate. As our work continues to expand, it’s
                vital to reflect on what we’ve accomplished, and set out new
                challenges for us to grow. We would like to take a moment to
                thank all of our generous donors and all individuals who believe
                in our mission. This ramadan you have an opportunity to help in
                different ways
              </p>
            </div>
            <div className="MainTitlediv">
              <h1 className="Maintitle h1-styles">
                OUR <span>CHALLENGE</span>
              </h1>
            </div>
            <div className="discriptionPaDiv">
              <p className="discriptionPa">
                Over the course of these 30 days, with your continued support,
                we are aiming to feed:
              </p>
            </div>
            <div className="MainTitlediv">
              <h1 className="Maintitle">
                <span className="bluefont">1.5 MILLION</span> REFUGEE
                BENEFICIARIES.
              </h1>
            </div>
            <div className="MainTitlediv">
              <h1 className="Maintitle h1-styles">
                DELIVER RAMADAN<span>FOOD BASKETS</span>
              </h1>
            </div>
            <div className="discriptionPaDiv">
              <p className="discriptionPa">
                Another way to provide meals during ramadan is through our food
                baskets program. Each basket is accommodated to family size. Our
                challenge this month is to distribute 30,000 baskets
              </p>
            </div>

            <div className="smallTitleDiv">
              <p className="smallTitlePa">
                SPONSORING THIS CAMPAIGN FOR THE MONTH OF RAMADAN IS:{" "}
                <span className="bluefont">$120.00</span>
              </p>
            </div>
            <div className="smallTitleDiv">
              <p className="smallTitlePa">
                1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 2 WEEKS:{" "}
                <span className="bluefont">$60.00</span>
              </p>
            </div>
            <div className="smallTitleDiv">
              <p className="smallTitlePa">
                1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 1 WEEKS:{" "}
                <span className="bluefont">$30.00</span>
              </p>
            </div>
            <div className="discriptionPaDiv">
              <p className="discriptionPa">
              Another way to provide meals during ramadan is through our food baskets program. Each basket is accommodated to family size. Our challenge this month is to distribute 30,000 baskets
              </p>
            </div>
            <div className="smallTitleDiv">
              <p className="smallTitlePa">
                SPONSORING THIS CAMPAIGN FOR THE MONTH OF RAMADAN IS:{" "}
                <span className="bluefont">$120.00 USD</span>
              </p>
            </div>
            <div className="smallTitleDiv">
              <p className="smallTitlePa">
                1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 4 WEEKS:{" "}
                <span className="bluefont">$120.00</span>
              </p>
            </div>
            <div className="smallTitleDiv">
              <p className="smallTitlePa">
                1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 2 WEEKS:{" "}
                <span className="bluefont">$60.00</span>
              </p>
            </div>
            <div className="smallTitleDiv">
              <p className="smallTitlePa">
                1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 1 WEEKS:{" "}
                <span className="bluefont">$30.00</span>
              </p>
            </div>
          </Container>
          <ChartComponent bgColor="#e3e3e3" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Ramadan;
