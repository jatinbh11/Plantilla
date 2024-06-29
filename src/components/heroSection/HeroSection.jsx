import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import homeImage1 from './home.jpg'; 
import homeImage2 from './home2.png'; 
import homeImage3 from './home3.png'; 

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 // Change the speed according to your preference
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={homeImage1} alt="Home 1" style={{ width: '100%', height: 'auto' }} /> 
      </div>
      <div>
        <img src={homeImage2} alt="Home 2" style={{ width: '100%', height: 'auto' }} /> 
      </div>
      <div>
        <img src={homeImage3} alt="Home 3" style={{ width: '100%', height: 'auto' }} /> 
      </div>
    </Slider>
  );
}

export default HeroSection;
