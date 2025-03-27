import React from "react";
import "./Navbar.css";

const Navbar = ({ cartItems }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <h1 className="logo">E-Commerce</h1>
      <button className="cart-button">Cart ({totalItems})</button>
    </nav>
  );
};

export default Navbar;