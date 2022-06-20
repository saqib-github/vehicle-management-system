import React from "react";
import "./index.css";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UsersIcon from "../../styles/UsersIcon";
// import { useHistory } from "react-router-dom";
import LogoutIcon from "../../styles/LogoutIcon";

const SideBAr = (props) => {
  const navigate = useNavigate();
  
  const Logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    navigate("/");
  };
  return (
    <Offcanvas {...props} style={{ width: "300px", height: "1024px" }}>
      <Offcanvas.Header
        closeButton
        style={{
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          height: "59px",
        }}
      >
        <h1
          style={{
            color: "black",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "15px",
          }}
          className="stickable text-center"
        >
          Menu
        </h1>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container>
          <Row className="side-menu-items mt-3">
            <Col md={2} xs={6}>
              <UsersIcon />
            </Col>
            <Col md={10} xs={6}>
              <strong className="side-menu-text"> Vehicles</strong>
            </Col>
          </Row>{" "}
          {/* .................... */}
          <Row className="side-menu-items" onClick={Logout}>
            <Col md={2} xs={6}>
              <LogoutIcon />
            </Col>
            <Col md={10} xs={6}>
              <strong className="side-menu-text"> Logout</strong>
            </Col>
          </Row>{" "}
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBAr;
