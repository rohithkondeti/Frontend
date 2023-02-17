import React, { useState } from 'react';
import axios from 'axios';


const Feedback = () => {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState([]);

  const handleSubmit = async(event) => {
    event.preventDefault();
    let pid = event.target.elements.productId.value
    console.log(pid)
    try {
      const response = await axios.get(`http://localhost:8083/feedback/getfeedback/${pid}`, {
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
    <div className="feedback-container">
      <center><h3>Product Feedbacks</h3></center>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="product-id">Enter Product Id:</label>
          <input
            type="text"
            id="product-id"
            name='productId'
            className="form-control"
            placeholder="Enter Product Id"
            value={productId}
            onChange={(event) => setProductId(event.target.value)}
          />
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </form>
      {productData.map((feedback, index) => (
        <div className="feedback" key={index}>
          <p><b>Product Id:</b> {feedback.productId}</p>
          <p><b>Feedback:</b> {feedback.feedback}</p>
          <p><b>Rating:</b> {feedback.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
