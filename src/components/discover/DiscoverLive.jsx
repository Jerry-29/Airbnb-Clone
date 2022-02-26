import { Discover } from "./Discover";

import React from "react";
import "./Discover.css";

export const DiscoverLive = (props) => {
  return (
    <>
      <h1 className="heads"> Inspiration for your next trip</h1>
      <div className="fl">
        <Discover imgSrc="https://a0.muscache.com/im/pictures/0947f1e4-a6a9-4514-8b78-9e47ea797631.jpg" desc="Things to do on your trip" a="Experiences" />
        <Discover imgSrc="https://a0.muscache.com/im/pictures/49a25918-9b84-4d43-9d48-b45f926755bd.jpg" desc="Things to do from home" a="Online Experiences"/>
      </div>
    </>
  );
};
