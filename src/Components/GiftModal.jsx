import React from "react";
import { Modal, Button } from "react-bootstrap";
import gift from "../Assets/images/giftBg-01.jpg";
import logo from "../Assets/images/logo.png";
import logogiftmodal from "../Assets/images/logogiftmodal-01.png";

const GiftModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ zIndex: "10000" }}
      className="modal_gift_style"
    >
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "#2b3990",
          alignItems: "center",
          padding: "0.5rem, 1rem",
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          <h3
            style={{
              marginBottom: 0,
              color: "white",
              fontSize: "25px",
              fontWeight: "400",
            }}
          >
            PREVIEW
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ overflowY: "scroll", display: "flex" }}>
        <div
          className="rotated_div"
          style={{
            position: "sticky",
            top: "0",
            left: "0",
            backgroundColor: "#2b3990",
            width: "15%",
            borderRight: "10px solid #ffbd35",
            margin: "0",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              justifyContent: "space-between",
              margin: "0",
              height: "100%",
            }}
          >
            <h1
              style={{
                color: "white",
                transform: "rotate(-90deg)",
                minHeight: "400px",
                minWidth: "421px",
                pointerEvents: "none",
              }}
            >
              Give With Meaning
            </h1>
            <img
              src={logogiftmodal}
              style={{
                width: "77px",
                height: "77px",
                transform: "rotate(-90deg)",
              }}
              alt=""
            />
          </div>
        </div>
        <div
          className="infos-con"
          style={{
            width: "77%",
            marginTop: "1rem",
            margin: "3rem auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={logo}
            alt=""
            className="logo_modal"
            style={{
              width: "90px",
              marginBottom: "1rem",
              marginLeft: "auto",
            }}
          />
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginBottom: "0",
                fontSize: "12px",
              }}
            >
              DEAR:
            </p>
            <input
              type="text"
              disabled
              style={{
                border: "none",
                height: "20px",
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginBottom: "0",
                fontSize: "12px",
              }}
            >
              ON THE OCCASION OF:
            </p>
            <input
              type="text"
              disabled
              style={{
                border: "none",
                height: "20px",
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginBottom: "0",
                fontSize: "12px",
              }}
            >
              I/WE HAVE SPONSORED THE GIFT OF:
            </p>
            <input
              type="text"
              disabled
              style={{
                border: "none",
                height: "20px",
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginBottom: "0",
                fontSize: "12px",
              }}
            >
              AT SYRIA CAMP:
            </p>
            <input
              type="text"
              disabled
              style={{
                border: "none",
                height: "20px",
              }}
            />
          </div>
          <div>
            <p style={{ marginBottom: "0.5rem", fontSize: "12px" }}>
              THE BENEFICIARIES JOIN US IN WISHING YOU IN THIS SPECIAL OCCASION:
            </p>
            <input
              type="text"
              disabled
              style={{
                border: "none",
                height: "20px",
                width: "300px",
                marginLeft: "0.5rem",
                borderBottom: "1px dashed gray",
              }}
            />
          </div>
          <img
            src={gift}
            alt=""
            className="design_image_modal"
            style={{
              maxWidth: "100%",
              minWidth: "99%",
              borderTop: "6px solid #ffbd35",
              borderBottom: "6px solid #ffbd35",
              minHeight: "244px",
              objectFit: "cover",
              width: "100%",
              margin: "1rem auto",
              justifySelf: "center",
            }}
          />
          <p style={{ textAlign: "right" }}>MONDAY , JULY 22</p>
          <b style={{ textAlign: "center" }}>MAY THIS GIFT BRING COMFORT.</b>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
    </Modal>
  );
};

export default GiftModal;
