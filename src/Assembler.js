import React, { useContext } from "react";
import BrandNavbar from "./components/common/BrandNavbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

// import { AppBinderContext } from './AppBinderContext';

const Assembler = () => {
  // const [name] = useContext(AppBinderContext);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/home"
            exact
            element={
              <Row style={{ margin: "20px 0 0 0" }}>
                <Col style={{ padding: "10px 90px" }}>
                  <Home />
                </Col>
              </Row>
            }
          />
          <Route
            path="/"
            exact
            element={
              <Row style={{ margin: "20px 0 0 0" }}>
                <Col style={{ padding: "10px 90px" }}>
                  <LandingPage />
                </Col>
              </Row>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default Assembler;
