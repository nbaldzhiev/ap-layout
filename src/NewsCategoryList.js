import React, { useState, useEffect } from 'react';
import './NewsCategoryList.css';
import { useLocation } from "react-router-dom"
import facebookLogo from "./facebook.png";
import twitterIcon from "./twitter.png";
import emailIcon from "./email.png";

function NewsCategoryList() {

  const { pathname } = useLocation();
  const category = pathname.replace('/', '').replace('-', ' ');
  const [photos, setPhotos] = useState(null);

  const baseUrl = 'https://api.pexels.com/v1/';
  const authToken = '563492ad6f917000010000014065df06dbb24fc08d9c3df9dcd9e597';
  const searchEndpoint = 'photos';

  const loremAPIEndpoint = 'https://baconipsum.com/api/?type=meat-and-filler&paras=14'

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(
        `${baseUrl}${searchEndpoint}?query=${category}&per_page=10`,
        {
          method: 'GET',
          headers: {'Authorization': authToken}
        }
      );
      const data = await response.json();
      setPhotos(data);
    }
    getPhotos();
  }, [pathname])

  return (
    <div className="news-category-list">
      <div className="category-title-container">
        <p className="category-title">{category}</p>
        <hr className="category-title-red-line" />
        <hr className="category-separator-line"/>
      </div>
      <div className="articles-container">
        <div className="links-container">
          <div className="icons-container">
            <a href="/"><img src={facebookLogo} alt="facebook logo" width="32" height="32" /></a>
            <a href="/"><img src={twitterIcon} alt="twitter logo" width="32" height="32" /></a>
            <a href="/"><img src={emailIcon} alt="email logo" width="32" height="32" /></a>
          </div>
        </div>
        <a href="/" className="category-click-to-copy-link">Click to copy</a>
      </div>
    </div>
  );
}

export default NewsCategoryList;
