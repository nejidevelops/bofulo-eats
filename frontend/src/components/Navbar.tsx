import React from "react";
import "@/components/Navbar.css";

function Navbar() {
  return (
    <header>
      <h2>DOORDASH</h2>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Something else</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
