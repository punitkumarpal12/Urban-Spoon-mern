const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Inquiry = require("./models/Inquery");
require("dotenv").config();

 
// config();//all file access the .env file  because inside the root folder(.env file)
const app = express()
app.use(cors({//cors is a middleware to connect backend and frontend or different servers
  origin: [process.env.FRONTEND_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/inquiry", async (req, res) => {
  try {
    const data = await Inquiry.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.post("/api/inquiry", async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    res.json({ message: "Booking Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});
mongoose.connect(process.env.mongodb_url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

