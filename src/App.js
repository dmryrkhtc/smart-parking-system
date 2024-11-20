// App.js
import React from 'react';
import './App.css';
import Home from './components/Home'; // Home bileşenini import ettik

function App() {
  return (
    <div className="App">
      <Home /> {/* Ana sayfayı render ediyoruz */}
    </div>
  );
}

export default App;

