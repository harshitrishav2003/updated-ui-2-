import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #000; 
  color: #ffffff; 
  display: flex;
  align-items: left;
  padding: 13px 1px; 
`;

const Logo = styled.img`
  height: 59px; 
  margin-right: 20px; 
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src="/polysia-logo.png" alt="Polysia Logo" />
     
    </NavbarContainer>
  );
};

export default Navbar;
