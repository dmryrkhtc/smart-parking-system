import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProjectProcesses from './components/ProjectProcesses';
import Gallery from './components/Gallery';
import PresentationPoster from './components/PresentationPoster';
import Hatice from './members/hatice';
import Emir from './members/emir';
import Melike from './members/melike';
import Esra from './members/esra';
import Elif from './members/elif';
import Sila from './members/sila';
import Beyza from './members/beyza';
import Furkan from './members/furkan';
import TechnicalDetails from './components/TechnicalDetails';
import ComponentDetails from './components/ComponentDetails';
import Emin from './members/emin';




function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/technical-details">Teknik Detaylar</Link></li>
            <li><Link to="/project-processes">Proje Süreçleri</Link></li>
            <li><Link to="/gallery">Galeri</Link></li>
            <li><Link to="/presentation-poster">Sunum ve Poster</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/project-processes" element={<ProjectProcesses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/presentation-poster" element={<PresentationPoster />} />
          <Route path='/hatice' element={<Hatice />} />
          <Route path='/emir' element={<Emir />} />
          <Route path='/elif' element={<Elif />} />
          <Route path='/sila' element={<Sila />} />
          <Route path='/beyza' element={<Beyza />} />
          <Route path='/melike' element={<Melike />} />
          <Route path='/emin' element={<Emin />} />
          <Route path='/esra' element={<Esra />} />
          <Route path='/furkan' element={<Furkan />} />
          <Route path="/technical-details" element={<TechnicalDetails />} />
                <Route path="/component-details/:componentId" element={<ComponentDetails />} />
           

          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
