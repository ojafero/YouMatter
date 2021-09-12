import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="wrapper">
        <Link to="/home">
          <div class="logo">
            <h1>You Matter</h1>
          </div>
        </Link>
        <ul className="nav-area">
          <li>
            <Link to="/home">
              <a href="#">Home</a>
            </Link>
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
