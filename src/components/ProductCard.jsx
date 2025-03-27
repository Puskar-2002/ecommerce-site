import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-title">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;