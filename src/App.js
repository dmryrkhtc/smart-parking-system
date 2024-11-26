import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TechnicalDetails from './components/TechnicalDetails';
import ProjectProcesses from './components/ProjectProcesses';
import Gallery from './components/Gallery';
import PresentationPoster from './components/PresentationPoster';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/technical-details">Teknik Detaylar</Link></li>
            <li><Link to="/project-processes">Proje Süreçleri</Link></li>
            <li><Link to="/gallery">Galeri</Link></li>
            <li><Link to="/presentation-poster">Sunum ve Poster</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technical-details" element={<TechnicalDetails />} />
          <Route path="/project-processes" element={<ProjectProcesses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/presentation-poster" element={<PresentationPoster />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
