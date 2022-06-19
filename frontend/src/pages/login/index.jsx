import React, { useState } from "react";
import "./index.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  // const history = useHistory();
  const login = () => {
    console.log("login");
  };
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
              Login
            </h1>
          </Col>
          <Col md={4} xs={6} className="text-center">
            <Form>
              <Form.Control
                defaultValue={loginData.email}
                name="email"
                onChange={(e) => {
                  loginData = {
                    ...loginData,
                    ...{
                      email: e.target.value
                    }
                  };
                  setLoginData(loginData);
                }}
                type="text"
                style={{
                  height: "50px",
                  border: "none",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                }}
                placeholder="Enter your email"
              ></Form.Control>
              <Form.Control
                defaultValue={loginData.password}
                name="password"
                type="password"
                onChange={(e) => {
                  loginData = {
                    ...loginData,
                    ...{
                      password: e.target.value
                    }
                  };
                  setLoginData(loginData);
                }}
                style={{
                  height: "50px",
                  border: "none",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                }}
                className="mt-3"
                placeholder="Enter your password"
              ></Form.Control>
              <Button
                onClick={login}
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
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
