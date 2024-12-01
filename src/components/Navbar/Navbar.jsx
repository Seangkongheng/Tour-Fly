import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar-content">
          <div className="navbar-branch">
              <h1>TransPro</h1>
          </div>
          <div className="navbar-menu-list">
              <div className="navbar-list">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Pages</li>
                  <li>Blog</li>
                  <li>Service</li>
                  <li>Contacct Us</li>
                </ul>
              </div>
              <div className="navbar-icon">
                <button>Search</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar