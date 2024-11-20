// App.js
import React from 'react';
import './App.css';
import Home from './components/Home'; // Home bileşenini import ettik
import TechnicalDetails from './components/TechnicalDetails';

function App() {
  return (
    <div className="App">
      <Home /> {/* Ana sayfayı render ediyoruz */}
      <TechnicalDetails/>
    </div>
  );
}

export default App;

