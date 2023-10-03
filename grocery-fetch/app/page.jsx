"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your API route
    axios
      .get("http://localhost:9090/products")
      .then(response => {
        // Handle the data from the backend
        console.log("Data from the backend:", response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);
  console.log("Products state:", products);
  return <ListProducts data={products} />;
};

export default Homepage;
