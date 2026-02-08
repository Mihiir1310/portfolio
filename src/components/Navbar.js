import React from 'react';

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="brand">Mihir Pachpande</div>
        <nav className="nav">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
