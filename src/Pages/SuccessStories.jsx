import React, { useCallback, useEffect, useRef, useState } from "react";
import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import headerImg from "../Assets/images/success-stories-bg.jpg";
import bgShadow from "../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSuccessStoriesData } from "../Redux/succes_stories";
import Loader from "../Components/Loader";
import Aos from "aos";
import useStoriesHook from "../Hooks/useStoriesHook";
import InfiniteScrollLoader from "../Components/InfiniteScrollLoader";

const SuccessStories = () => {
  const dispatch = useDispatch();

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  const getSuccessStories = useSelector((state) => state.getSuccessStoriesData);
  const { loading, data } = getSuccessStories;

  useEffect(() => {
    dispatch(getSuccessStoriesData());
  }, [dispatch]);

  const [pageNumber, setPageNumber] = useState(1);

  const {
    loading: storiesLoading,
    stories,
    hasMore,
  } = useStoriesHook(pageNumber);

  const observer = useRef();

  const lastNewsElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  useEffect(() => {
    Aos.init();
  }, []);

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
          <section className="successPage-header">
            <div className="shadowONtheImage" style={{ opacity: "0.7" }}>
              <img src={bgShadow} alt="" />
            </div>
            <img className="" src={headerImg} />
            <h1 style={{ fontWeight: "700" }}>Their Stories</h1>
          </section>

          <section className="stories">
            <div className="container">
              {stories?.map((el, index) => (
                <>
                  {stories.length === index + 1 ? (
                    <div
                      ref={lastNewsElementRef}
                      key={el.id}
                      className="story"
                      data-aos="fade-up"
                    >
                      <img src={el.image} alt="" />
                      <div>
                        <h5>{el.title}</h5>
                        <p>
                          {el.description.length > 183
                            ? el.description.slice(0, 182)
                            : el.description}
                        </p>
                      </div>
                      <Link to={`/their-stories/${el.id}`}>
                        <button>
                          Read More{" "}
                          <i
                            class="fa-solid fa-arrow-right-long"
                            style={{ marginLeft: "0.5rem" }}
                          ></i>
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div key={el.id} className="story" data-aos="fade-up">
                      <img src={el.image} alt="" />
                      <div>
                        <h5>{el.title}</h5>
                        <p>
                          {el.description.length > 183
                            ? el.description.slice(0, 182)
                            : el.description}
                        </p>
                      </div>
                      <Link to={`/their-stories/${el.id}`}>
                        <button>
                          Read More{" "}
                          <i
                            class="fa-solid fa-arrow-right-long"
                            style={{ marginLeft: "0.5rem" }}
                          ></i>
                        </button>
                      </Link>
                    </div>
                  )}
                </>
              ))}
            </div>
            <div className="container">
              {storiesLoading && <InfiniteScrollLoader />}
            </div>
          </section>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SuccessStories;
