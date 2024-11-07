import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contactlist.css'; 

function Contactlist() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getcontact');
        setContact(response.data); 
      } catch (err) {
        console.error('Error getting contacts from the list:', err);
      }
    };
    fetchList();
  }, []); 

  return (
    <div>
      <h2>Contact List</h2>
      {contact.length > 0 ? (
        <div className="list">
          {contact.map((contactItem, index) => (
            <div key={index} className="contact-item">
              <div><strong>Name:</strong> {contactItem.name}</div>
              <div><strong>Email:</strong> {contactItem.email}</div>
              <div><strong>Phone:</strong> {contactItem.phone}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-contacts">No users found.</p>
      )}
    </div>
  );
}

export default Contactlist;
