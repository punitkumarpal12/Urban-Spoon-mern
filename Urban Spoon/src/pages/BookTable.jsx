import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';

const BookTable = () => {
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
      <Navbar/>
      {/* FORM (NEW ADD) */}
      <div
      style={{
        
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign:"center"
      }}
      >

     
      <div style={{
          width: "20%",
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
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

          <input name="name" value={form.name} placeholder='Name' onChange={handleChange} required/>
          <input name="phone" value={form.phone} placeholder='phone' onChange={handleChange} required/>
          <input name="date" type="date" value={form.date} onChange={handleChange} required/>
          <input name="guests" value={form.guests} placeholder='guests' onChange={handleChange} required/>

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
      </div>
    </div>
  )
}

export default BookTable