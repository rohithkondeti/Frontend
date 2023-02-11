
import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar1 = () => {
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
    

return (
<>
<nav className="main-nav">
{/* 1st logo part */}
<div className="logo">
<h2>
<span>F</span>eedback
<span>M</span>anagement
</h2>
</div>
{/* 2nd menu part  */}
<div className="menu-link">
      <ul>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/productid">Product Id</NavLink>
        </li>
        <li className="dropdown">
              <span
                className="dropdown-title"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                Category
              </span>
              {showCategoryDropdown && (
                <ul className="dropdown-content">
                  <li>
                    <NavLink to="/Electronics">Electronics</NavLink>
                  </li>
                  <li>
                    <NavLink to="/fashion">Fashion</NavLink>
                  </li>
                  <li>
                    <NavLink to="/sports">Sports</NavLink>
                  </li>
                   
                </ul>
              )}
            
          
        </li>
        <li className="dropdown">
              <span
                className="dropdown-title"
                onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}
              >
                Company
              </span>
              {showCompanyDropdown && (
                <ul className="dropdown-content">
                  <li>
                    <NavLink to="/Galaxy F13">Galaxy F13</NavLink>
                  </li>
                  <li>
                      <NavLink to="/Yeezy 450">Yeezy 450</NavLink>
                  </li>
                  <li>
                    <NavLink to="/V23e">V23e</NavLink>
                  </li>
                  <li>
                    <NavLink to="/TUF Gaming A17 ">TUF Gaming A17 </NavLink>
                  </li><li>
                    <NavLink to="/C30">C30</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Storm Football">Storm Football</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Astra Football"> Astra Football</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Slim fit shirt">Slim fit shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Mavis 350">Mavis 350</NavLink>
                  </li><li>
                    <NavLink to="/Airpods 131Pro">Airpods 131Pro</NavLink>
                  </li><li>
                    <NavLink to="/Rockerz510">Rockerz510</NavLink>
                  </li><li>
                    <NavLink to="/S22">S22</NavLink>
                  </li><li>
                    <NavLink to="/VivoBook K15">VivoBook K15</NavLink>
                  </li><li>
                    <NavLink to="/Narzo50i">Narzo50i</NavLink>
                  </li><li>
                    <NavLink to="/Beast Gym bag4">Beast Gym bag4</NavLink>
                  </li>
                  <li>
                    <NavLink to="/T1">T1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/X80 pro">X80 pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/iphone 14">iphone 14</NavLink>
                  </li><li>
                    <NavLink to="/iphone 11">iphone 11</NavLink>
                  </li><li>
                    <NavLink to="/Air Jordan 1 Retro High OG">Air Jordan 1 Retro High OG</NavLink>
                  </li>
                </ul>
              )}
        
        
        </li>
        <li>
        <NavLink to="/name">Name</NavLink>
        </li>
      </ul>
    </div>
  </nav>
</>
);
              };

export default Navbar1;




