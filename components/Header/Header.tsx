import React from 'react';
import GenerationCounter from './GenerationCounter/GenerationCounter';
import NavBar from './NavBar/NavBar';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header: React.FC = () => {
  return (
    <Div>
      <GenerationCounter />
      <NavBar />
    </Div>
  );
};

export default Header;
