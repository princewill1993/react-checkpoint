import React from "react";
import { products } from "../utilis/product";

function Image() {
  const imageStyle = {
    Width: "5rem",
    Heigth: "5rem",
    borderRadius: "1rem",
  };
  return (
    <div style={imageStyle}>
      <img
        src={products.product_image}
        alt={products.product_name}
        className=" "
      />
    </div>
  );
}

export default Image;
