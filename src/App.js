

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Home from './components/Home';
import LyricDetail from './components/lyrics/lyricDetail';
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="musics">
        <div className="container">
          <Routes >
            <Route path='/' exact element={<Home />} />
            <Route path="Lyrics/:musicName/:artist" element={<LyricDetail/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
