import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/header/index";

const Customers = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} xs={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12} style={{ marginTop: "150px" }}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Customers;
