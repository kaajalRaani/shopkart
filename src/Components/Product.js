import React from "react";


const Product = ({title,image,price,description}) => {
  return (
    <div className="product">
      <div className="img">
        <img src={image} alt="" />
        <span className="arrow">
          <i class="fa-solid fa-arrow-up"></i>
        </span>
      </div>
      <div className="product-text">
        <p className="product-text-title">{title}</p>
        <p className="product-text-desc">{description}</p>
        <p className="product-text-price">${price}</p>
      </div>
    </div>
  );
};

export default Product;
