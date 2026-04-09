import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        background: "#1f3042",
        color: "white",
        height: "70px"
      }}>
        <h2>Urban Spoon</h2>

        <div>
          <span style={{ margin: "10px" }}><Link className="nav-link"
            to="/">Home</Link></span>

          <span style={{ margin: "10px" }}>
            <Link className="nav-link" to="/menu">Menu</Link></span>

          <span style={{ margin: "10px" }}>
            <Link className="nav-link" to="/contact">Contact</Link></span>

          <span style={{ margin: "10px" }}>
            <Link className="nav-link" to="/admin">Admin</Link></span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar