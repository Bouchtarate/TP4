import React from 'react'
import {useParams} from "react-router-dom";
import productData from "./productData";
export default function productDetails() {
    const {productId} = useParams();
    const product = productData.find((product) => product.id ===productId);
   return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
