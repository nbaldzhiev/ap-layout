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
        <div className="non-collapsible-container">
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
                {isExpanded === 'block' ? <img className="close-icon-mobile" src={closeIcon} placeholder="collapse icon" width="20" height="20" onClick={() => {isExpanded === 'none' ? setIsExpanded('block') : setIsExpanded('none')}} style={{display: isExpanded === 'block' ? 'block' : 'none'}} /> : <img className="hamburger-icon" src={HamburgerIcon} placeholder="hamburger icon" width="24" height="24" style={displayTernary} /> }
              </div>
          </div>
        </div>
        <div className="sections-collapsible" style={{display: isExpanded}}>
          <div className="top-row">
            <Link to="/top-news" className="expanded-news-category">AP Top News</Link>
            <Link to="/europe-news" className="expanded-news-category">Europe News</Link>
            <div className="expanded-news-category-container">
              <Link to="/world-news" className="expanded-news-category">World News</Link>
              <div className="nested-news-container">
                <Link to="/africa" className="expanded-nested-news-category">Africa</Link>
                <Link to="/asia-pacific" className="expanded-nested-news-category">Asia Pacific</Link>
                <Link to="/australia" className="expanded-nested-news-category">Australia</Link>
                <Link to="/europe" className="expanded-nested-news-category">Europe</Link>
                <Link to="/latin-america" className="expanded-nested-news-category">Latin America</Link>
                <Link to="/middle-east" className="expanded-nested-news-category">Middle East</Link>
              </div>
            </div>
            <div className="expanded-news-category-container">
              <Link to="/politics" className="expanded-news-category">Politics</Link>
              <div className="nested-news-container">
                <Link to="/president-biden" className="expanded-nested-news-category">President Biden</Link>
                <Link to="/european-parliament" className="expanded-nested-news-category">European Parliament</Link>
                <Link to="/prosecution" className="expanded-nested-news-category">Prosecution</Link>
                <Link to="/supreme-court" className="expanded-nested-news-category">U.S. Supreme Court</Link>
              </div>
            </div>
            <div className="expanded-news-category-container">
              <Link to="/sports" className="expanded-news-category">Sports</Link>
              <div className="nested-news-container">
                <Link to="/mlb" className="expanded-nested-news-category">MLB</Link>
                <Link to="/nba" className="expanded-nested-news-category">NBA</Link>
                <Link to="/nfl" className="expanded-nested-news-category">NFL</Link>
                <Link to="/nhl" className="expanded-nested-news-category">NHL</Link>
              </div>
            </div>
            <div className="expanded-news-category-container">
              <Link to="/entertainment" className="expanded-news-category">Entertainment</Link>
              <div className="nested-news-container">
                <Link to="/film-reviews" className="expanded-nested-news-category">Film Reviews</Link>
                <Link to="/movies" className="expanded-nested-news-category">Movies</Link>
                <Link to="/music" className="expanded-nested-news-category">Music</Link>
                <Link to="/television" className="expanded-nested-news-category">Television</Link>
                <Link to="/fashion" className="expanded-nested-news-category">Fashion</Link>
              </div>
            </div>
            <div className="expanded-news-category-container">
              <Link to="/business" className="expanded-news-category">Business</Link>
              <div className="nested-news-container">
                <Link to="/economy" className="expanded-nested-news-category">Economy</Link>
                <Link to="/financial-markets" className="expanded-nested-news-category">Financial Markets</Link>
              </div>
            </div>
            <img className="close-icon-desktop" src={closeIcon} placeholder="close icon" width="20" height="20" onClick={() => {isExpanded === 'none' ? setIsExpanded('block') : setIsExpanded('none')}} />
          </div>
          <div className="bottom-row">
            <Link to="/technology" className="expanded-news-category">Technology</Link>
            <div className="expanded-news-category-container">
              <Link to="/health" className="expanded-news-category">Health</Link>
              <div className="nested-news-container">
                <Link to="/covid-19" className="expanded-nested-news-category">COVID-19</Link>
              </div>
            </div>
            <Link to="/science" className="expanded-news-category">Science</Link>
            <div className="expanded-news-category-container">
              <p className="expanded-news-category">More</p>
              <div className="nested-news-container">
                <Link to="/fact-check" className="expanded-nested-news-category">AP Fact Check</Link>
                <Link to="/lifestyle" className="expanded-nested-news-category">Lifestyle</Link>
                <Link to="/religion" className="expanded-nested-news-category">Religion</Link>
                <Link to="/press-releases" className="expanded-nested-news-category">Press Releases</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
