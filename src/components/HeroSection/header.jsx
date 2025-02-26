// import React from 'react';
import './Header.css';
import P from '../../assets/HeroSection Assets/icons/P.svg'

function Header() {
  return (
    <header className="header">
      <h1 className="logo"><img className='P' src={P} alt="" />ayQuick</h1>
      <nav className="nav-links">
        <a href="#">For Individuals</a>
        <a href="#">For Business</a>
        <a href="#">For Developers</a>
      </nav>
      <button className="get-started-btn">Get Started</button>
    </header>
  );
}

export default Header;
