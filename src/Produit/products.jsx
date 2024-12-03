import React from "react";
import { Link } from "react-router-dom";
import productData from "./productData";
export default function products() {
  return productData.map((product) => (
    <div key={product.id}>
      <h4>{product.name}</h4>
      <strong>{product.price}</strong>
    </div>
  ));
}
