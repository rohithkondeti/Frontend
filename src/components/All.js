import React, { useState, useEffect } from 'react';
import axios from 'axios';

const All = () => {
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/product/products`, {
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
      <div>Loading...</div>
    ) : (
      <div>
        {JSON.stringify(data2)}
      </div>
    )
  );
};

export default All;
