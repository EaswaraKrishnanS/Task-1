import { useState } from "react";
import Logo from '../Images/Logo.png'
import './Navbar.css'

const MenuIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="7" y1="7" x2="17" y2="7" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4" y1="12" x2="17" y2="12" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    <line x1="6" y1="17" x2="17" y2="17" stroke="black" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Logo} alt="LOGO"></img>
      </div>
      <button
        className="hamburger"
        onClick={toggleNavbar}
        style={{ border: "none", outline: "none", background: "none" }} 
      >
        <MenuIcon />
      </button>
      
    </nav>
  );
}
