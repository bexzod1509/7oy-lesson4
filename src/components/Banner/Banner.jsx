import React from "react";
import "./Banner.css";
import banner from "../../assets/banner.png";
import bannermini from "../../assets/bannermini.png";
function Banner() {
  return (
    <div className="container">
      <div className="b">
        <div className="b1">
          <p>Welcome to GreenShop</p>
          <h1>
            Let’s Make a Better <b>Planet</b>
          </h1>
          <h2>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </h2>
          <button>SHOP NOW</button>
        </div>
        <div className="b2">
          <img style={{ marginRight: "-170px" }} src={bannermini} alt="" />
          <img style={{ width: "450px" }} src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
