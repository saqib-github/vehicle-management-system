import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Component404 = () => {
  const navigate = useNavigate();
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
            cursor: 'pointer',
            // height: " 2.1645021645021645vw",
            borderRadius: "10px",
            //   fontSize: "2.5316455696202533vh",
            fontWeight: "800",
            backgroundColor: "#FF007C",
            border: "none",
          }}
          onClick={() => {
            navigate(-1);
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
