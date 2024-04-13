import React from "react";
import "@/components/Navbar.css";

function Navbar() {
  return (
    <header>
      <h2>DOORDASH</h2>
      <nav>
        <ul>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
