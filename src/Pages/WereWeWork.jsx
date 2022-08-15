import React, { useState } from "react";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ReactTooltip from "react-tooltip";
import MapChart from "../MapChart";
import { motion, AnimatePresence } from "framer-motion";
import ChartComponent from "../Components/ChartComponent";
import AccordionWereWeWork from "../Components/AccordionWereWeWork";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWWWData } from "../Redux/whereWeWork";
import Loader from "../Components/Loader";

const WereWeWork = ({ history }) => {
  const dispatch = useDispatch();

  const getWWW = useSelector((state) => state.getWWWData);
  const { loading, data } = getWWW;

  const [windosY, setWindowY] = useState();
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getWWWData());
  }, [dispatch]);

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

  var colors = {
    backgroundColor: "white",
  };

  var colorsGray = {
    backgroundColor: "#2b3990",
  };

  var colorsText = {
    color: "white",
  };

  var colorsGrayText = {
    color: "#707070",
  };

  const year = new Date().getFullYear();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : data ? (
        <>
          <NavBar />
          {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
          <div style={{ backgroundColor: "#e3e3e3" }}>
            <section className="whereweworkMap">
              <div className="container">
                <p>40+ COUNTRIES</p>
                <h1>EXPLORE OUR WORK</h1>
              </div>
              <div className="map">
                <button onClick={() => setIsOpen(true)} className="btnviewList">
                  VIEW AS LIST <i class="fa-solid fa-list"></i>
                </button>
                <MapChart setTooltipContent={setContent} history={history} />
                <ReactTooltip>
                  {content.includes("Israel") ? "Palestine" : content}
                </ReactTooltip>
                <AnimatePresence>
                  {isOpen && (
                    <>
                      <button
                        onClick={() => setIsOpen(false)}
                        style={{ color: "white" }}
                        className="btnviewList"
                      >
                        VIEW AS LIST <i class="fa-solid fa-list"></i>
                      </button>
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg_map_shadow"
                      >
                        <div className="container col-6 acc_container">
                          <AccordionWereWeWork
                            regions={data}
                            setTooltipContent={setContent}
                            history={history}
                          />
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
              <div className="text">
                <figure style={isOpen == true ? colors : colorsGray}></figure>
                <p style={isOpen == true ? colorsText : colorsGrayText}>
                  RAHMA PROGRAM LOCATIONS
                </p>
              </div>
            </section>

            <section className="crisis">
              <div className="container">
                <h1 className="h1-styles">
                  CRISIS <span>WATCH</span>
                </h1>
                <h4>
                  TOP {data["crisis_watch"].length} CRISIS COUNTRIES IN {year}.
                </h4>
                <div className="seasonal_campaigns_box">
                  {data["crisis_watch"].map((el) => (
                    <div key={el.id}>
                      <img src={el.image} alt={el.name} />
                      <a
                        href={el.donation_link}
                        style={{ padding: "2rem", textDecoration: "none" }}
                      >
                        <h5
                          style={
                            el.region.country == "Syria"
                              ? bgSyria
                              : el.region.country == "Palestine"
                              ? bgPalestine
                              : el.region.country == "Turkey"
                              ? bgTurkey
                              : el.region.country == "Yemen"
                              ? bgYemen
                              : el.region.country == "Lebanon"
                              ? bgLebanon
                              : el.region.country == "USA"
                              ? bgUs
                              : el.region.country == "Africa"
                              ? bgAfrica
                              : el.region.country == "Jordan"
                              ? bgJordan
                              : bgNone
                          }
                        >
                          {el.region.country}
                        </h5>
                      </a>
                      <p>{el.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <ChartComponent bgColor="#e3e3e3" />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default WereWeWork;
