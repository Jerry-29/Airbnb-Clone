import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Banner.css";
function Banner() {
  return (
    <div className="container--Banner">
      <div>
        <h2>Sweet Home</h2>
      </div>
      <div>
        <p>
          <StarBorderIcon />
          5.0 <span>15 review</span>{" "}
          <span>
            <FavoriteBorderIcon />
            Superhost
          </span>{" "}
          . <span>Puri, Odisha, India</span>
        </p>
      </div>
      <div className="row-banner">
        <div className="col-md-6">
          <img
            className="pic1"
            src="https://a0.muscache.com/im/pictures/af9252c9-5cda-483c-8ce8-79e6814b6de7.jpg?im_w=1200"
          />
        </div>
        <div className="col-banner-flex">
          <div className="row">
            <div className="col-md-3 ml-3">
              <img
                src="https://a0.muscache.com/im/pictures/d2fd4dff-a260-4a64-8bab-0706c5306089.jpg?im_w=720"
                className="pic2"
              />
            </div>
            <div className="col-md-3 ml-5">
              <img
                src="https://a0.muscache.com/im/pictures/53c4c703-90eb-41a5-8346-db912dfe3add.jpg?im_w=720"
                className="pic3"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 ml-3">
              <img
                src="https://a0.muscache.com/im/pictures/a8eeda1e-3dd0-4f11-a0ab-2abdebd35afa.jpg?im_w=720"
                className="pic2"
              />
            </div>
            <div className="col-md-3 ml-5">
              <img
                src="https://a0.muscache.com/im/pictures/7ca06af7-cafd-45da-b7cd-ebb313ef8fd8.jpg?im_w=720"
                className="pic3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
