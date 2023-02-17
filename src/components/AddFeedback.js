import { useState } from "react";

const AddFeedback = () => {
  const [productId, setproductId] = useState("");
  const [feedback, setfeedback] = useState("");
  const [rating, setrating] = useState("");

  const handleproductIdChange = (event) => {
    setproductId(event.target.value);
  };

  const handlefeedbackChange = (event) => {
    setfeedback(event.target.value);
  };

  const handleratingChange = (event) => {
    setrating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8083/feedback/addfeedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, feedback, rating }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit feedback");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        // Optionally display a success message or redirect the user to a thank you page
      })
      .catch((error) => {
        console.error("Error:", error);
        // Optionally display an error message to the user
      });
  };

  return (
    <div>
      <h2>Add Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product-id">Product ID:</label>
          <input
            type="text"
            id="product-id"
            value={productId}
            onChange={handleproductIdChange}
          />
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handlefeedbackChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            min="1"
            max="5"
            value={rating}
            onChange={handleratingChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFeedback;
