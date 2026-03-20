import React from 'react'

const Navbar = () => {
  return (
    <div>
        {/* Navbar / Header */}
      <header style={{background: "#111",color: "white",padding: "15px"}}>
        <h1>TeddyDev</h1>
        <nav>
          <ul style={{display: "flex", gap:"20px", liststyle: "none"}}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Blog</li>

          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar