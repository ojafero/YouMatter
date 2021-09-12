import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div class="wrapper">
        <div class="logo">
          <h1>You Matter</h1>
        </div>
        <ul class="nav-area">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Your Order</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
