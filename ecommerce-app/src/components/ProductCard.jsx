import React from "react";
function ProductCard({ product }) {
    return (
      <div>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>${product.price}</span>
        <button>Add to Cart</button>
      </div>
    );
  }
  
  export default ProductCard;
  
