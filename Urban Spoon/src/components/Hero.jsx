import React from 'react'

const Hero = () => {
  return (
    <div style={{
      height: "calc(100vh - 208px)",
      backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white"
    }}>
      <h1>Welcome to Urban Spoon</h1>
      <p>Enjoy Delicious Food Everyday 🍴</p>
    </div>
  )
}

export default Hero