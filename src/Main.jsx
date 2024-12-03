import React from "react";
import "./main.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import Products from "./Produit/products";
import productData from "./Produit/productData";
export default function Main() {
  return (
    <header>
      <Home />
      <Products />
    </header>
  );
}
