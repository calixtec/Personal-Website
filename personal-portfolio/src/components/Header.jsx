import logo from "../assets/lightlogo.png";
import React from 'react';

import "../styles/style.css";
export default function Header() {
  return (

    <header className="header" >
      <div className="left-item">
        <img className="logo" src={logo} alt="My logo" />
      </div>
      <h1 className="colorchange">Christopher Calixte</h1>
      <div className="right-item">Blog &nbsp; Mentorship &nbsp; Contact</div>

    
    </header>


  );
}

