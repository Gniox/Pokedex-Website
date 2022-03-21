import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  display: inline;
  margin-right: 5px;
  &:last-child {
    margin-right: 0px;
  }
`;

interface Props {
  name: string;
  url: string;
  key: string;
}

function formatNumber(pokeNumber: string) {
  if (parseInt(pokeNumber) < 10) {
    pokeNumber = '00' + pokeNumber;
  } else if (parseInt(pokeNumber) < 100) {
    pokeNumber = '0' + pokeNumber;
  }

  return pokeNumber;
}

function getPokeNumber(url: string) {
  const splitPokeURL = url.split('/');
  const pokeNumber = splitPokeURL[splitPokeURL.length - 2];
  const formattedNumber = formatNumber(pokeNumber);

  return formattedNumber;
}

const NavBarItem: React.FC<Props> = ({ name, url }) => {
  return <StyledListItem>{getPokeNumber(url)}</StyledListItem>;
};

export default NavBarItem;
