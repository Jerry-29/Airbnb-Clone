import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="bannerCont">
        <img
          className="bannerImg"
          src="https://wallpaperaccess.com/full/5835.jpg"
          alt="tent"
        />
        <h1 className="notSure" style={{ color: "white" }}>
          Not sure where to go? Perfect.
        </h1>
        <a className="button1" href="">
          I'm Flexible
        </a>
      </div>
    </>
  );
}

export default Banner;
