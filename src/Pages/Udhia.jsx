import React from "react";
import { useState } from "react";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import Footer from "../Components/Footer";
import bgShadow from "../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg";
import NavBar from "../Components/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUdhiaData } from "../Redux/udhia";
import Loader from "../Components/Loader";

const Udhia = () => {
  const dispatch = useDispatch();

  const getUdhia = useSelector((state) => state.getUdhiaData);
  const { loading, data } = getUdhia;

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUdhiaData());
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

  return (
    <>
      {loading && <Loader />}
      {data && (
        <>
          <NavBar pass="active" />
          {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
          <div className="Udhia_header">
            <div className="shadowONtheImage">
              <img src={bgShadow} alt="" />
            </div>
            <img src={data["data"][0].hero_image} alt="our work background" />
            <h1 className="firsth1">{data["data"][0].title}</h1>
          </div>
          <div className="seasonal_campaigns_box_udhia">
            <div className="container">
              {data["data"][0].cards.map((card) => (
                <div key={card.id}>
                  <img src={card.image} alt="" />
                  <a
                    href={card.donation_url}
                    style={{ padding: "2rem", textDecoration: "none" }}
                  >
                    <h5
                      style={
                        card.region.country == "Syria"
                          ? bgSyria
                          : card.region.country == "Palestine"
                            ? bgPalestine
                            : card.region.country == "Turkey"
                              ? bgTurkey
                              : card.region.country == "Yemen"
                                ? bgYemen
                                : card.region.country == "Lebanon"
                                  ? bgLebanon
                                  : card.region.country == "USA"
                                    ? bgUs
                                    : card.region.country == "Africa"
                                      ? bgAfrica
                                      : card.region.country == "Jordan"
                                        ? bgJordan
                                        : bgNone
                      }
                    >
                      {card.title}
                    </h5>
                  </a>
                  <p>
                    {card.description.length > 201
                      ? card.description.substring(0, 200) + "..."
                      : card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="countryVidContainerUdhia">
            <div className="container">
              <p>
                <iframe className="" src={data["data"][0].video_url}></iframe>
              </p>
            </div>
          </div>

          <div className="whatisudhia">
            <div className="container">
              <h1 className="h1-styles">
                WHAT IS <span>UDHIA?</span>
              </h1>
              <p>
                {" "}
                Udhia (Sacrifice in Arabic) is an annual ritual that brings us closer to God and that is practiced during Eid Al-Adha every year based on the tradition of prophet Abraham (peace be upon him).
                With your Udhia, we feed thousands of families all over the globe; thus, maximizing the value of your donations.
                We aim to reach more people in different places of the world; inside Syria, Lebanon, Gaza strip, Yemen, Jordan, Turkey, and various African countries.
                We can’t make every day an Udhia day, but one thing is for certain; we can make Udhia day one to Remember.
              </p>
            </div>
          </div>

          <div className="videos_section_udhia">
            <div className="container">
              <h1 className="h1-styles">
                CLIPS FROM LAST YEAR’S <span>UDHIA</span>
              </h1>
            </div>
            <div className="container">
              {data["data"][0].clips.map((clip) => (
                <div key={clip.id} className="theVideoitSelf">
                  <iframe className="videoBox" src={clip.video_url}></iframe>
                  <figure
                    style={
                      clip.region.country == "Syria"
                        ? bgSyria
                        : clip.region.country == "Palestine"
                          ? bgPalestine
                          : clip.region.country == "Turkey"
                            ? bgTurkey
                            : clip.region.country == "Yemen"
                              ? bgYemen
                              : clip.region.country == "Lebanon"
                                ? bgLebanon
                                : clip.region.country == "USA"
                                  ? bgUs
                                  : clip.region.country == "Africa"
                                    ? bgAfrica
                                    : clip.region.country == "Jordan"
                                      ? bgJordan
                                      : bgNone
                    }
                  ></figure>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Udhia;
