import React from 'react';
import Slider from 'react-slick';
import slide1 from '../../assets/slide1.webp';
import slide2 from '../../assets/slide2.webp';
import slide3 from '../../assets/slide3.webp';
import slide4 from '../../assets/slide4.webp';
import slide5 from '../../assets/slide5.webp';
import slide6 from '../../assets/slide6.webp';
import slide7 from '../../assets/slide7.webp';
import slide8 from '../../assets/slide8.webp';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './LandingPage.css'; // Ensure this is imported

const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='hero'>
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" />
        </div>
        <div>
          <img src={slide5} alt="Slide 5" />
        </div>
        <div>
          <img src={slide6} alt="Slide 6" />
        </div>
        <div>
          <img src={slide7} alt="Slide 7" />
        </div>
        <div>
         <img src={slide8} alt="Slide 8" />
        </div>
       
       
       

      </Slider>
      <div className="welcome-message">
        <h1>Welcome to the NIT Delhi Health Center</h1>
      </div>
    </div>
  );
};

export default LandingPage;
