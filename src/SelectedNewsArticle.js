import React, { useState, useEffect } from 'react';
import './SelectedNewsArticle.css';
import { useParams } from "react-router-dom"
import facebookLogo from "./facebook.png";
import twitterIcon from "./twitter.png";
import emailIcon from "./email.png";

function SelectedNewsArticle() {

  const { articleId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [articleText, setArticleText] = useState('loading');

  const articleTitle = photo ? photo.alt : 'loading';
  const articleAuthor = photo ? photo.photographer : "loading";
  const articleLandscapeSrc = photo ? photo.src.landscape : "loading";
  let elapsedTime = articleId.toString()[0];
  Number(elapsedTime) % 2 === 0 ? elapsedTime += 'h' : elapsedTime += 'm';

  const baseUrl = 'https://api.pexels.com/v1/';
  const authToken = '563492ad6f917000010000014065df06dbb24fc08d9c3df9dcd9e597';
  const searchEndpoint = 'photos';

  const loremAPIEndpoint = 'https://baconipsum.com/api/?type=meat-and-filler&paras=14'

  useEffect(() => {
    async function getPhoto() {
      const response = await fetch(
        `${baseUrl}${searchEndpoint}/${articleId}`,
        {
          method: 'GET',
          headers: {'Authorization': authToken}
        }
      );
      const data = await response.json();
      setPhoto(data);
    }
    async function getArticleText() {
      const response = await fetch(loremAPIEndpoint);
      const data = await response.json();
      console.log(data);
      setArticleText(data);
    }
    getPhoto();
    getArticleText();
  }, [articleId])

  return (
    <div className="selected-news-article-container">
      <p className="article-title">{articleTitle}</p>
      <div className="article-meta-container">
        <p className="author">By <span>{articleAuthor}</span></p>
        <p className="elapsed-time">{elapsedTime} ago</p>
      </div>
      <hr className="red-line" />
      <hr className="separator-line"/>
      <div className="image-container">
        <img className="article-image" alt={articleTitle} src={articleLandscapeSrc} />
      </div>
      <div className="content-container">
        <div className="links-container">
          <div className="icons-container">
            <a href="/"><img src={facebookLogo} alt="facebook logo" width="32" height="32" /></a>
            <a href="/"><img src={twitterIcon} alt="twitter logo" width="32" height="32" /></a>
            <a href="/"><img src={emailIcon} alt="email logo" width="32" height="32" /></a>
          </div>
          <a href="/" className="click-to-copy-link">Click to copy</a>
          <div className="related-topics-container">
            <p className="related-topics">Related Topics</p>
            <a href="/">2022 Midterm elections</a>
            <a href="/">Donald Trump</a>
            <a href="/">Ohio</a>
            <a href="/">Georgia</a>
            <a href="/">Government and politics</a>
            <a href="/">Presidential elections</a>
            <a href="/">Elections</a>
            <a href="/">Primary elections</a>
            <a href="/">Election 2020</a>
          </div>
        </div>
        <div className="article-text-container">
          RAS AL-KHAIMAH, United Arab Emirates (AP)
          {
            Array.isArray(articleText) ? articleText.map(paragraph => <p className="article-text-paragraph">{paragraph}</p>) : articleText
          }
        </div>
      </div>
    </div>
  );
}

export default SelectedNewsArticle;
