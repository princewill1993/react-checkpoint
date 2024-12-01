import React from "react";
import { products } from "../utilis/product";

function Name() {
  const nameStyle = {
    backgroundColor: "purple",
    color: "red",
    padding: "1rem 0",
    borderRadius: "1rem",
  };
  return (
    <div style={nameStyle}>
      <h1>{products.product_name}</h1>
    </div>
  );
}

export default Name;
// {
//   props.product_name;
// }
