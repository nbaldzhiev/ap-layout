import React, { useState, useEffect } from 'react';
import './NewsCategoryList.css';
import { useLocation, Link, Outlet } from "react-router-dom";
import facebookLogo from "./facebook.png";
import twitterIcon from "./twitter.png";
import emailIcon from "./email.png";

function NewsCategoryList() {

  const { pathname } = useLocation();
  const category = pathname.replace('/', '');
  const categoryTitle = pathname.replace('/', '').replace('-', ' ').split('/')[0];
  const [photos, setPhotos] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);

  const baseUrl = 'https://api.pexels.com/v1/';
  const authToken = '563492ad6f917000010000014065df06dbb24fc08d9c3df9dcd9e597';
  const searchEndpoint = 'search';

  const loremAPIEndpoint = 'https://baconipsum.com/api/?type=meat-and-filler&paras=10'

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
      setPhotos(data.photos);
    }
    async function getParagraphs() {
      const response = await fetch(loremAPIEndpoint);
      const data = await response.json();
      setParagraphs(data);
    }
    getPhotos();
    getParagraphs();
  }, [pathname, category])


  useEffect(() => {
    if (pathname.split('/').length > 2) {
      document.querySelector('.news-category-list > .category-title-container').style.display = 'none';
      document.querySelector('.news-category-list > .articles-container').style.display = 'none';
    } else {
      document.querySelector('.news-category-list > .category-title-container').style.display = 'block';
      document.querySelector('.news-category-list > .articles-container').style.display = 'flex';
    }
  }, [pathname])

  return (
    <div className="news-category-list">
      <div className="category-title-container">
        <p className="category-title">{categoryTitle}</p>
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
        <a href="/" className="category-click-to-copy-link">Click to copy</a>
        </div>
        <div className="articles-list-container">
          {
            photos.length ? photos.map(photo => <div key={photo.id} className="list-article-item">
                <Link to={ `${photo.id}` } className="list-article-title">{photo.alt.slice(0, 80)}</Link>
                <div className="authors-container">
                  <p className="by-author">By {photo.photographer}</p>
                  <p className="elapsed-time">{Number(photo.photographer_id.toString()[0]) % 2 === 0 ? photo.photographer_id.toString()[0].toString() + ' hours ago' : photo.photographer_id.toString()[0].toString() + ' minutes ago'}</p>
                </div>
                <div className="list-article-thumbnail-text-container">
                  <img className="list-article-thumbnail" src={photo.src.landscape} alt={photo.alt} />
                  <p className="list-article-text">{paragraphs[photos.indexOf(photo)]}</p>
                </div>
                <hr className="list-article-separator-line"/>
              </div>
            ) : <p>Loading...</p>
          }
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default NewsCategoryList;
