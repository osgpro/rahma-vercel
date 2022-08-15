import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import bgShadow from "../Assets/images/rahmawebsitePAGES-02-02-02-02.jpg";
import gift from "../Assets/images/giftBg-01.jpg";
import { useState } from "react";
import Modal from "../Components/GiftModal";

import DonateBtnAndsocialMedia from "../Components/DonateBtnAndsocialMedia";
import { useDispatch, useSelector } from "react-redux";
import { getGiftData, postCheckout } from "../Redux/gift";
import Loader from "../Components/Loader";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

const CardPage = () => {
  const dispatch = useDispatch();

  const gifts = useSelector((state) => state.getGiftData);
  const { loading, data } = gifts;

  const checkout = useSelector((state) => state.postCheckout);
  const { data: checkoutData } = checkout;

  const [handleModal, setHandleModal] = useState(false);

  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);

  const [flipthecard1, setFlipthecard1] = useState(false);
  const [flipthecard2, setFlipthecard2] = useState(false);
  const [flipthecard3, setFlipthecard3] = useState(false);
  const [flipthecard4, setFlipthecard4] = useState(false);

  const [checkDesign1, setCheckDesign1] = useState(true);
  const [checkDesign2, setCheckDesign2] = useState(false);
  const [checkDesign3, setCheckDesign3] = useState(false);
  const [checkDesign4, setCheckDesign4] = useState(false);

  useEffect(() => {
    dispatch(getGiftData());
  }, []);

  var flipcard = {
    transition: "transform 0.4s",
    transform: "rotateY(180deg)",
    border: "1px solid gray",
    transformStyle: "preserve-3d",
  };

  var noflipcard = {
    transition: "transform 0.4s",
    transform: "rotateY(0deg)",
    transformStyle: "preserve-3d",
  };

  var shadowDesign = {
    transition: "all .5s ease-in-out",
  };

  var shadowDesign1 = {
    transition: "all .5s ease-in-out",
  };

  var imgblackandwhite = {
    transition: "all .5s ease-in-out",
    filter: "grayscale(0%)",
  };

  var imgnotblackandwhite = {
    transition: "all .5s ease-in-out",
    filter: "grayscale(100%)",
  };

  const [windosY, setWindowY] = useState();
  window.addEventListener("scroll", () => {
    setWindowY(window.scrollY);
  });

  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [honoreeName, setHonoreeName] = useState("");
  const [honoreeEmail, setHonoreeEmail] = useState("");
  const [price, setPrice] = useState(65);
  const [message, setMessage] = useState("");

  const giftHandler = (values) => {
    setPrice(values.price);
  };

  const checkoutHandler = (e) => {
    e.preventDefault();

    let form = {
      donor_name: donorName,
      donor_email: donorEmail,
      honoree_name: honoreeName,
      honoree_email: honoreeEmail,
      price: state1
        ? Number(data["gifts"][0].price * counter.toString() + "00")
        : state2
        ? Number(data["gifts"][1].price * counter1.toString() + "00")
        : state3
        ? Number(data["gifts"][2].price * counter2.toString() + "00")
        : state4
        ? Number(data["gifts"][3].price * counter3.toString() + "00")
        : 0,
      design_id: checkDesign1
        ? 1
        : checkDesign2
        ? 2
        : checkDesign3
        ? 3
        : checkDesign4
        ? 4
        : 1,
      gift_id: state1
        ? data["gifts"][0].id
        : state2
        ? data["gifts"][1].id
        : state3
        ? data["gifts"][2].id
        : state4
        ? data["gifts"][3].id
        : 1,
      message: message,
    };

    if (
      donorName.length > 0 &&
      donorEmail.length > 0 &&
      honoreeName.length > 0 &&
      honoreeEmail.length > 0
    ) {
      dispatch(postCheckout(form));
    } else {
      <ToastContainer />;
      toast.error("Please fill out the required fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  useEffect(() => {
    if (checkoutData) {
      window.location.replace(checkoutData);
    }
  }, [checkoutData]);

  // const [getPrice, setGetPrice] = useState(0);

  // useEffect(() => {
  //   setGetPrice(gifts.data["gifts"][0].price);
  // }, []);

  // console.log(getPrice);

  // const plusFun = (val) => {

  // };

  const [counter, setCounter] = useState(1);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);
  console.log(counter);
  // const minusFun = (price) => {
  //   price -= 1;
  // };

  var style = {
    width: "30px",
    hegiht: "30px",
    fontWeight: " 600",
    PointerEvent: "none",
    cursor: "no-drop",
  };

  var style1 = {
    width: "30px",
    hegiht: "30px",
    fontWeight: " 600",
  };

  var style2 = {
    width: "30px",
    hegiht: "30px",
    fontWeight: " 600",
    cursor: "no-drop",
    PointerEvent: "none",
  };

  var style3 = {
    width: "30px",
    hegiht: "30px",
    fontWeight: " 600",
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : data ? (
        <>
          <NavBar />
          {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
          <div className="giftPage">
            <div>
              <div className="shadowONtheImage">
                <img src={bgShadow} alt="" />
              </div>
              <img
                src={gift}
                className="theIMageImage"
                alt="our work background"
              />
              <h1 className="firsth1">GIFT DONATION</h1>
            </div>

            <form className="gift-donate">
              <div className="container">
                <h2>DONATE</h2>
                <hr />
                <p>
                  Gifting a donation helps you make a difference as you get to
                  see the impact you and recipients have made by your
                  contribution Celebrate an occasion by gifting a donation on
                  behalf of them. Our Gift a donation program lets you donate on
                  behalf of the recipient. The recipient and donor will get
                  pictures of the changes you made to the less privileged
                  through a card and pictures.
                </p>
                <div className="chooseDonate">
                  <h4>CHOOSE WHAT YOU WOULD LIKE TO SUPPORT</h4>
                  {/* <b className='featured'>Featured Causes</b>
                                    <p>"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT
                                        LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMC</p> */}
                  <div className="cards" style={{ perspective: "2000px" }}>
                    <div
                      className={
                        state1 ? "active NUTRITION_FOOD" : "NUTRITION_FOOD"
                      }
                      onClick={() => (
                        setState1(true),
                        setState2(false),
                        setState3(false),
                        setState4(false)
                      )}
                      style={flipthecard1 ? flipcard : noflipcard}
                    >
                      {flipthecard1 ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setFlipthecard1(false)}
                            style={{
                              width: "40px ",
                              marginBottom: "auto",
                              marginLeft: "auto",
                            }}
                          >
                            X
                          </button>
                          <p
                            style={{
                              transform: "scaleX(-1)",
                              marginBottom: "0",
                            }}
                          >
                            {data["gifts"][0].description}
                          </p>
                        </>
                      ) : (
                        <>
                          <div
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "50%",
                              zIndex: "1000",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <button
                              onClick={() => setCounter(counter + 1)}
                              type="button"
                              className="qty"
                              style={{
                                width: "30px",
                                fontWeight: " 600",
                                hegiht: "30px",
                              }}
                            >
                              +
                            </button>
                            <p
                              style={{
                                textAlign: "center",
                                position: "relative",
                                padding: "0",
                                color: "gray",
                                margin: "0",
                                backgroundColor: "white",
                                zIndex: "1000",
                                opacity: state1 ? "1" : "0",
                                fontWeight: "600",
                                transition: "all .5s ease-in-out",
                              }}
                            >
                              {counter}
                            </p>
                            <button
                              onClick={() => {
                                counter > 1
                                  ? setCounter(counter - 1)
                                  : setCounter(counter);
                              }}
                              className="qty"
                              type="button"
                              style={counter > 1 ? style1 : style}
                            >
                              -
                            </button>
                          </div>
                          <img src={data["gifts"][0].image} alt="" />
                          <label class="CHECKBOXGIFT">
                            <input
                              type="checkbox"
                              name="nurtition_foor"
                              onChange={() => giftHandler(data["gifts"][0])}
                              checked={state1 ? "checked" : ""}
                            />
                            <span class="checkmark"></span>
                          </label>
                          <b>{data["gifts"][0].title}</b>
                          <b style={{ padding: "0.5rem" }}>
                            $
                            {counter > 1
                              ? data["gifts"][0].price * counter
                              : data["gifts"][0].price}
                          </b>
                          <button
                            onClick={() => (
                              setFlipthecard1(true),
                              setFlipthecard2(false),
                              setFlipthecard3(false),
                              setFlipthecard4(false)
                            )}
                            type="button"
                          >
                            LEARN MORE
                          </button>
                          <figure className="shadow"></figure>
                        </>
                      )}
                    </div>
                    <div
                      className={state2 ? "active SHELTER" : "SHELTER"}
                      onClick={() => (
                        setState1(false),
                        setState2(true),
                        setState3(false),
                        setState4(false)
                      )}
                      style={flipthecard2 ? flipcard : noflipcard}
                    >
                      {flipthecard2 ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setFlipthecard2(false)}
                            style={{
                              width: "40px ",
                              marginBottom: "auto",
                              marginLeft: "auto",
                            }}
                          >
                            X
                          </button>
                          <p style={{ transform: "scaleX(-1)" }}>
                            {data["gifts"][1].description}
                          </p>
                        </>
                      ) : (
                        <>
                          <div
                            style={{
                              position: "absolute",
                              right: "0",
                              top: "50%",
                              zIndex: "1000",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <button
                              onClick={() => setCounter1(counter1 + 1)}
                              type="button"
                              className="qty"
                              style={{
                                width: "30px",
                                fontWeight: " 600",
                                hegiht: "30px",
                              }}
                            >
                              +
                            </button>
                            <p
                              style={{
                                textAlign: "center",
                                position: "relative",
                                padding: "0",
                                color: "gray",
                                margin: "0",
                                backgroundColor: "white",
                                zIndex: "1000",
                                opacity: state2 ? "1" : "0",
                                fontWeight: "600",
                                transition: "all .5s ease-in-out",
                              }}
                            >
                              {counter1}
                            </p>
                            <button
                              onClick={() => {
                                counter1 > 1
                                  ? setCounter1(counter1 - 1)
                                  : setCounter1(counter1);
                              }}
                              className="qty"
                              type="button"
                              style={counter1 > 1 ? style3 : style2}
                            >
                              -
                            </button>
                          </div>
                          <img src={data["gifts"][1].image} alt="" />
                          <label class="CHECKBOXGIFT">
                            <input
                              type="checkbox"
                              name="shelter"
                              onChange={() => giftHandler(data["gifts"][1])}
                              checked={state2 ? "checked" : ""}
                            />
                            <span class="checkmark"></span>
                          </label>
                          <b>{data["gifts"][1].title}</b>
                          <b style={{ padding: "0.5rem" }}>
                            $
                            {counter1 > 1
                              ? data["gifts"][1].price * counter1
                              : data["gifts"][1].price}
                          </b>
                          <button
                            onClick={() => (
                              setFlipthecard1(false),
                              setFlipthecard2(true),
                              setFlipthecard3(false),
                              setFlipthecard4(false)
                            )}
                            type="button"
                          >
                            LEARN MORE
                          </button>
                          <figure className="shadow"></figure>
                        </>
                      )}
                    </div>
                    <div
                      className={state3 ? "active EDUCATION" : "EDUCATION"}
                      onClick={() => (
                        setState1(false),
                        setState2(false),
                        setState3(true),
                        setState4(false)
                      )}
                      style={flipthecard3 ? flipcard : noflipcard}
                    >
                      {flipthecard3 ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setFlipthecard3(false)}
                            style={{
                              width: "40px ",
                              marginBottom: "auto",
                              marginLeft: "auto",
                            }}
                          >
                            X
                          </button>
                          <p style={{ transform: "scaleX(-1)" }}>
                            {data["gifts"][2].description}
                          </p>
                        </>
                      ) : (
                        <>
                          <div
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "50%",
                              zIndex: "1000",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <button
                              onClick={() => setCounter2(counter2 + 1)}
                              type="button"
                              className="qty"
                              style={{
                                width: "30px",
                                fontWeight: " 600",
                                hegiht: "30px",
                              }}
                            >
                              +
                            </button>
                            <p
                              style={{
                                textAlign: "center",
                                position: "relative",
                                padding: "0",
                                color: "gray",
                                margin: "0",
                                backgroundColor: "white",
                                zIndex: "1000",
                                opacity: state3 ? "1" : "0",
                                fontWeight: "600",
                                transition: "all .5s ease-in-out",
                              }}
                            >
                              {counter2}
                            </p>
                            <button
                              onClick={() => {
                                counter2 > 1
                                  ? setCounter2(counter2 - 1)
                                  : setCounter2(counter2);
                              }}
                              className="qty"
                              type="button"
                              style={counter2 > 1 ? style1 : style}
                            >
                              -
                            </button>
                          </div>
                          <img src={data["gifts"][2].image} alt="" />
                          <label class="CHECKBOXGIFT">
                            <input
                              type="checkbox"
                              name="education"
                              onChange={() => giftHandler(data["gifts"][2])}
                              checked={state3 ? "checked" : ""}
                            />
                            <span class="checkmark"></span>
                          </label>
                          <b>{data["gifts"][2].title}</b>
                          <b style={{ padding: "0.5rem" }}>
                            $
                            {counter2 > 1
                              ? data["gifts"][2].price * counter2
                              : data["gifts"][2].price}
                          </b>
                          <button
                            onClick={() => (
                              setFlipthecard1(false),
                              setFlipthecard2(false),
                              setFlipthecard3(true),
                              setFlipthecard4(false)
                            )}
                            type="button"
                          >
                            LEARN MORE
                          </button>
                          <figure className="shadow"></figure>
                        </>
                      )}
                    </div>
                    <div
                      className={state4 ? "active HYGIENE" : "HYGIENE"}
                      onClick={() => (
                        setState1(false),
                        setState2(false),
                        setState3(false),
                        setState4(true)
                      )}
                      style={flipthecard4 ? flipcard : noflipcard}
                    >
                      {flipthecard4 ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setFlipthecard4(false)}
                            style={{
                              width: "40px ",
                              marginBottom: "auto",
                              marginLeft: "auto",
                            }}
                          >
                            X
                          </button>
                          <p style={{ transform: "scaleX(-1)" }}>
                            {data["gifts"][3].description}
                          </p>
                        </>
                      ) : (
                        <>
                          <div
                            style={{
                              position: "absolute",
                              right: "0",
                              top: "50%",
                              zIndex: "1000",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <button
                              onClick={() => setCounter3(counter3 + 1)}
                              type="button"
                              className="qty"
                              style={{
                                width: "30px",
                                fontWeight: " 600",
                                hegiht: "30px",
                              }}
                            >
                              +
                            </button>
                            <p
                              style={{
                                textAlign: "center",
                                position: "relative",
                                padding: "0",
                                color: "gray",
                                margin: "0",
                                backgroundColor: "white",
                                zIndex: "1000",
                                opacity: state4 ? "1" : "0",
                                fontWeight: "600",
                                transition: "all .5s ease-in-out",
                              }}
                            >
                              {counter3}
                            </p>
                            <button
                              onClick={() => {
                                counter3 > 1
                                  ? setCounter3(counter3 - 1)
                                  : setCounter3(counter3);
                              }}
                              className="qty"
                              type="button"
                              style={counter3 > 1 ? style3 : style2}
                            >
                              -
                            </button>
                          </div>
                          <img src={data["gifts"][3].image} alt="" />
                          <label class="CHECKBOXGIFT">
                            <input
                              type="checkbox"
                              name="hygiene"
                              onChange={() => giftHandler(data["gifts"][3])}
                              checked={state4 ? "checked" : ""}
                            />
                            <span class="checkmark"></span>
                          </label>
                          <b>{data["gifts"][3].title}</b>
                          <b style={{ padding: "0.5rem" }}>
                            $
                            {counter3 > 1
                              ? data["gifts"][3].price * counter3
                              : data["gifts"][3].price}
                          </b>
                          <button
                            onClick={() => (
                              setFlipthecard1(false),
                              setFlipthecard2(false),
                              setFlipthecard3(false),
                              setFlipthecard4(true)
                            )}
                            type="button"
                          >
                            LEARN MORE
                          </button>
                          <figure className="shadow"></figure>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="donation-form">
                  <h4>DEDICATION</h4>
                  <label htmlFor="name-of-honoree">NAME OF HONOREE</label>
                  <br />
                  <input
                    onChange={(e) => setHonoreeName(e.target.value)}
                    type="text"
                    name="name-of-honoree"
                    required
                  />
                  <br />
                  <label htmlFor="email-of-honoree">EMAIL OF HONOREE</label>
                  <br />
                  <input
                    type="email"
                    name="email-of-honoree"
                    onChange={(e) => setHonoreeEmail(e.target.value)}
                    required
                  />
                  <br />
                  <label htmlFor="donor-name">
                    NAME OF DONOR ( AS YOU WOULD LIKE IT TO APPEAR ON THE
                    NOTIFICATION )
                  </label>
                  <br />
                  <input
                    onChange={(e) => setDonorName(e.target.value)}
                    type="text"
                    name="donor-name"
                    required
                  />
                  <br />
                  <label htmlFor="email-donor">EMAIL</label>
                  <br />
                  <input
                    type="email"
                    name="email-donor"
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="notification">
                  <h4>DEDICATION</h4>
                  <hr />
                  <h2>CHOOSE A DESIGN</h2>
                  <div className="design_images">
                    <div
                      className="design1"
                      onClick={() => (
                        setCheckDesign1(true),
                        setCheckDesign2(false),
                        setCheckDesign3(false),
                        setCheckDesign4(false)
                      )}
                    >
                      {checkDesign1 ? (
                        <>
                          <label
                            class="CHECKBOXGIFT"
                            style={{
                              backgroundColor: "#2b7634",
                              borderRadius: "12px 0 0 0",
                            }}
                          >
                            <input
                              type="checkbox"
                              name="design1"
                              checked={checkDesign1 ? "checked" : ""}
                            />
                            <span
                              class="checkmark"
                              style={{ top: "10px", left: "6px" }}
                            ></span>
                          </label>
                        </>
                      ) : (
                        <></>
                      )}
                      {/* <b>NUTRITION FOOD</b> */}
                      <img
                        src={data["designs"][0].image}
                        alt=""
                        style={
                          checkDesign1 ? imgblackandwhite : imgnotblackandwhite
                        }
                      />
                      <figure
                        className="shadowDesign"
                        style={checkDesign1 ? shadowDesign : shadowDesign1}
                      ></figure>
                    </div>
                    <div
                      className="design2"
                      onClick={() => (
                        setCheckDesign1(false),
                        setCheckDesign2(true),
                        setCheckDesign3(false),
                        setCheckDesign4(false)
                      )}
                    >
                      {checkDesign2 ? (
                        <>
                          <label
                            class="CHECKBOXGIFT"
                            style={{
                              backgroundColor: "#2b7634",
                              borderRadius: "12px 0 0 0",
                            }}
                          >
                            <input
                              type="checkbox"
                              name="design2"
                              checked={checkDesign2 ? "checked" : ""}
                            />
                            <span
                              class="checkmark"
                              style={{ top: "10px", left: "6px" }}
                            ></span>
                          </label>
                        </>
                      ) : (
                        <></>
                      )}
                      {/* <b>SHELTER</b> */}
                      <img
                        src={data["designs"][1].image}
                        alt=""
                        style={
                          checkDesign2 ? imgblackandwhite : imgnotblackandwhite
                        }
                      />
                      <figure
                        className="shadowDesign"
                        style={checkDesign2 ? shadowDesign : shadowDesign1}
                      ></figure>
                    </div>
                    {/* <div
                      className="design3"
                      onClick={() => (
                        setCheckDesign1(false),
                        setCheckDesign2(false),
                        setCheckDesign3(true),
                        setCheckDesign4(false)
                      )}
                    >
                      {checkDesign3 ? (
                        <>
                          <label
                            class="CHECKBOXGIFT"
                            style={{
                              backgroundColor: "#2b7634",
                              borderRadius: "12px 0 0 0",
                            }}
                          >
                            <input
                              type="checkbox"
                              name="design3"
                              checked={checkDesign3 ? "checked" : ""}
                            />
                            <span
                              class="checkmark"
                              style={{ top: "10px", left: "6px" }}
                            ></span>
                          </label>
                        </>
                      ) : (
                        <></>
                      )}
                      <img
                        src={data['designs'][2].image}
                        alt=""
                        style={
                          checkDesign3 ? imgblackandwhite : imgnotblackandwhite
                        }
                      />
                      <figure
                        className="shadowDesign"
                        style={checkDesign3 ? shadowDesign : shadowDesign1}
                      ></figure>
                    </div> */}
                    {/* <div
                      className="design4"
                      onClick={() => (
                        setCheckDesign1(false),
                        setCheckDesign2(false),
                        setCheckDesign3(false),
                        setCheckDesign4(true)
                      )}
                    >
                      {checkDesign4 ? (
                        <>
                          <label
                            class="CHECKBOXGIFT"
                            style={{
                              backgroundColor: "#2b7634",
                              borderRadius: "12px 0 0 0",
                            }}
                          >
                            <input
                              type="checkbox"
                              name="design4"
                              checked={checkDesign4 ? "checked" : ""}
                            />
                            <span
                              class="checkmark"
                              style={{ top: "10px", left: "6px" }}
                            ></span>
                          </label>
                        </>
                      ) : (
                        <></>
                      )}
                      <img
                        src={data['designs'][3].image}
                        alt=""
                        style={
                          checkDesign4 ? imgblackandwhite : imgnotblackandwhite
                        }
                      />
                      <figure
                        className="shadowDesign"
                        style={checkDesign4 ? shadowDesign : shadowDesign1}
                      ></figure>
                    </div> */}
                  </div>
                </div>

                <div className="message">
                  <h3>ADD A PERSONAL MESSAGE (OPTIONAL)</h3>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  {/* <button type="button" onClick={() => setHandleModal(true)}>PREVIEW</button> */}
                </div>
                <div onClick={checkoutHandler} className="checkoutContianer">
                  <button className="checkoutBtn">CHECKOUT</button>
                </div>
                <Modal
                  show={handleModal}
                  onHide={() => setHandleModal(false)}
                />
              </div>
            </form>
          </div>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CardPage;
