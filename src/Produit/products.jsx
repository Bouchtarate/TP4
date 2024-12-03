import React from "react";
import { Link } from "react-router-dom";
import productData from "./productData";
export default function products() {
  
  return productData.map((product) => (
    <div key={product.id}>
      <Link to={`/products/${product.id}`}>{product.name}</Link>
    </div>
  ));
}
