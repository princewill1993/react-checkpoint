import React from "react";
import { products } from "../utilis/product";

function Price(props) {
  const priceStyle = {
    fontSize: "2rem",
    color: "blue",
    backgroundColor: "grey",
    padding: "1rem 0",
    borderRadius: "1rem",
  };
  return (
    <p style={priceStyle}>
      <strong>Price:</strong>
      {products.product_price}
    </p>
  );
}

export default Price;
