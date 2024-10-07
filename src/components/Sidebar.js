import React, { useState } from 'react';
import './Sidebar.css';


const Sidebar = ({ handleUpdateAttacks }) => {
  const [attackCount, setAttackCount] = useState(3);

  return (
    <div id="leftSidebar">
      <h2>Threat Data</h2>
      <ul id="threatList">
        <li>
          <b>Number of Attacks:</b>
          <input
            type="number"
            id="attackCount"
            min="1"
            max="30"
            value={attackCount}
            onChange={(e) => setAttackCount(e.target.value)}
          />
          <button id="updateAttacks" onClick={() => handleUpdateAttacks(attackCount)}>Update</button>
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