// App.js
import React from 'react';
import './App.css';
import Home from './components/Home'; // Home bileşenini import ettik
import TechnicalDetails from './components/TechnicalDetails';
import ProjectProcesses from './components/ProjectProcesses';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Home /> {/* Ana sayfayı render ediyoruz */}
      <TechnicalDetails/>
      <ProjectProcesses/>
      <Gallery/>
    </div>
  );
}

export default App;

