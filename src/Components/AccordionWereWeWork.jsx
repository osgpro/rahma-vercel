import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
const AccordionWereWeWork = ({ history, setTooltipContent }) => {
  const handleCountry = (value) => {
    history.push(`/where-we-work/${value}`);
  };

  return (
    <>
      <Accordion defaultActiveKey="0" flush style={{ width: "100%" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>AFRICA</Accordion.Header>
          <Accordion.Body>
            <h6 onClick={() => handleCountry("Mali")}>Mali</h6>
            <h6 onClick={() => handleCountry("Chad")}>Chad</h6>
            <h6 onClick={() => handleCountry("Cameroon")}>Cameroon</h6>
            <h6 onClick={() => handleCountry("Sierra Leone")}>Sierra Leone</h6>
            <h6 onClick={() => handleCountry("Ghana")}>Ghana</h6>
            <h6 onClick={() => handleCountry("Kenya")}>Kenya</h6>
            <h6 onClick={() => handleCountry("Sudan")}>Sudan</h6>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>ASIA</Accordion.Header>
          <Accordion.Body>
            <h6 onClick={() => handleCountry("Myanmar")}>Myanmar</h6>
            <h6 onClick={() => handleCountry("UAE")}>UAE</h6>
          </Accordion.Body>
        </Accordion.Item>
        {/* <Accordion.Item eventKey="2">
                <Accordion.Header>EUROPE</Accordion.Header>
                <Accordion.Body>
                    <h6>Mali</h6>
                    <h6>Chad</h6>
                    <h6>Niger</h6>
                    <h6>Cameroon</h6>
                    <h6>Uganda</h6>
                </Accordion.Body>
            </Accordion.Item> */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>MIDDLE EAST</Accordion.Header>
          <Accordion.Body>
            <h6 onClick={() => handleCountry("Syria")}>Syria</h6>
            <h6 onClick={() => handleCountry("Palestine")}>Palestine</h6>
            <h6 onClick={() => handleCountry("Jordan")}>Jordan</h6>
            <h6 onClick={() => handleCountry("Lebanon")}>Lebanon</h6>
            <h6 onClick={() => handleCountry("Turkey")}>Turkey</h6>
            <h6 onClick={() => handleCountry("Yemen")}>Yemen</h6>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>North America</Accordion.Header>
          <Accordion.Body>
            <h6 onClick={() => handleCountry("United States of America")}>
              United States of America
            </h6>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AccordionWereWeWork;
