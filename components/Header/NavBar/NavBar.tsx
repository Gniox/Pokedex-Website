import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { sortPokemon } from '../../../functions/sortPokemon';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import NavBarItem from './NavBarItem';

const Div = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
`;

const TableDiv = styled.div`
  display: table;
  margin: 0 auto;
`;

const StyledList = styled.ul`
  list-style-type: none;
  text-align: center;
  justify: center;
  display: flex;
`;

//TODO: make li display:inline, for
//      horizontal alignment
const NavBar: React.FC = () => {
  type pokeSpecies = {
    name: string;
    url: string;
  };

  // interface pokeList = {
  //   abilities:
  // }

  const [pokeList, setPokeList] = React.useState<pokeSpecies[]>([]);
  const [listShown, setListShown] = React.useState<pokeSpecies[]>([]);
  const [limit, setLimit] = React.useState(6);
  const [offset, setOffSet] = React.useState(0);

  useEffect(() => {
    let isMounted = true;
    fetch('https://pokeapi.co/api/v2/generation/1/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        if (isMounted) {
          const sortedPokemon = sortPokemon(data.pokemon_species);
          setPokeList(sortedPokemon);
          setListShown(sortedPokemon.slice(offset, limit));
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ' + error);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  function moveListUpBySix() {
    const newLimit = limit + 6;
    const newOffSet = offset + 6;
    const newList = pokeList.slice(newOffSet, newLimit);

    if (newOffSet < pokeList.length) {
      setListShown(newList);
      setLimit(newLimit);
      setOffSet(newOffSet);
    }
  }

  function moveListDownBySix() {
    const newLimit = limit - 6;
    const newOffSet = offset - 6;
    const newList = pokeList.slice(newOffSet, newLimit);

    if (newOffSet > -1) {
      setListShown(newList);
      setLimit(newLimit);
      setOffSet(newOffSet);
    }
  }

  return (
    <Div>
      <LeftArrow onClick={moveListDownBySix} />
      <TableDiv>
        <StyledList>
          {listShown.map((item) => {
            return (
              <NavBarItem key={uuidv4()} name={item.name} url={item.url} />
            );
          })}
        </StyledList>
      </TableDiv>
      <RightArrow onClick={moveListUpBySix} />
    </Div>
  );
};

export default NavBar;
