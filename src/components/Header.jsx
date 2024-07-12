import React from "react"
import logo from "../images/logo.svg"

function Header () {
  return (
  <header className="header">
    <img src={logo} alt="" />
    <p>my travel journal.</p>
  </header>
)
}

export default Header
