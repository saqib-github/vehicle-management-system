import React, { useState } from "react";
import "./index.css";
import { Button } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "reactstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";

const Index = () => {
  const [carData, setCarData] = useState({
    name: "",
    model: "",
    color: "",
    price: 0,
    make: "",
    registeration: ""
  });
  return (
    <Card
      md="12"
      className="h-100"
      style={{
        boxShadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
      }}
    >
      <CardHeader>
        <h2>Create A New Car with details</h2>
      </CardHeader>
      <CardBody>
        <div className="d-flex flex-wrap w-100 justify-content-around mt-3 mb-3">
          <div className="d-flex w-25">
            <p className="mr-3 ml-1 mt-3 w-25">
              <strong>Name: </strong>
            </p>
            <Form.Control
              onChange={(e) => [
                setCarData({ ...carData, name: e.target.value })
              ]}
              className="ml-3"
              type="text"
              step="any"
              size="sm"
              name="name"
              // disabled={viewStatus}
              defaultValue={carData.name}
            />
          </div>
          <div className="d-flex" style={{ width: "367px" }}>
            <p className="mr-3 ml-1 mt-3 w-25">
              <strong>Model: </strong>
            </p>
            <Form.Control
              onChange={(e) => [
                setCarData({ ...carData, model: e.target.value })
              ]}
              type="text"
              size="sm"
              name="model"
              // disabled={viewStatus}
              defaultValue={carData.model}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap w-100 justify-content-around mt-3 mb-3">
          <div className="d-flex" style={{ width: "367px" }}>
            <p className="mr-3 ml-1 mt-3 w-25">
              <strong>Price: </strong>
            </p>
            <Form.Control
              onChange={(e) => [
                setCarData({ ...carData, price: Number(e.target.value) })
              ]}
              type="number"
              size="sm"
              min="0"
              name="price"
              // disabled={viewStatus}
              defaultValue={carData.price}
            />
          </div>
          <div className="d-flex" style={{ width: "367px" }}>
            <p className="mr-3 ml-1 mt-3 w-25">
              <strong>Color: </strong>
            </p>
            <Form.Control
              onChange={(e) => [
                setCarData({ ...carData, color: e.target.value })
              ]}
              type="text"
              name="color"
              size="sm"
              // disabled={viewStatus}
              defaultValue={carData.color}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap w-100 justify-content-around mt-3 mb-3">
          <div className="d-flex" style={{ width: "367px" }}>
            <p className="mr-3 ml-1 mt-3 w-25">
              <strong>Make: </strong>
            </p>
            <Form.Control
              onChange={(e) => [
                setCarData({ ...carData, make: e.target.value })
              ]}
              type="text"
              name="make"
              size="sm"
              // disabled={viewStatus}
              defaultValue={carData.make}
            />
          </div>
          <div className="d-flex" style={{ width: "367px" }}>
            <p className="mr-3 ml-1 mt-3 w-50">
              <strong>Registeration: </strong>
            </p>
            <Form.Control
              onChange={(e) => [
                setCarData({ ...carData, registeration: e.target.value })
              ]}
              type="text"
              name="registeration"
              size="sm"
              // disabled={viewStatus}
              defaultValue={carData.registeration}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap w-100 justify-content-center mt-5 mb-5">
          <Button
            onClick={() => {
              const { name, model, price, color, make, registeration } =
                carData;
              if (
                !name ||
                typeof name !== "string" ||
                !model ||
                typeof model !== "string" ||
                !price ||
                typeof price !== "number" ||
                !color ||
                typeof color !== "string" ||
                !make ||
                typeof make !== "string" ||
                !registeration ||
                typeof registeration !== "string"
              ) {
                Swal.fire("Opps", "All fields are required", "error");
                return;
              }
              console.log(carData, "carData");
              const id = localStorage.getItem("userId");
              let url = `${process.env.REACT_APP_API_URL}/api/car/create`;
              const headers = {
                "x-access-token": `${localStorage.getItem("accessToken")}`
              };
              axios
                .post(url, { userId: id, ...carData }, { headers: headers })
                .then((result) => {
                  console.log("result", result.status);
                  if (result.status === 200) {
                    setCarData({});
                    Swal.fire(
                      "Congrats",
                      "New Car details Created Successfully",
                      "success"
                    );
                  }
                })
                .catch((error) => {
                  Swal.fire("Opps", "There is error", "error");
                  console.log("error", error);
                });
            }}
            className="mt-3"
            style={{
              height: "50px",
              border: "none",
              width: "200px",
              backgroundColor: "green",
              borderRadius: "10px",
              fontSize: "20px",
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
            }}
          >
            <strong>Save</strong>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Index;
