import React, { useState, useEffect, useRef } from "react";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewProducts = () => {
  const [data, setData] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Inside the effect, you can make a Fetch API request
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="new-products">
      <div className="slider-controls">
        <span onClick={goToNextSlide} className="prev-btn">
          &#8592;
        </span>
        <span onClick={goToPrevSlide} className="next-btn">
          &#8594;
        </span>
      </div>
      <span className="title">New products</span>
      <div className="inner">
        <div className="side-bar">
          <li>Apparel</li>
          <li className="selected">Accessories</li>
          <li>Best Sellers</li>
          <li>50% off</li>
        </div>
        <div className="products">
          <Slider {...settings} ref={sliderRef}>
            {data.map((curr) => {
              return <Product
                key={curr.id}
                title={curr.title}
                image={curr.image}
                price={curr.price}
                description={curr.description}
              />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
