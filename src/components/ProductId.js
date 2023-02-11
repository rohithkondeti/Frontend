  

const Productid = () => {
    return (
      <div className="dialog-container">
        <div className="dialog-header">
          <h3>Product ID</h3>
          <button className="close-btn">x</button>
        </div>
        <div className="dialog-body">
          <form>
            <div className="form-group">
              <label htmlFor="product-id">Enter Product ID:</label>
              <input
                type="text"
                id="product-id"
                className="form-control"
                placeholder="Enter Product ID"
              />
            </div>
            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  

  export default Productid;