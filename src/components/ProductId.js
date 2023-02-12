import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductId = () => {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    let pid = event.target.elements.productId.value
    console.log(pid)
    try {
      const response = await axios.get(`http://localhost:8081/product/product/${pid}`, {
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: { 
          host: 'http://cors-anywhere.herokuapp.com/',
          port: 80
        }
      });
      setProductData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    (!productData) ? (
      <div className="dialog-container">
        <div className="dialog-header">
          <h3>Product ID</h3>
          <button className="close-btn">x</button>
        </div>
        <div className="dialog-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="product-id">Enter Product ID:</label>
              <input
                type="text"
                id="product-id"
                name='productId'
                className="form-control"
                placeholder="Enter Product ID"
                value={productId}
                onChange={(event) => setProductId(event.target.value)}
              />
            </div>
            <button className="submit-btn" type="submit" >Submit</button>
          </form> 
        </div>
      </div>
    ) : (
      <div>
        {JSON.stringify(productData)}
      </div>
    )
  );
};

export default ProductId;
