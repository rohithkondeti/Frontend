
import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar1 = () => {
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
    const [showRatedDropdown, setShowRatedDropdown] = useState(false);
    const [showFeedbackDropdown, setShowFeedbackDropdown] = useState(false);
    

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
          <NavLink to="/all">All Products</NavLink>
        </li>
        <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        <li>
          <NavLink to="/productid">Product Id</NavLink>
        </li>
        <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        <li>
        <NavLink to="/name">Product Name</NavLink>
        </li>
        <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
                    <NavLink to="/Electronic">Electronics</NavLink>
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
        <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
                    <NavLink to="/Samsung ">Samsung</NavLink>
                  </li>
                  <li>
                      <NavLink to="/Adidas">Adidas</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Vivo">Vivo</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Asus ">Asus </NavLink>
                  </li><li>
                    <NavLink to="/Realme">Realme</NavLink>
                  </li>
                  <li>
                    <NavLink to="/NIVIA">NIVIA</NavLink>
                  </li>
                  <li>
                    <NavLink to="/MARMAN"> MARMAN</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Louis philippe">Louis philippe</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Yonex">Yonex</NavLink>
                  </li><li>
                    <NavLink to="/Boat">Boat</NavLink>
                  </li><li>
                    <NavLink to="/APPLE">APPLE</NavLink>
                  </li><li>
                    <NavLink to="/Nike">Nike</NavLink>
                  </li>
                  
                </ul>
              )}
        
        
        </li>
        <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        
        <li className="dropdown">
              <span
                className="dropdown-title"
                onClick={() => setShowRatedDropdown(!showRatedDropdown)}
              >
                Rated
              </span>
              {showRatedDropdown && (
                <ul className="dropdown-content">
                  <li>
                    <NavLink to="/topratedproducts">Top Rated </NavLink>
                  </li>
                  <li>
                    <NavLink to="/leastratedproducts">Least Rated</NavLink>
                  </li>
                   
                   
                </ul>
              )}
            
            
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li><li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li className="dropdown">
              <span
                className="dropdown-title"
                onClick={() => setShowFeedbackDropdown(!showFeedbackDropdown)}
              >
                Feedback 
              </span>
              {showFeedbackDropdown && (
                <ul className="dropdown-content">
                  <li>
                    <NavLink to="/addfeedback">Add Feedback </NavLink>
                  </li>
                  <li>
                    <NavLink to="/getfeedback">View Feedback</NavLink>
                  </li>
                  <li>
                    <NavLink to="/updaterating">UpdateRating</NavLink>
                  </li>
                   
                   
                </ul>
              )}
              </li>
      </ul>
      
      
    </div>
  </nav>
</>
);
              };

export default Navbar1;




