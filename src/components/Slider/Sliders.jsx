import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bir from "../public/bir.jpg";
import Ikki from "../public/ikki.jpg";
import Uch from "../public/uch.jpg";
import Tort from "../public/tort.jpg";
import "./slide.css"
function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slides">
      <Slider {...settings}>
        <div className="imges">
          <img src={Bir} alt="Image 1" />
        </div>
        <div className="imges">
          <img src={Ikki} alt="Image 2" />
        </div>
        <div className="imges">
          <img src={Uch} alt="Image 3" />
        </div>
        <div className="imges">
          <img src={Tort} alt="Image 4" />
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
