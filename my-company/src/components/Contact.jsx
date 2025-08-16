import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! We received your message.`);
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "left",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#dc3545" }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          style={inputStyle} 
          required
        />

        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          style={inputStyle} 
          required
        />

        <label>Message:</label>
        <textarea 
          name="message" 
          value={form.message} 
          onChange={handleChange} 
          style={{ ...inputStyle, height: "100px" }} 
          required
        />

        <button type="submit" style={buttonStyle}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
 import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
       <div style={{ padding: '20px' }}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <button type="submit">Send Message</button>
         </form>
       </div>
     );
   }


