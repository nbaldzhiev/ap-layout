import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import ApLogo from "./ap-logo.png";
import SearchIcon from "./icons8-search-50.png";
import HamburgerIcon from "./icons8-hamburger-menu-50.png";

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
            <Link to="/european-union" className="news-category">European Union</Link>
            <Link to="/world-news" className="news-category">World News</Link>
            <Link to="/politics" className="news-category">Politics</Link>
            <Link to="/sports" className="news-category">Sports</Link>
            <Link to="/entertainment" className="news-category">Entertainment</Link>
            <Link to="/business" className="news-category">Business</Link>
            <Link to="/technology" className="news-category">Technology</Link>
            <Link to="/health" className="news-category">Health</Link>
            <Link to="/science" className="news-category">Science</Link>
            <Link to="/finance" className="news-category">Finance</Link>
            <Link to="/lifestyle" className="news-category">Lifestyle</Link>
            <Link to="/photography" className="news-category">Photography</Link>
            <Link to="/videos" className="news-category">Videos</Link>
            <p className="news-category listen-category">Listen</p>
            <img className="search-icon" src={SearchIcon} placeholder="search icon" width="24" height="24" />
            <div className="sections-container">
              <p className="news-category">Sections</p>
              <img className="hamburger-icon" src={HamburgerIcon} placeholder="hamburger icon" width="24" height="24" />
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
