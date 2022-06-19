import React, { useState } from "react";
import "./index.css"
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  var [loginData, setLoginData] = useState({});
  return (
    <>
      <Container fluid className="bg-gradient bg-dark">
        <Row
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            height: "100vh"
          }}
        >
          <Col md={12} xs={12} className="text-center">
            <h1 style={{ color: "white" }} className="mb-4 admin-stickable">
              Vehcle Management System
            </h1>
          </Col>
          <Col md={2} xs={12} className="text-center">
          
              <Link to='/login'>
                <Button
                  className="mt-3"
                  style={{
                    height: "50px",
                    border: "none",
                    width: "200px",
                    backgroundColor: "#FF007C",
                    borderRadius: "10px",
                    fontSize: '20px',
                    boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                  }}
                >
                  <strong>Login</strong>
                </Button>
              </Link>
          </Col>
          <Col md={2} xs={12} className="text-center">
          
              <Link to='/signup'>
                <Button
                  className="mt-3"
                  style={{
                    height: "50px",
                    border: "none",
                    width: "200px",
                    backgroundColor: "#FF007C",
                    borderRadius: "10px",
                    fontSize: '20px',
                    boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                  }}
                >
                  <strong>Sign Up</strong>
                </Button>
              </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
