import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'; 
import './Sidebar.css';

const Sidebar = ({ handleSpeedChange }) => {
  const [attackSpeed, setAttackSpeed] = useState(1500);

  const increaseSpeed = () => {
    const newSpeed = Math.max(500, attackSpeed - 200); 
    setAttackSpeed(newSpeed);
    handleSpeedChange(newSpeed);
  };

  const decreaseSpeed = () => {
    const newSpeed = attackSpeed + 200; 
    setAttackSpeed(newSpeed);
    handleSpeedChange(newSpeed);
  };

  return (
    <div id="leftSidebar">
      <h2>Threat Data</h2>
      <ul id="threatList">
        <li>
          <b>Attack Speed:</b>
          <div className="speed-controls fixed-controls">
            <button onClick={decreaseSpeed}>
              <FontAwesomeIcon icon={faMinus} /> 
            </button>
            <span>{attackSpeed} ms</span> 
            <button onClick={increaseSpeed}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </li>
        <li>
          <b>Active Attacks:</b>
          <ul id="activeAttacksList"></ul> 
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;