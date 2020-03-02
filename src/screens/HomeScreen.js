import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../style/HomeScreen.css";
import Fade from "react-reveal/Fade";
import WarpBackground from "../components/WarpBackground";
import NachoLogo from "../assets/NachoLogo.png";
import Button from "../components/Button";

const nameTitle = {
  fontWeight: "bold"
};

const subTitle = {
  fontSize: "2.5vh"
};

const introTitle = {
  fontSize: "3vh"
};

const HomeScreen = () => {
  return (
    <div className="homeScreenStyle">
      <WarpBackground />
      <div className="titleStyle">
        <Fade top>
          <img src={NachoLogo} alt="My personal logo" />
          <h1 style={introTitle}>Hello, I'm</h1>
        </Fade>
        <h1 style={nameTitle}>Ignacio Rodriguez Justo</h1>
        <Fade bottom>
          <span style={subTitle}>Mobile and Web Developer</span>
        </Fade>
        <div className="btnContainer">
          <Link to="/projects">
            <Button text="my work" className="homeScreenButton" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
