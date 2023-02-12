import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Name = ( ) => {
  const [productName, setProductName] = useState('');
  const [data2, setData2] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    let name=event.target.elements.productName.value.toLowerCase();
    console.log(name)
    try {
      const response = await axios.get(`http://localhost:8081/product/productname/${name}`, {
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: { 
          host: 'http://cors-anywhere.herokuapp.com/',
          port: 80
        }
      });
      setData2(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    (!data2) ? (
      <div className="dialog-container">
        <div className="dialog-header">
          <h3>Product Name</h3>
          <button className="close-btn">x</button>
        </div>
        <div className="dialog-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="product-name">Enter Product Name:</label>
              <input
                type="text"
                id="product-name"
                name='productName'
                className="form-control"
                placeholder="Enter Product Name"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
              />
            </div>
            <button className="submit-btn" type="submit">Submit</button>
          </form> 
        </div>
      </div>
    ) : (
      <div className="product-details">
        <h3>Product Details</h3>
        <p><b>Product Name:</b> {data2.productName}</p>
        <p><b>Company Name:</b> {data2.companyName}</p>
        <p><b>Category:</b> {data2.category}</p>
        <p><b>Price:</b> {data2.price}</p>
        <p><b>Rating:</b> {data2.rating}</p>
      </div>
    )
  );
};

export default Name;
