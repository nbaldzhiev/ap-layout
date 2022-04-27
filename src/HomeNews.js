import React, { useState, useEffect } from 'react';
import './HomeNews.css';
import { Link } from "react-router-dom";

function HomeNews(props) {

  const category = props.category;
  const [photos, setPhotos] = useState([]);

  const baseUrl = 'https://api.pexels.com/v1/';
  const authToken = '563492ad6f917000010000014065df06dbb24fc08d9c3df9dcd9e597';
  const searchEndpoint = 'search';
  const numberOfNewsStories = 30;

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
  }, [])

  return (
    <div className="home-news-container">
      {photos.length === 30 ? photos[0].url : "loading"}
    </div>
  );
}

export default HomeNews;
