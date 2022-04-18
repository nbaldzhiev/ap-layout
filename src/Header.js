import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import ApLogo from "./ap-logo.png";
import SearchIcon from "./icons8-search-50.png";
import HamburgerIcon from "./icons8-hamburger-menu-50.png";
import closeIcon from "./close.png";

function Header() {

  const [isExpanded, setIsExpanded] = useState('none');

  const displayTernary = {display: isExpanded === 'block' ? 'none' : 'block'};

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
            <Link to="/european-union" className="news-category" style={displayTernary}>European Union</Link>
            <Link to="/world-news" className="news-category" style={displayTernary}>World News</Link>
            <Link to="/politics" className="news-category" style={displayTernary}>Politics</Link>
            <Link to="/sports" className="news-category" style={displayTernary}>Sports</Link>
            <Link to="/entertainment" className="news-category" style={displayTernary}>Entertainment</Link>
            <Link to="/business" className="news-category" style={displayTernary}>Business</Link>
            <Link to="/technology" className="news-category" style={displayTernary}>Technology</Link>
            <Link to="/health" className="news-category" style={displayTernary}>Health</Link>
            <Link to="/science" className="news-category" style={displayTernary}>Science</Link>
            <Link to="/finance" className="news-category" style={displayTernary}>Finance</Link>
            <Link to="/lifestyle" className="news-category" style={displayTernary}>Lifestyle</Link>
            <Link to="/photography" className="news-category" style={displayTernary}>Photography</Link>
            <Link to="/videos" className="news-category" style={displayTernary}>Videos</Link>
            <p className="news-category listen-category" style={displayTernary}>Listen</p>
            <img className="search-icon" src={SearchIcon} placeholder="search icon" width="24" height="24" style={displayTernary} />
            <div className="sections-container" onClick={() => {isExpanded === 'none' ? setIsExpanded('block') : setIsExpanded('none')}}>
              <p className="news-category" style={displayTernary}>Sections</p>
              <img className="hamburger-icon" src={HamburgerIcon} placeholder="hamburger icon" width="24" height="24" style={displayTernary} />
            </div>
        </div>
        <div className="sections-collapsible" style={{display: isExpanded}}>
          <div className="top-row">
            <Link to="/top-news" className="expanded-news-category">AP Top News</Link>
            <Link to="/europe-news" className="expanded-news-category">Europe News</Link>
            <Link to="/world-news" className="expanded-news-category">World News</Link>
            <Link to="/politics" className="expanded-news-category">Politics</Link>
            <Link to="/sports" className="expanded-news-category">Sports</Link>
            <Link to="/entertainment" className="expanded-news-category">Entertainment</Link>
            <Link to="/business" className="expanded-news-category">Business</Link>
            <img className="close-icon" src={closeIcon} placeholder="hamburger icon" width="20" height="20" onClick={() => {isExpanded === 'none' ? setIsExpanded('block') : setIsExpanded('none')}} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
