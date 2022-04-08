import React from "react";

import "./Welcome.css";
import welcomeImg from "./Imgs/NBGC Banner.webp";

export default function WelcomePage() {
  return (
    <a href="/Home" className="welcome">
      {/* <div className="Saraaa">
        <div className="center" id="message">
          
        </div>
      </div> */}
      <img src={welcomeImg} className="wlimg" />
      <div className="outside">
        <i className="fa fa-arrow-up"></i> <br />
        Enter Here
      </div>
    </a>
  );
}
