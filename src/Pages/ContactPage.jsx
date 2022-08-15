import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import navbar and footer
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Contactform from '../Components/Contactform'
import GetInTouchWithUs from '../Components/GetInTouchWithUs'



const ContactPage = () => {

    return (
        <>
            <div className="contAll">

                <NavBar />
                <div className="all">

                    <Row className="contactTitle">
                        <h1>CONTACT</h1>
                    </Row>
                    <Row className="ContFormAndInfo">

                        <Col><GetInTouchWithUs /></Col>
                        <Col> <Contactform /> </Col>
                    </Row>

                </div>
                <Footer />

            </div>
        </>
    );
};

export default ContactPage;