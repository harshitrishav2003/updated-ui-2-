import React, { useState } from 'react';
import styled from 'styled-components';
import StatBox from './StatBox';
import { FaCog } from 'react-icons/fa'; 

const PanelContainer = styled.div`
  padding: 14px;
  height: 100vh;
  width: 280px;
  overflow-y: auto;
  background: #2c3e50;
  position: fixed;
  right: ${props => props.isOpen ? '0' : '-300px'};
  top: 0;
  transition: right 0.4s ease-in-out;
  z-index: 10;
`;

const SettingsIcon = styled.div`
  position: fixed;
  right: 35px;
  bottom: 7px;
  cursor: pointer;
  color: white;
  background-color: #2c3e50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 33px;
  z-index: 11;
`;

const QuoteBox = styled.div`
  color: white;
  background-color: #1A2S5E;
  padding: 5px;
  margin-bottom: 20px;
  text-align: center;
  border: 1.9px solid #3478f6;
  font-size: 0.9em;
  font-weight: bold;
`;

const StatsPanel = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <PanelContainer isOpen={isOpen}>
        <QuoteBox>SAVE YOURSELF FROM CYBER ATTACK</QuoteBox>
        <StatBox title="Types of Cyber Attacks" items={[
            { name: "Phishing", color: "red" },
            { name: "DDoS", color: "yellow" },
            { name: "Malware", color: "orange" }
          ]}
        />
        <StatBox 
          title="Targeted Nations"
          items={[
            { name: "Ethiopia", flag: '/ethiopia.png' },
            { name: "Mongolia", flag: '/mongolia.png' },
            { name: "Nepal", flag: '/nepal.webp' },
            { name: "Angola", flag: '/angola.png' }
          ]}
        />
        <StatBox title="Top Targeted Industries" items={[
            { name: "Education", flag: '/education.png' },
            { name: "Government", flag: '/govt.png' },
            { name: "Telecommunication", flag: '/mobile.png' },
            { name: "Healthcare",flag: '/healthcare.png' }
          ]}
        />
      </PanelContainer>
      <SettingsIcon onClick={() => setIsOpen(!isOpen)}>
        <FaCog size="20" />
      </SettingsIcon>
    </>
  );
}

export default StatsPanel;
