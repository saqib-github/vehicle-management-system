import React, { useState } from "react";
import "./index.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ValidateEmail } from "../../components/helpers";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [validEmail, setValidEmail] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const login = () => {
    const { email, password } = loginData;
    if (!validEmail && email && !password) {
      Swal.fire("Opps", "Please Enter Valid Email", "error");
    }
    if (!validEmail && email && password) {
      Swal.fire("Opps", "Please Enter Valid Email", "error");
    }
    if (!password && email && validEmail) {
      Swal.fire("Opps", "Please Enter Password", "error");
    }
    if (!password && !email) {
      Swal.fire("Opps", "Please Enter Email and Password", "error");
    }
    if (validEmail && email && password) {
      if (loginData.email && loginData.password) {
        let url = `${process.env.REACT_APP_API_URL}/api/auth/signin`;
        let data = {
          email,
          password
        };

        axios
          .post(url, data)
          .then((result) => {
            console.log("result", result.data);
            if (result.status === 200) {
              localStorage.setItem("accessToken", result.data.accessToken);
              navigate("/dashboard");
            }
          })
          .catch((error) => {
            console.log("error", error.response);
          });

        console.log("login data", loginData);
      } else {
        Swal.fire("Sorry", "please enter your credentials", "error");
      }
    }
  };
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
            {!validEmail && loginData.email && (
              <h4 style={{ color: "red" }}>please enter valid email</h4>
            )}
            <Form>
              <Form.Control
                defaultValue={loginData.email || ""}
                name="email"
                onChange={(e) => {
                  const email = e.target.value;
                  setValidEmail(ValidateEmail(email));
                  setLoginData({ ...loginData, email });
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
                  setLoginData({ ...loginData, password: e.target.value });
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
                  fontSize: "20px",
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
