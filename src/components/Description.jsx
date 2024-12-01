import React from "react";
import { products } from "../utilis/product";

function Description() {
  const descriptionStyle = {
    color: "white",
    fontSize: "2rem",
    backgroundColor: "black",
    padding: "1rem 0",
    borderRadius: "1rem",
  };
  return (
    <p style={descriptionStyle}>
      <strong>Description:</strong>
      {products.product_description}
    </p>
  );
}

export default Description;
