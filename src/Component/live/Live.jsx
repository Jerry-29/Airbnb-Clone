import { Card } from "./Card";

import React from "react";

export const Live = (props) => {
  return (
    <>
      <h1 className="heads"> Inspiration for your next trip</h1>
      <div className="fl">
        <Card
          imgSrc="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg"
          city="Lonavala"
          desc="66m kilometers away"
        />
        <Card
          imgSrc="https://a0.muscache.com/im/pictures/0538dab4-a0fc-4035-b6b2-40fa3532ee7b.jpg"
          city="Calangute"
          desc="Lonavala 66m kilometers away"
        />
        <Card
          imgSrc="https://a0.muscache.com/im/pictures/086a16e3-47ef-4616-bbcd-147e03f32d47.jpg"
          city="Nashik"
          desc="Lonavala 66m kilometers away"
        />
        <Card
          imgSrc="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg"
          city="Panchghani"
          desc="Lonavala 66m kilometers away"
        />
      </div>
    </>
  );
};
