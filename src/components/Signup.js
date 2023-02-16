import React, { useState } from 'react';

const Dummy = () => {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function saveData() {
    let data = {
      name,
      emailId,
      phoneNo,
      address,
      username,
      password
    };

    fetch('http://localhost:8082/customer/registercustomer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((resp) => {
      resp.json()
      .then((result) => {
        console.warn('result', result);
      })
    })
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Register</h1>
      <form style={{display: 'flex', flexDirection: 'column', width: '300px'}}>
        <label>Name:</label>
        <input type='text' name='name' value={name} onChange={(e) => {setName(e.target.value)}} />
        <label>Email:</label>
        <input type='text' name='email' value={emailId} onChange={(e) => {setEmailId(e.target.value)}} />
        <label>Phone:</label>
        <input type='text' name='phone' value={phoneNo} onChange={(e) => {setPhoneNo(e.target.value)}} />
        <label>Address:</label>
        <input type='text' name='address' value={address} onChange={(e) => {setAddress(e.target.value)}} />
        <label>Username:</label>
        <input type='text' name='username' value={username} onChange={(e) => {setUsername(e.target.value)}} />
        <label>Password:</label>
        <input type='password' name='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
        <button type='button' onClick={saveData}>Submit</button>
      </form>
    </div>
  );
}

export default Dummy;
