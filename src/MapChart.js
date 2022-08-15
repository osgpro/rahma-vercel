import React, { memo, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import features from "./features.json";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { Link } from "react-router-dom";
// const geoUrl =
//   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};
const MapChart = ({ setTooltipContent, history }) => {
  const mapAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };
  const palestine = "palestine";
  const countries = [
    "United States of America",
    "Turkey",
    "Syria",
    "Yemen",
    "Kenya",
    "Jordan",
    "Palestine",
    "Sierra Leone",
    "Lebanon",
    "Sudan",
    "Chad",
    "Cameroon",
    "Ghana",
    "Mali",
    "United Arab Emirates",
    "Israel",
    "Myanmar",
  ];

  const handleCountry = (value) => {
    if (value === "Israel") {
      history.push(`/where-we-work/${"Palestine"}`);
    } else {
      history.push(`/where-we-work/${value}`);
    }
  };

  return (
    <>
      <ComposableMap
        data-tip=""
        projectionConfig={{ scale: 200 }}
        viewBox="0 130 800 150"
      >
        <Geographies geography={features}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <>
                {console.log(geo)}
                {/* {console.log(geo)} */}
                {/* geo.properties.NAME !== "United States of America" */}
                {!countries.includes(geo.properties.name) ? (
                  <>
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      // onMouseEnter={() => {
                      //     const { NAME, POP_EST } = geo.properties;
                      //     setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                      // }}
                      // onMouseLeave={() => {
                      //     setTooltipContent("");
                      // }}
                      style={{
                        default: {
                          fill: "white",
                          // stroke: "",
                          outline: "none",
                        },
                        hover: {
                          fill: "white",
                          outline: "none",
                        },
                        pressed: {
                          fill: "white",
                          outline: "none",
                          stroke: "none",
                        },
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const { name } = geo.properties;
                        setTooltipContent(`${name}`);
                      }}
                      onMouseDown={() => {
                        console.log(geo.properties.name);
                        const { name } = geo.properties;
                        handleCountry(name);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                        <></>;
                      }}
                      className="country"
                      style={{
                        default: {
                          fill: "#29842A",
                          outline: "none",
                        },
                        hover: {
                          fill: "#2B3990",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#2B3990",
                          outline: "none",
                        },
                      }}
                    ></Geography>
                  </>
                )}
              </>
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};
export default memo(MapChart);
