import React, { useState } from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import MenuIcon from "../../styles/MenuIcon";
import AvtarIcon from "../../assets/Profile.png";
import SideMenu from "../sidebar/index";

const Header = () => {
  const [showSideMenu, setSideMenu] = useState(false);
  return (
    <>
      <Container>
        <Navbar
          bg="white"
          variant="white"
          className="shadow p-2 bg-white rounded"
          fixed="top"
        >
          <Container fluid style={{ height: "55px", maxWidth: "100%" }}>
            <Navbar.Collapse className="justify-content-between">
              <Navbar.Text>
                <Button
                  variant="outline-danger"
                  style={{ backgroundColor: "white", border: "none" }}
                  onClick={() => {
                    setSideMenu(true);
                  }}
                >
                  <MenuIcon />{" "}
                </Button>
              </Navbar.Text>
              <Navbar.Text>
                <h1
                  style={{
                    color: "black",
                    marginTop: "20px",
                    cursor: "pointer"
                  }}
                  className="stickable"
                >
                  Dashboard
                </h1>
              </Navbar.Text>
              <Navbar.Text>
                <Button
                  variant="outline-danger"
                  style={{ backgroundColor: "white", border: "none" }}
                >
                  <img src={AvtarIcon} alt={""} />
                </Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      {/* ............................... */}
      <SideMenu
        show={showSideMenu}
        placement="start"
        onHide={() => {
          setSideMenu(false);
        }}
      />
    </>
  );
};

export default Header;
