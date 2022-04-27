import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import HomeNews from "./HomeNews.js";

function App() {

  const defaultCategory = "Ukraine";

  return (
    <div className="App">
      <Header />
      <main className="main-container">

        <Routes>
          <Route path="/" element={<HomeNews category={defaultCategory} />} /> 
          <Route path="/european-union" element={<p> /european-union </p>} />
          <Route path="/world-news" element={<p> /world-news </p>} />
          <Route path="/politics" element={<p> /world-news </p>} />
          <Route path="/sports" element={<p> /world-news </p>} />
          <Route path="/entertainment" element={<p> /world-news </p>} />
          <Route path="/business" element={<p> /world-news </p>} />
          <Route path="/technology" element={<p> /world-news </p>} />
          <Route path="/health" element={<p> /world-news </p>} />
          <Route path="/science" element={<p> /world-news </p>} />
          <Route path="/finance" element={<p> /world-news </p>} />
          <Route path="/lifestyle" element={<p> /world-news </p>} />
          <Route path="/photography" element={<p> /world-news </p>} />
          <Route path="/videos" element={<p> /world-news </p>} />
          <Route path="/top-news" element={<p> /world-news </p>} />
          <Route path="/europe-news" element={<p> /world-news </p>} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
