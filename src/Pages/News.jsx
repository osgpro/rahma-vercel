import React, { useRef, useState } from "react";
import ChartComponent from "../Components/ChartComponent";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import Footer from "../Components/Footer";
import bgShadow from "../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg";
import ourWorkBg from "../Assets/images/newsbg.jpg";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useNewsHook from "../Hooks/useNewsHook";
import Loader from "../Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../Redux/newsPage";
import InfiniteScrollLoader from "../Components/InfiniteScrollLoader";

const News = () => {
  const dispatch = useDispatch();

  const getNews = useSelector((state) => state.getNewsData);
  const { loading: NewsLoading, data, error: NewsError } = getNews;

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState("");

  const { news, hasMore, loading, error } = useNewsHook(query, pageNumber);

  const observer = useRef();

  const lastNewsElementRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  };

  const [handleChange, setHandleChange] = useState(1);

  const setButton = (el) => {
    setHandleChange(el);
  };

  function handleSearch(value) {
    setQuery(value);
    setPageNumber(1);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getNewsData());
  }, [dispatch]);

  function goTop() {
    window.scrollTo(0, 900);
  }

  var bgSyria = {
    borderColor: "#00908c",
    color: "#00908c",
  };
  var bgPalestine = {
    borderColor: "#fb9f01",
    color: "#fb9f01",
  };
  var bgTurkey = {
    borderColor: "#d95653",
    color: "#d95653",
  };
  var bgLebanon = {
    borderColor: "#1cabd6",
    color: "#1cabd6",
  };
  var bgAfrica = {
    borderColor: "#69c070",
    color: "#69c070",
  };
  var bgUs = {
    borderColor: "#30355f",
    color: "#30355f",
  };
  var bgYemen = {
    borderColor: "#dd6440",
    color: "#dd6440",
  };
  var bgJordan = {
    borderColor: "#8b610c",
    color: "#8b610c",
  };
  // var bgMyanmar = {
  //     borderColor: '#90378c',
  //     color: '#90378c'
  // }
  // var bgUae = {
  //     borderColor: '#789215',
  //     color: '#789215'
  // }
  var bgNone = {
    borderColor: "#2b3990",
    color: "#2b3990",
  };

  var borderColorActive = {
    borderColor: "#2b3990",
  };

  var borderColornot = {
    borderColor: "#70707075",
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {NewsLoading ? (
        <Loader />
      ) : data ? (
        <>
          <NavBar />
          {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
          <section className="newsPage_header">
            <div className="shadowONtheImage">
              <img src={bgShadow} alt="" />
            </div>
            <img src={ourWorkBg} />
            <h1>NEWS & UPDATES</h1>
          </section>

          <div className="filter_bottons">
            <div className="container">
              {data["regions"].map((el) => (
                <button
                  key={el.id}
                  onClick={() => (
                    handleSearch(el.country), setHandleChange(el.id), goTop()
                  )}
                  style={{
                    borderColor:
                      el.id === handleChange
                        ? borderColorActive.borderColor
                        : borderColornot.borderColor,
                  }}
                  className={`filter-border-${el.id}`}
                >
                  {el.country}
                </button>
              ))}
            </div>
          </div>

          <div className="newsSection">
            <div className="container">
              {news?.map((el, index) => {
                if (news.length === index + 1) {
                  return (
                    <div ref={lastNewsElementRef} key={el.id} className="news">
                      <div>
                        <span
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
                        </span>
                        <b
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
                          {el.created_at.slice(0, 10)} -{" "}
                          {el.created_at.slice(12, 19)}
                        </b>
                      </div>
                      <h4>
                        {el.title.length > 40
                          ? el.title.slice(0, 40) + "..."
                          : el.title}
                      </h4>
                      <Link
                        to={`/news-details/${el.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img src={el.image} alt="" />
                      </Link>
                      <p>
                        {el.content.length > 493
                          ? el.content.slice(0, 493) + "..."
                          : el.content}{" "}
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div key={el.id} className="news">
                      <div>
                        <span
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
                        </span>
                        <b
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
                          {el.created_at.slice(0, 10)} -{" "}
                          {el.created_at.slice(12, 19)}
                        </b>
                      </div>
                      <h4>
                        {el.title.length > 40
                          ? el.title.slice(0, 40) + "..."
                          : el.title}
                      </h4>
                      <Link
                        to={`/news-details/${el.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img src={el.image} alt="" />
                      </Link>
                      <p>
                        {el.content.length > 493
                          ? el.content.slice(0, 493) + "..."
                          : el.content}{" "}
                      </p>
                    </div>
                  );
                }
              })}
              {loading && <InfiniteScrollLoader />}
            </div>
          </div>

          <div className="newsPage"></div>
          <ChartComponent bgColor="#f3f0ea" />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default News;
