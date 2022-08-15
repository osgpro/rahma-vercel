import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import bgShadow from "../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg";
import headerImg from "../Assets/images/countypage.jpg";
import img from "../Assets/images/Capture(1).jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryData } from "../Redux/whereWeWork";
import Loader from "../Components/Loader";
import { Alert } from "react-bootstrap";

const CountryPage = ({ match }) => {
  const id = match.params.id;

  const dispatch = useDispatch();

  const getCountry = useSelector((state) => state.getCountryData);
  const { loading, data, error } = getCountry;

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    dispatch(getCountryData(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : data ? (
        <>
          <NavBar />
          {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
          <section className="countrypage-header">
            <div className="shadowONtheImage" style={{ opacity: "0.2" }}>
              <img src={bgShadow} alt="" />
            </div>
            <img className="" src={data["Country_Data"].headline_image} />
            <article className="countryName">
              <div className="container">
                <div>
                  {/* <b>SHATTERED LIVES</b> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque a nibh vitae suscipit. Nam commodo molestie neque, gravida lobortis felis pulvinar ac. Praesent id interdum mauris.
                  */}
                  <h2>{id}</h2>
                </div>
                <div>
                  <p>
                    {data["Country_Data"].headline_paragraph.includes(
                      "lorem",
                      "ipsum"
                    ) ? (
                      <></>
                    ) : (
                      data["Country_Data"].headline_paragraph
                    )}
                  </p>
                </div>
              </div>
            </article>
          </section>

          {data["Country_Data"].body_1.includes("Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "Ut", "pellentesque", "a", "nibh", "vitae", "suscipit", "Nam", "commodo", "molestie", "neque", "gravida", "lobortis", "felis", "pulvinar", "ac", 'Praesent', "id", "interdum", "mauris") ? (
            <></>
          ) : (
            <section className="countryDonateSection">
              <div className="container">
                <div>
                  <h3>{data["Country_Data"].title_1}</h3>
                  <ul style={{ listStyle: "none" }}>
                    <li style={{ whiteSpace: "break-spaces" }}>
                      {data["Country_Data"].body_1}
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="https://rahmaww.donorsupport.co/-/XGDAEUZV">
                    DONATE NOW
                  </a>
                </div>
              </div>
            </section>
          )}


          <section className="countryDitails">
            <div className="container">

              {data["Country_Data"].country_facts.includes("Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "Ut", "pellentesque", "a", "nibh", "vitae", "suscipit", "Nam", "commodo", "molestie", "neque", "gravida", "lobortis", "felis", "pulvinar", "ac", 'Praesent', "id", "interdum", "mauris") ? (
                <></>
              ) : (
                <div>
                  <h1>Country Facts</h1>
                  <ul style={{ listStyle: "none" }}>
                    <li style={{ whiteSpace: "break-spaces" }}>
                      {data["Country_Data"].country_facts.length > 869
                        ? data["Country_Data"].country_facts.slice(0, 868)
                        : data["Country_Data"].country_facts}
                    </li>
                  </ul>
                </div>
              )}

              {data["Country_Data"].rahma_response.includes("Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "Ut", "pellentesque", "a", "nibh", "vitae", "suscipit", "Nam", "commodo", "molestie", "neque", "gravida", "lobortis", "felis", "pulvinar", "ac", 'Praesent', "id", "interdum", "mauris") ? (
                <></>
              ) : (
                <div>
                  <h1>Rahma Response</h1>
                  <ul style={{ listStyle: "none" }}>
                    <li style={{ whiteSpace: "break-spaces" }}>
                      {data["Country_Data"].rahma_response.length > 869
                        ? data["Country_Data"].rahma_response.slice(0, 868)
                        : data["Country_Data"].rahma_response}
                    </li>
                  </ul>
                </div>
              )}

            </div>
          </section>

          {data["Country_Data"].brief.includes("Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "Ut", "pellentesque", "a", "nibh", "vitae", "suscipit", "Nam", "commodo", "molestie", "neque", "gravida", "lobortis", "felis", "pulvinar", "ac", 'Praesent', "id", "interdum", "mauris") ? (
            <></>
          ) : (
            <section className="country_map">
              <div className="container">
                <div>
                  <h1 className="h1-styles">
                    {id} Crisis <span>Briefing</span>
                  </h1>
                  <p>{data["Country_Data"].brief}</p>
                </div>
                <div>
                  <img src={data["Country_Data"].brief_image} alt="" />
                </div>
              </div>
            </section>
          )}

          {data["updates"].length < 1 ? null : (
            <>
              <section className="news_features">
                <div className="container">
                  <h1 className="h1-styles">
                    {id} <span>Updates</span>
                  </h1>
                  <div>
                    <img src={data["updates"][0].main_image} alt="" />
                    <div>
                      {data["updates"][0].title.length > 65
                        ? data["updates"][0].title.slice(0, 65)
                        : data["updates"][0].title}
                      <p style={{ fontSize: "12px", fontWeight: "500" }}>
                        {data["updates"][0].body_1.length > 65
                          ? data["updates"][0].body_1.slice(0, 65)
                          : data["updates"][0].body_1}
                      </p>
                      <Link to={`/country-details/${data["updates"][0].id}`}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <section className="activities">
                <div className="container">
                  {data["updates"].slice(1, 4).map((el) => (
                    <div key={el.id} className="box">
                      <img src={el.main_image} alt="" />
                      <div>
                        <p>{el.title.slice(0, 65)}</p>
                        <h5>{el.body_1.slice(0, 65)}</h5>
                        <Link to={`/country-details/${el.id}`}>Read More</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          <section className="contrypages_videos">
            <div className="container">
              {data["Country_Data"].videos.length < 1 ? null : (
                <>
                  {data["Country_Data"].videos.map((el) => (
                    <div key={el.id} className="vidCon">
                      <iframe src={el.video_link}></iframe>
                    </div>
                  ))}
                </>
              )}
            </div>
          </section>
          <Footer />
        </>
      ) : error ? (
        <>
          <NavBar />
          <div className="container">
            <Alert variant="info" dismissible style={{ margin: "5rem 0" }}>
              <Alert.Heading>Updating, Coming soon!</Alert.Heading>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                eaque eum dignissimos ea atque rerum iure sit. Molestias
                distinctio totam exercitationem veritatis quasi ratione
                blanditiis quibusdam nesciunt, assumenda incidunt beatae.
              </p> */}
            </Alert>
          </div>
          <Footer />
        </>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default CountryPage;
