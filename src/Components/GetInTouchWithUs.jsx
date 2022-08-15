import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import navbar and footer
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Contactform from '../Components/Contactform'

import { ReactComponent as Icon1 } from '../Assets/svgs/all-icons/footerIcons-01.svg'
import { ReactComponent as Icon2 } from '../Assets/svgs/all-icons/footerIcons-02.svg'
import { ReactComponent as Icon3 } from '../Assets/svgs/all-icons/footerIcons-03.svg'

const GetInTouchWithUs = () => {

    return (
        <>
            <Container >
                <div className="firstTDiv">
                    <h2 className="firstT" style={{ fontWeight: '600' }} >GET IN TOUCH WITH US</h2>
                </div>
                <Row>
                    <div className="secondT">
                        <h3>We bring a personal and effective approach to every project we work on.
                        </h3>
                    </div>
                </Row>
                <Row>
                    <div className='contactTow'>
                        <br />
                        <a className="contactLinke" href="mailto:info@rahmaww.org" rel='noopener noreferrer'>
                            <Icon1 /> info@rahmaww.org</a>
                        <br />
                        <a className="contactLinke" href="tel:+2485663111" rel='noopener noreferrer'>
                            <Icon2 /> +(248) 566 3111</a>
                        <br />
                        <a className="contactLinke" href="https://www.google.ru/maps/place/Google+Building+41,+Mountain+View,+CA+94043,+USA/@37.4224082,-122.0877973,17z/data=!3m1!4b1!4m5!3m4!1s0x808fba02f3d60bc5:0x6bc3b76cb42de9de!8m2!3d37.4224082!4d-122.0856086" rel='noopener noreferrer'>
                            <Icon3 /> 31333 Southfield Rd. STE 100
                            Beverly Hills, MI 48025
                        </a>

                    </div>
                </Row>
                <br />
                <Row className="thirdT">
                    <h6 className="weL">We’d love to hear from you. Just choose the most convenient method and we’ll get back to you as soon as we can.
                    </h6>
                </Row>
            </Container>
        </>
    );
};

export default GetInTouchWithUs;