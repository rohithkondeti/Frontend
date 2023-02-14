import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Adidas = () => { 
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/product/products/adidas`, {
          headers: { 'Access-Control-Allow-Origin': '*' },
          proxy: { 
            host: 'http://cors-anywhere.herokuapp.com/',
            port: 80
          }
        });
        setData2(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    (!data2) ? (
      <div style={{textAlign: 'center', padding: '20px'}}>Loading...</div>
    ) : (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
        {data2.map(product => (
          <div style={{width: '400px', height: '200px', background: '#f2f2f2', margin: '20px', textAlign: 'center', padding: '20px'}}>
            <h2 style={{color: '#0000ff'}}>{product.productName}</h2>
            <p><b>Company Name:</b> {product.companyName}</p>
            <p><b>Category:</b> {product.category}</p>
            <p><b>Price:</b> {product.price}</p>
            <p><b>Rating:</b> {product.rating}</p>
          </div>
        ))}
      </div>
    )
  );
};

export default Adidas;
