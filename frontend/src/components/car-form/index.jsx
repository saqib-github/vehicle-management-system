import React from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const index = () => {
  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12} lg={12} className="">
          <div className="d-flex flex-wrap w-100">
            <div className="d-flex" style={{ width: "367px" }}>
              <p className="mr-1 ml-1">Name</p>
              <Form.Control
                type="text"
                step="any"
                size="sm"
                // disabled={viewStatus}
                defaultValue="No Value"
              />
            </div>
            <div className="d-flex" style={{ width: "367px" }}>
              <p className="mr-1 ml-1">Model</p>
              <Form.Control
                type="text"
                size="sm"
                // disabled={viewStatus}
                defaultValue="No Value"
              />
            </div>
            <div className="d-flex" style={{ width: "367px" }}>
              <p className="mr-1 ml-1">Price</p>
              <Form.Control
                type="number"
                size="sm"
                min="0"
                // disabled={viewStatus}
                // defaultValue="2022-01-17:17:12"
              />
            </div>
            <div className="d-flex" style={{ width: "367px" }}>
              <p className="mr-1 ml-1">Color</p>
              <Form.Control
                type="text"
                size="sm"
                // disabled={viewStatus}
                defaultValue="No Value"
              />
            </div>
            <div className="d-flex" style={{ width: "367px" }}>
              <p className="mr-1 ml-1">Make</p>
              <Form.Control
                type="text"
                size="sm"
                // disabled={viewStatus}
                defaultValue="No Value"
              />
            </div>
            <div className="d-flex" style={{ width: "367px" }}>
              <p className="mr-1 ml-1">Registeration</p>
              <Form.Control
                type="text"
                size="sm"
                // disabled={viewStatus}
                defaultValue="No Value"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default index;
