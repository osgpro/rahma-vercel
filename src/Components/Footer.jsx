import React, { useState } from "react";
import { useDispatch } from "react-redux";
import RahmaLogo from "../Assets/images/rahmaLogo.png";
import { ReactComponent as Icon1 } from "../Assets/svgs/all-icons/footerIcons-01.svg";
import { ReactComponent as Icon2 } from "../Assets/svgs/all-icons/footerIcons-02.svg";
import { ReactComponent as Icon3 } from "../Assets/svgs/all-icons/footerIcons-03.svg";
import { postNewsLetterData } from "../Redux/newsLetter";
import FooterModal from "./FooterModal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  var year = new Date().getFullYear();

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();

    const form = {
      name: name,
      email: email,
    };
    dispatch(postNewsLetterData(form));

    toast.success("Registered Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <>
      <div className="Footer" id="footer_id">
        <div className="container">
          <div className="footer-children">
            <div className="rahma-message">
              <img src={RahmaLogo} alt="Rahma Logo" />
              <h5>We’d love to hear from you.</h5>
              <h5>
                Just choose the most convenient method and we’ll get back to you
                as soon as we can.
              </h5>
              <h5>
                Rahma Worldwide is a 501 (c) (3) Nonprofit Organization (Tax ID
                47-1304361)
              </h5>
              <FooterModal />
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/RahmaWorldwide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/rahmaworldwide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/rahmaworldwide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.youtube.com/c/RahmaWorldwide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="usful-links">
              <ul>
                <li>
                  <NavLink
                    to="/home-page"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/our-work"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Our Work
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/where-we-work"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Where We Work
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/news"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/programs"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Programs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-us"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Ramadan"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Ramadan
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/their-stories"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Their Stories
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="contact" style={{ marginTop: "0.7rem" }}>
              <h5>Contact</h5>
              <br />
              <a
                href="mailto:info@rahmaww.org"
                rel="noopener noreferrer"
                className="aLinkFooter"
              >
                <Icon1 /> info@rahmaww.org
              </a>
              <br />
              <a
                href="tel:+2485663111"
                rel="noopener noreferrer"
                className="aLinkFooter"
              >
                <Icon2 /> +(248) 566 3111
              </a>
              <br />
              <a
                href="https://www.google.com/maps/place/Rahma+Worldwide/@42.5753018,-83.0370127,9.29z/data=!4m5!3m4!1s0x8824c632526912b7:0x794ce80d6a7ed599!8m2!3d42.5197962!4d-83.2240825"
                className="aLinkFooter"
                rel="noopener noreferrer"
                target="_black"
              >
                <Icon3 /> 31333 Southfield Rd. STE 100 Beverly Hills, MI 48025
              </a>
              <div className="footer-sign-up">
                <h2 style={{ marginBottom: "1rem" }}>
                  Sign up for our Newsletter
                </h2>
                <form onSubmit={submitHandle}>
                  <input
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    style={{ width: "190px " }}
                  />
                  <input
                    type="submit"
                    placeholder="Subscribe"
                    style={{ width: "89px" }}
                  />
                </form>
              </div>
            </div>
          </div>

          <ToastContainer />
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © {year} Rahma Worldwide, All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
