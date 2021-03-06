import React from "react";
import ReactDOM from "react-dom";
import "./Cards.css";
import { EmbedMap, Render } from "./GoogleMap";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
const Cards = (props) => {
  //   console.log(props);
  const images = props.img;
  // console.log(props.review.length);

  return (
    <div className="Cards-main-container">
      <div
        className="Leftdiv"
        onClick={() => {
          return;
        }}
      >
        <div className="imgdiv">
          <ImageSlider str={images} />
        </div>
        <Link style={{ textDecoration: "none" }} to={`/products/${props.id}`}>
          <div className="discriptiondiv">
            <div>
              <p>{props.typeofplace}</p>
            </div>
            <div className="name">
              <p>{props.name}</p>
            </div>
            <div className="description">
              <p>{props.description}</p>
            </div>
            <div className="beds">
              <p> •{props.beds} Beds</p>
              <p> •{props.bedrooms} Bedrooms</p>
              <p> •{props.bathrooms} Bathrooms</p>
            </div>
            <div className="price">
              <h3>
                ₹{props.price}
                <span className="night">/night</span>
              </h3>
            </div>
            <p>{props.location}</p>
            <div>
              <h4>
                <span className="star">★</span> {props.rating}
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
