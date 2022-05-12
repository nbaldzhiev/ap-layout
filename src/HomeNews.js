import React, { useState, useEffect } from 'react';
import './HomeNews.css';
import facebookLogo from "./facebook.png";
import twitterIcon from "./twitter.png";
import emailIcon from "./email.png";
import { Link } from "react-router-dom";

function HomeNews(props) {

  const category = props.category;
  const [photos, setPhotos] = useState([]);
  const [newsText, setNewsText] = useState([]);

  const mainArticleAlt = photos.length === 30 ? photos[0].alt : "loading";
  const mainArticleLandscapeSrc = photos.length === 30 ? photos[0].src.landscape : "loading";
  const mainArticleAuthor = photos.length === 30 ? photos[0].photographer : "loading";
  const mainArticleAuthorId = photos.length === 30 ? photos[0].photographer_id : 0;
  let elapsedTime = mainArticleAuthorId.toString()[0];
  Number(elapsedTime) % 2 === 0 ? elapsedTime += 'h' : elapsedTime += 'm';

  const baseUrl = 'https://api.pexels.com/v1/';
  const authToken = '563492ad6f917000010000014065df06dbb24fc08d9c3df9dcd9e597';
  const searchEndpoint = 'search';
  const numberOfNewsStories = 30;

  const loremAPIEndpoint = 'https://baconipsum.com/api/?type=meat-and-filler&paras=6'
  async function getNewsText() {
    const response = await fetch(loremAPIEndpoint);
    const data = await response.json();
    setNewsText(data);
  }
  const mainArticleText = newsText.length ? newsText[0].slice(0, 265) : 'loading';

  async function getPhotosByCategory(category) {
    const response = await fetch(
      `${baseUrl}${searchEndpoint}?query=${category}&per_page=${numberOfNewsStories}`,
      {
        method: 'GET',
        headers: {'Authorization': authToken}
      }
    );
    const data = await response.json();
    setPhotos(data.photos);
  }

  useEffect(() => {
    getPhotosByCategory(category);
    getNewsText();
  }, [])

  return (
    <div className="home-news-container">
      <div className="home-news-header">
        <hr className="home-news-red-line" />
        <p className="home-news-title">Top Stories</p>
      </div>
      <div className="home-news-news-container">
        <div className="home-news-first-news-column">
          <Link to={mainArticleAlt.split(' ').join('-')} className="article-title">{mainArticleAlt}</Link>
          <div className="article-meta">
            <p className="article-by">By {mainArticleAuthor.toUpperCase()}</p>
            <p className="article-elapsed">{elapsedTime} ago</p>
          </div>
          <img className="article-thumbnail" src={mainArticleLandscapeSrc} width="615" height="346" alt={mainArticleAlt} />
          <p className="article-description">ZAPORIZHZHIA, Ukraine (AP) — {mainArticleText}.</p>
          <div className="links-section">
            <div className="link-icons">
              <a href="#"><img src={facebookLogo} alt="facebook logo" width="32" height="32" /></a>
              <a href="#"><img src={twitterIcon} alt="twitter logo" width="32" height="32" /></a>
              <a href="#"><img src={emailIcon} alt="email logo" width="32" height="32" /></a>
            </div>
            <div className="topic-links">
              <a href="#">Europe-USA Ties</a>
              <a href="#">Business</a>
              <a href="#">AP Top News</a>
              <a href="#">World News</a>
              <a href="#">Hot Stocks</a>
            </div>
          </div>
        </div>
        <div className="home-news-second-news-column">
          <p className="topic-headliner">Russia-Ukraine war</p>
          {
            photos.length ? photos.slice(1, 6).map(
              photo => <div className="secondary-news-article">
                <Link to={photo.alt.split(' ').join('-')} className="article-title">{photo.alt}</Link>
                <div className="thumbnail-author-container">
                  <img alt="news article thumbnail"src={photo.src.landscape} width="87.9141" height="58.4609" />
                  <div>
                    <p>By {photo.photographer}</p>
                    <p>today</p>
                  </div>
                </div>
              </div>
            ) : 'loading'
          }
        </div>
        <div className="home-news-third-news-column"></div>
      </div>
    </div>
  );
}

export default HomeNews;
