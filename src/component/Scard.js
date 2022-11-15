import React from "react";

import image1 from "../component/image/html.png";
import image2 from "../component/image/css.png";
import image3 from "../component/image/js.png";
import image4 from "../component/image/AJAX.png";
import image5 from "../component/image/photo.png";
import image6 from "../component/image/agile.jpg";
import image7 from "../component/image/git.png";
import image8 from "../component/image/xd.png";
import image9 from "../component/image/react.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Scard = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };


  return (
    <div className="container">
         <p className='namecol'>MY SKILLS</p>
        <h3>Visit my skills section i works on these technologies</h3>
        <Slider {...settings} style={{marginTop:"60px"}}>
        <div>
        <div class="card" style={{width:"10rem"}}>
            <div class="card-body">
              <img src={image1} alt="logo" style={{width:"100%",height:"120px"}}></img>
            </div>
          </div>
          </div>
          <div>
        <div class="card" style={{width:"10rem"}}>
            <div class="card-body">
              <img src={image2} alt="logo" style={{width:"100%",height:"120px"}}></img>
            </div>
          </div>
          </div>
          <div>
        <div class="card" style={{width:"10rem"}}>
            <div class="card-body">
              <img src={image3} alt="logo" style={{width:"100%",height:"120px"}}></img>
            </div>
          </div>
          </div>
          <div>
        <div class="card" style={{width:"10rem"}}>
            <div class="card-body">
              <img src={image4} alt="logo" style={{width:"100%",height:"120px"}}></img>
            </div>
          </div>
          </div>
          <div>
        <div class="card" style={{width:"10rem"}}>
            <div class="card-body">
              <img src={image5} alt="logo" style={{width:"100%",height:"120px"}}></img>
            </div>
          </div>
          </div>
          <div>
        <div class="card" style={{width:"10rem"}}>
            <div class="card-body">
              <img src={image6} alt="logo" style={{width:"100%",height:"120px"}}></img>
            </div>
          </div>
          </div>
          <div>
        <div class="card" style={{width:"10rem"}}>
            <div class="card-body">
              <img src={image7} alt="logo" style={{width:"100%",height:"120px"}}></img>
            </div>
          </div>
          </div>
          <div>
        <div class="card" style={{width:"10rem"}}>
            <div class="card-body">
              <img src={image8} alt="logo" style={{width:"100%",height:"120px"}}></img>
            </div>
          </div>
          </div>
          <div>
        <div class="card" style={{width:"10rem"}}>
            <div class="card-body">
              <img src={image9} alt="logo" style={{width:"100%",height:"120px"}}></img>
            </div>
          </div>
          </div>
    </Slider>
    </div>
  );
    }
export default Scard;
