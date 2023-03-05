import React, { useContext } from "react";
import BrandNavbar from "./components/common/BrandNavbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import MapData from "./components/MapData";
import Chat from "./components/Chat/Chat";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Scrollpop from "./Scrollpop/Scrollpop";
import WLogout from "./components/common/WLogout";
// import { AppBinderContext } from './AppBinderContext';

const Assembler = () => {
  // const [name] = useContext(AppBinderContext);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home/:lat/:lng" exact element={<Home />} />
          <Route path="/dash" exact element={<Dashboard />} />
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/mapdata" exact element={<MapData />} />
          <Route path="/chat" exact element={<Chat />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/logout" exact element={<WLogout />} />
        </Routes>
      </Router>
      <Scrollpop />
    </>
  );
};

export default Assembler;
