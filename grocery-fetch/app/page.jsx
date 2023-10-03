import React from "react";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";
import productsData from "@/components/products/products";

const Homepage = () => {
  return <ListProducts data={productsData} />;
};

export default Homepage;
