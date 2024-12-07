import React from "react";
import { useState, useEffect } from 'react';
import ProductList from "../components/ProductionList";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Welcome to Our Shop</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
