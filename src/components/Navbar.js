import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>F</span>eedback
            <span>M</span>anagement
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li className="dropdown">
              <span
                className="dropdown-title"
                onClick={() => setShowProductDropdown(!showProductDropdown)}
              >
                Product
              </span>
              {showProductDropdown && (
                <ul className="dropdown-content">
                  <li>
                    <NavLink to="/All-products">All Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/rating">Rating</NavLink>
                  </li>
                  <li>
                    <NavLink to="/id">Id</NavLink>
                  </li>
                  <li>
                    <NavLink to="/name">Name</NavLink>
                  </li>
                  <li>
                    <NavLink to="/top-rated">Top Rated</NavLink>
                  </li>
                  <li>
                    <NavLink to="/least-rated">Least Rating</NavLink>
                  </li>
                  <li>
                    <NavLink to="/company">Company</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
