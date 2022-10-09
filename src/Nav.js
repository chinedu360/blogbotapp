import React from 'react'
import "./Nav.css"

function Nav() {
  return (
      <div className="nav">
          <h1 className="nav-header">BLOGBOT</h1>
          <ul className="nav-ul">
              <li>LOGIN</li>
              <li className="signup-btn">SIGNUP</li>
          </ul>
    </div>
  )
}

export default Nav