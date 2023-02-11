import React from "react";
import Navbar1 from "./Navbar1";
import ProductIdDialog from "./ProductIdDialog";
 
const Product = () => {

  
  return (
    <>
      <Navbar1 />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> Product Page</h1>
      </section>
    </>
  );
};

export default Product;


/* import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://your-java-backend-url/api/')
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Data from the API:</h1>
      {data.map(item => (
        <p key={item.id}>{item.value}</p>
      ))}
    </div>
  );
};

export */