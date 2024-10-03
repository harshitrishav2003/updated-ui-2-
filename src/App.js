import React from 'react';
import './App.css';
import StatsPanel from './components/StatsPanel';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <div className="top-border"></div>
      <Navbar />
      <div className="content">
        {/* Main content goes here, such as the map or other panels */}
      </div>
      <div className="stats-panel">
        <StatsPanel />
      </div>
    </div>
  );
}

export default App;
