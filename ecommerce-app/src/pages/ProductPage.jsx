import React from "react";
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  // Fetch product details using the id
  return (
    <div>
      <h1>Product {id}</h1>
      {/* Display product details */}
    </div>
  );
}

export default ProductPage;
