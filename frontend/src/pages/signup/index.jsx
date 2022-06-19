import React, { useState } from "react";
import "./index.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  // const history = useHistory();
  const signup = () => {
    console.log("signup");
  };
  var [signUpData, setSignUpData] = useState({});
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
              Sign Up
            </h1>
          </Col>
          <Col md={4} xs={6} className="text-center">
            <Form>
              <Form.Control
                defaultValue={signUpData.email}
                name="email"
                onChange={(e) => {
                    signUpData = {
                    ...signUpData,
                    ...{
                      email: e.target.value
                    }
                  };
                  setSignUpData(signUpData);
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
              <Button
                onClick={signup}
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
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
