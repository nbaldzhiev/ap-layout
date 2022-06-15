import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import HomeNews from "./HomeNews.js";
import SelectedNewsArticle from "./SelectedNewsArticle.js";
import NewsCategoryList from "./NewsCategoryList.js";

function App() {

  const defaultCategory = "Ukraine";

  return (
    <div className="App">
      <Header />
      <main className="main-container">

        <Routes>
          <Route path="/" element={<HomeNews category={defaultCategory} />} >
            <Route path=":articleId" element={<SelectedNewsArticle />} />
          </Route>
          <Route path="/european-union" element={<NewsCategoryList />} />
          <Route path="/world-news" element={<NewsCategoryList />} />
          <Route path="/politics" element={<NewsCategoryList />} />
          <Route path="/sports" element={<NewsCategoryList />} />
          <Route path="/entertainment" element={<NewsCategoryList />} />
          <Route path="/business" element={<NewsCategoryList />} />
          <Route path="/technology" element={<NewsCategoryList />} />
          <Route path="/health" element={<NewsCategoryList />} />
          <Route path="/science" element={<NewsCategoryList />} />
          <Route path="/finance" element={<NewsCategoryList />} />
          <Route path="/lifestyle" element={<NewsCategoryList />} />
          <Route path="/photography" element={<NewsCategoryList />} />
          <Route path="/videos" element={<NewsCategoryList />} />
          <Route path="/top-news" element={<NewsCategoryList />} />
          <Route path="/europe-news" element={<NewsCategoryList />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
