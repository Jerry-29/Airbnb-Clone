import React from "react";
import "./Discover.css";

export const Discover = (props) => {
  return (
    <div className="fl-cont1">
      <div className="box1">
        <div className="backgg">
          <img src={props.imgSrc} alt="" />
          <p>{props.desc} <br /><br /><a className="abutton" href="#">{props.a}</a></p>
      
        </div>
      </div>
    </div>
  );
};
