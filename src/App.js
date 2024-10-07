import React, { useState } from 'react';
import './App.css';
import StatsPanel from './components/StatsPanel';
import Navbar from './components/Navbar';  
import MapComponent from './components/MapComponent';
import Sidebar from './components/Sidebar';  

function App() {
   
  const [attackData, setAttackData] = useState([]);

  const handleUpdateAttacks = (count) => {
   
    const data = [/* attack data logic from your fetch call */];
    setAttackData(data.slice(0, count));
  };

  return (
    <div className="App">
      <div className="top-border"></div>
      <Navbar />
      <div className="content">
        <MapComponent attackData={attackData} />
      </div>
      <div className="stats-panel">
        <StatsPanel />
      </div>
      <Sidebar handleUpdateAttacks={handleUpdateAttacks} />
    </div>
  );
}

export default App;
