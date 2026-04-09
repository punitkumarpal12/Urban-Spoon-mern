import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* About Section */}
      <div style={{
        padding: "40px",
        textAlign: "center",
        maxWidth: "800px",
        margin: "auto"
      }}>
        <h2>About Urban Spoon</h2>
        <p>
          Urban Spoon is a modern restaurant offering delicious food with a mix
          of Indian and continental cuisine. We focus on quality, taste, and a
          great dining experience.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;