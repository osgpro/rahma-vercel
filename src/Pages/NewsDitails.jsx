import React, { useState } from "react";
import { Link } from "react-router-dom";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import { getSingleNewsData } from "../Redux/newsPage";
import { sanitize } from 'dompurify';

const NewsDitails = ({ match }) => {
  const id = match.params.id;

  const dispatch = useDispatch();

  const getSingleNews = useSelector((state) => state.getSingleNewsData);
  const { loading, data } = getSingleNews;

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    dispatch(getSingleNewsData(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : data ? (
        <>
          <NavBar passNews="active" />
          {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
          <div style={{ backgroundColor: "#e3e3e3" }}>
            <div className="container">
              <div className="news_ditails">
                <div>
                  <span>{data["news"].region.country}</span>
                  <b>
                    {data["news"].created_at.slice(0, 10)} -{" "}
                    {data["news"].created_at.slice(12, 19)}
                  </b>
                </div>
                <h4>{data["news"].title}</h4>
                <img src={data["news"].image} alt="" />
                <p>{data["news"].content}</p>
                {/* <div dangerouslySetInnerHTML={{ __html: sanitize(data['quill']) }} /> */}
              </div>
            </div>

            <div>
              {/* {data['quill'].map(el => (
                <div key={el.id}>
                  {el.content.html}
                </div>
              ))} */}
              {/* {data["quill"]} */}


            </div>

            {/* <div className="news_sugg">
              <div className="container">
                <h1>YOU MAY BE INTERESTED IN…</h1>
                <div>
                  <div>
                    <Link
                      to={`/news-details/${data["related_news_1"].id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img src={data["related_news_1"].image} alt="" />
                    </Link>
                    <p>
                      {data["related_news_1"].content.length > 150
                        ? data["related_news_1"].content.slice(0, 150) + "..."
                        : data["related_news_1"].content}{" "}
                    </p>
                  </div>
                  <div>
                    <Link
                      to={`/news-details/${data["related_news_2"].id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img src={data["related_news_2"].image} alt="" />
                    </Link>
                    <p>
                      {data["related_news_2"].content.length > 150
                        ? data["related_news_2"].content.slice(0, 150) + "..."
                        : data["related_news_2"].content}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default NewsDitails;
