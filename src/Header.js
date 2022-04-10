import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import ApLogo from "./ap-logo.png";

function Header() {
  return (
    <header className="App-header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={ApLogo} placeholder="AP logo" className="logo-image" width="64" height="64"/>
          </Link>
          <p className="logo-site-title">
            AP News
          </p>
        </div>
        <div className="categories-container">
        </div>
      </div>
    </header>
  );
}

export default Header;
