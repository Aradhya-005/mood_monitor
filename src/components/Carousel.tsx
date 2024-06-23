// components/Carousel.tsx
import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';  // Import your CSS file for custom styles

interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,  // Adjust the speed to slow down the transition (1500ms = 1.5s)
    slidesToShow: 1,  // Show only one slide at a time
    slidesToScroll: 1,
    vertical: false,  // Disable vertical scrolling
    verticalSwiping: false,  // Disable vertical swiping
    centerMode: true,
    centerPadding: '0',
    autoplay: false,  // Disable automatic scrolling
    nextArrow: <NextArrow />,  // Custom next arrow component
    prevArrow: <PrevArrow />,  // Custom previous arrow component
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      Next
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      Prev
    </div>
  );
};

export default Carousel;
