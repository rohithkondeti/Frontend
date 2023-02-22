import axios from "axios";
import { useState } from "react";

const UpdateProfile = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData ] =useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id,
      name,
      emailId,
      phoneNo,
      address
    };

    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8082/customer/updatecustomer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    // axios.get(`http://localhost:8082/customer/getcustomer/${id}`)

    if (response.ok) {
      setSuccessMessage("Customer details updated successfully.");
      setErrorMessage("");
    } else {
      setSuccessMessage("");
      const error = await response.text();
      setErrorMessage(`Error updating customer details: ${error}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update</button>
        <br />
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default UpdateProfile;
