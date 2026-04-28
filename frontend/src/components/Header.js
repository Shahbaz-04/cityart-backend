// frontend/src/components/Header.js

import React from 'react';
import './Header.css';
// पहले यहाँ '../logo.svg' था, अब इसे बदलकर नई इमेज का पाथ दें
import logo from '../assets/cityart-logo.jpg.png';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <a href="/" className="logo-link">
          <img src={logo} alt="CityArt Printer" className="logo-image" />
          <div className="logo-meta">
            <div className="logo-text">CITYART PRINTER</div>
            <div className="logo-address">123, CityArt Lane, Your City</div>
            <div className="logo-tagline">Quality prints • Fast turnaround • Great prices</div>
          </div>
        </a>
      </div>

      <div className="header-right">
        <nav className="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-contacts">
          <a href="tel:+911234567890" className="phone">+91 12345 67890</a>
          {/* WhatsApp link: opens chat with prefilled message. Update the number if needed. */}
          <a href="https://wa.me/911234567890?text=Hello%20CityArt%20Printer%2C%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" className="cta">Order Now</a>
        </div>
      </div>
    </header>
  );
};

export default Header;