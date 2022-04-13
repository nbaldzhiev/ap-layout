import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Header from "./Header.js"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-container">

        <Routes>
          <Route path="/" element={<p> main / </p>} /> 
          <Route path="/european-union" element={<p> /european-union </p>} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
