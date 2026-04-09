import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/api/inquiry", form);
    alert(res.data.message);
    setSuccess(true)
    setForm({
      name: "",
      phone: "",
      date: "",
      guests: ""
    });
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div>
      <Navbar />

      <div style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "auto",
        textAlign: "center"
      }}>
        <h1>Contact Us 📞</h1>

        {/* Contact Info */}
        <div style={{ lineHeight: "2" }}>
          <p><strong>📍 Address:</strong> Delhi, India</p>
          <p><strong>📞 Phone:</strong> 9876543210</p>
          <p><strong>📧 Email:</strong> urbanspoon@gmail.com</p>
        </div>

        {/* Timings */}
        <div style={{ marginTop: "20px" }}>
          <h3>Opening Hours</h3>
          <p>Monday - Sunday: 10 AM - 10 PM</p>
        </div>

        {/* FORM (NEW ADD) */}
        <div style={{
          marginTop: "30px",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)"
        }}>
          <h2>Book a Table 🍽️</h2>

          <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}>

            <input name="name" value={form.name} placeholder='Name' onChange={handleChange} />
            <input name="phone" value={form.phone} placeholder='phone' onChange={handleChange} />
            <input name="date" type="date" value={form.date} onChange={handleChange} />
            <input name="guests" value={form.guests} placeholder='guests' onChange={handleChange} />

            <button type="submit">Book Now</button>
          </form>
          {success && (
            <div style={{
              background: "#d4edda",
              padding: "10px",
              marginTop: "10px"
            }}>
              ✅ Table booked successfully!
            </div>
          )}
          
        </div>
        {/* Map Placeholder */}
        <div style={{
          marginTop: "30px",
          height: "250px",
          background: "#ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px"
        }}>
          {/* <p>📍 Map Location</p> */}
          <iframe
            src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
          />
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;

