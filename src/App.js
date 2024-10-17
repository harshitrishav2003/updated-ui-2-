import React, { useState } from 'react';
import './App.css';
import StatsPanel from './components/StatsPanel';

import Header from './components/Header';  
import MapComponent from './components/MapComponent';
import Sidebar from './components/Sidebar';  

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);  // Sidebar open state
  const [attackSpeed, setAttackSpeed] = useState(1500);       // Attack speed state

  // Toggle the sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle change in attack speed
  const handleSpeedChange = (newSpeed) => {
    setAttackSpeed(newSpeed);
  };

  // Handle attack updates (if needed)
  const handleUpdateAttacks = (newCount) => {
    console.log('Updated attack count to:', newCount);
  };

  return (
    <div className="App">
      <Header />   {/* Render the header */}
      <div className="top-border"></div>  {/* Optional border styling */}

    

      <div className="content">
        {/* Map Component with sidebar and speed props */}
        <MapComponent isSidebarOpen={isSidebarOpen} attackSpeed={attackSpeed} /> 

        {/* Stats Panel with sidebar toggle functionality */}
        <StatsPanel 
          toggleSidebar={toggleSidebar} 
          isSidebarOpen={isSidebarOpen} 
        />
      </div>

      {/* Sidebar with attack speed and update handlers */}
      <Sidebar 
        handleSpeedChange={handleSpeedChange} 
        handleUpdateAttacks={handleUpdateAttacks} 
      />
    </div>
  );
}

export default App;
