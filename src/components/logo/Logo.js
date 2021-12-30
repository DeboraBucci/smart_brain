import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        style={{
          height: "150px",
          width: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img alt="logo" src={brain} />
          {/*https://icons8.com/icon/48282/brain*/}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
