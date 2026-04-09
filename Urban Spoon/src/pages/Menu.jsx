import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import menuData from '../data/menuData';

const Menu = () => {
  const [selected, setSelected] = useState("All");

  const filteredData = selected === "All"
    ? menuData
    : menuData.filter(item => item.category === selected);

  return (
    <div>
      <Navbar />
        
        <h1 style={{ textAlign: "center", margin: "20px" }}>
        Our Menu 🍽️
      </h1>
      
      <div style={{ textAlign: "center", margin: "20px" }}>
        {["All", "Starters", "Main Course", "Beverages"].map((cat) => (
          <button
          key={cat}
          onClick={() => setSelected(cat)}
          style={{
            margin: "5px",
            padding: "8px 15px",
            background: selected === cat ? "orange" : "#eee",
            border: "none",
            cursor: "pointer"
          }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>

        {filteredData.map((section, index) => (
          <div key={index} style={{
            width: "90%",
            maxWidth: "600px",
            margin: "15px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)"
          }}>
            <h2>{section.category}</h2>

            {section.items.map((item, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 0"
              }}>
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))}
            <button
              onClick={() => window.location.href = "/booktable"}
              style={{
                padding: "10px 20px",
                background: "orange",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                margin: "20px"
              }}
            >
              Book Table 🍽️
            </button>
          </div>
        ))}
        

      </div>

      <Footer />
    </div>
  );
};

export default Menu;