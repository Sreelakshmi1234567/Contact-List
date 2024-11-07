import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Contactform.css'; 

function Contactform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, phone };

    try {
      const response = await axios.post('http://localhost:3000/contact', data);
      console.log('Response:', response.data);
     
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleShow = () => {
    navigate('/contact');
  };

  return (
    <div className="container"> 
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label className='name'>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label className='email'>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Phone Number:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}  className='phone'/><br /><br />

        <button type="submit">Add Contact</button> <button onClick={handleShow}>Contact List</button>
      </form>
      
    </div>
  );
}

export default Contactform;
