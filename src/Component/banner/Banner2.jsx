import React from "react";
import "./Banner2.css";

function Banner2() {
  return (
    <>
      <div className="bannerCont2">
        <img
          className="bannerImg2"
          src="https://cdn.pixabay.com/photo/2020/07/27/02/09/tent-5441144__340.jpg"
          alt="tent"
        />
        <h1 className="notSure1" style={{ color: "white" }}>
          Questions about hosting?
        </h1>
        <a className="button2" href="">
         Ask a Superhost
        </a>
      </div>
    </>
  );
}

export default Banner2;
