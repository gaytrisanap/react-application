import React from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <span className="product_name">Deserts</span>
        
    <div className="navbar_links">
      <Link to="/" className="link">
        Home
      </Link>

      <Link to="/about" className="link">
        About
      </Link>

      <Link to="/contact" className="link">
        Contact
      </Link>
      </div>
    </div>
  )
}

export default Navbar