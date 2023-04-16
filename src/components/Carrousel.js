import React from 'react';
import Slider from "react-slick";


const Carrousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className='boutique'>
        <Slider {...settings}>
          <div>
            <img src="./images/accueil2.jpg" alt="image1" />
          </div>
          <div>
            <img src="./images/accueil1.jpg" alt="image2" />
          </div>
          <div>
            <img src="./images/accueil3.jpg" alt="image3" />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default Carrousel;