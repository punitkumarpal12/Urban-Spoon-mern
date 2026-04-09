import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/inquiry")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
   <> <Navbar/>
    <div style={{ padding: "20px" }}>
      <h1>Admin Panel 📊</h1>

      {data.map((item, index) => (
        <div key={index} style={{
          border: "1px solid #ccc",
          margin: "10px",
          padding: "10px",
          borderRadius: "5px"
        }}>
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Phone:</strong> {item.phone}</p>
          <p><strong>Date:</strong> {item.date}</p>
          <p><strong>Guests:</strong> {item.guests}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Admin;