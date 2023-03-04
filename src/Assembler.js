import React, { useContext } from "react";
import BrandNavbar from "./components/common/BrandNavbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard"
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
          <Route path="/home" exact element={<Home />} />
          <Route path="/dash" exact element={<Dashboard />} />
          <Route path="/" exact element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default Assembler;
