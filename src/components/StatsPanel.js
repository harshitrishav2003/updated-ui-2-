import React from 'react';
import styled from 'styled-components';
import StatBox from './StatBox';

const PanelContainer = styled.div`
  padding: 14px;
  height: 100vh;  
  overflow-y:auto;
  background: #2c3e50;  
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
  return (
    <PanelContainer>
      <QuoteBox>SAVE YOURSELF FROM CYBER ATTACK</QuoteBox>  
      <StatBox title="Types of Cyber Attacks" items={[
          { name: "Phishing", color: "red" },
          { name: "DDoS", color: "yellow" },
          { name: "Malware", color: "orange" }
        ]}
      />
      <StatBox 
  title="Countries Frequently Targeted" 
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
  );
}

export default StatsPanel;
