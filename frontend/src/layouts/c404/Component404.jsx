import React from "react";
import { Button } from "react-bootstrap";

const Component404 = () => {
  return (
    <>
      <div style={{ marginTop: "200px", color: "red" }} className="text-center">
        <p style={{ fontWeight: "bold", fontSize: "2.5316455696202533vh" }}>
          Error
        </p>
        <h1>404 NOT FOUND</h1>
      </div>
      <div className="text-center">
        <Button
          className="mt-4"
          style={{
            width: "20.44303797468354vh",
            // height: " 2.1645021645021645vw",
            borderRadius: "10px",
            //   fontSize: "2.5316455696202533vh",
            fontWeight: "800",
            backgroundColor: "#FF007C",
            border: "none",
          }}
          onClick={() => {
            // console.log("location", window.location.href);
          }}
        >
          Go to Home Page
        </Button>
      </div>
    </>
  );
};

export default Component404;
