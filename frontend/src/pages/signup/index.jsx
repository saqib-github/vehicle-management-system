import React, { useState } from "react";
import "./index.css";
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import { ValidateEmail } from "../../components/helpers";
import Swal from "sweetalert2";
import axios from "axios";
const signUp = "Sign Up";
const Loading = "Loading.....";
const p1 = "please enter valid email";
const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    email: ""
  });
  const [validEmail, setValidEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const signup = () => {
    const { email } = signUpData;
    if (typeof email !== "string") {
      Swal.fire("Opps", "Please Enter Valid Email", "error");
      return;
    }
    setLoading(true);
    if (!validEmail || !email) {
      Swal.fire("Opps", "Please Enter Valid Email", "error");
    }
    if (validEmail && email) {
      console.log(signUpData, "signUpData");
      const url = `${process.env.REACT_APP_API_URL}/api/auth/signup`;
      axios
        .post(url, { email })
        .then((res) => {
          console.log(res, "response");
          const { message, password } = res.data;
          const { status } = res;
          if (status === 200) {
            Swal.fire(
              "Congratulations",
              `${message}, your password is: ${password} please copy`,
              "success"
            );
            setSignUpData({ email: "" });
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error.response);
          const { message } = error.response.data;
          Swal.fire("Opps", `${message}`, "error");
          setLoading(false);
        });
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
              signUp
            </h1>
          </Col>
          <Col md={4} xs={6} className="text-center">
            {!validEmail && signUpData.email && (
              <h4 style={{ color: "red" }}>{p1}</h4>
            )}
            <Form>
              <Form.Control
                defaultValue={signUpData.email || ""}
                name="email"
                onChange={(e) => {
                  const email = e.target.value;
                  setValidEmail(ValidateEmail(email));
                  console.log(validEmail, "validEmail");
                  setSignUpData({ ...signUpData, email });
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
                  fontSize: "20px",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                }}
              >
                {loading && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="md"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                <strong>{loading ? "" : signUp}</strong>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
