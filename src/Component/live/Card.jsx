import React from "react";

export const Card = (props) => {
  return (
    <div className="fl-cont">
      <div className="box1">
        <div className="backg">
          <img src={props.imgSrc} alt="" />
          <h2 className="h2">{props.city}</h2>
          <p style={{textAlign:"left"}} className="p">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};
