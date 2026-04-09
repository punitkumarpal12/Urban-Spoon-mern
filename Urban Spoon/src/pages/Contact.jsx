import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Contact = () => {
  

  return (
    <div>
      <Navbar />

      <div style={{
        padding: "20px",
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
            height="250"
          />
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;

