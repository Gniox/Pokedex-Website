import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { sortPokemon } from "../../functions/sortPokemon";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify: center;
  flex-direction: column;
`;
const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledListItem = styled.li`
  display: inline;
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
    fetch("https://pokeapi.co/api/v2/generation/1/")
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
        console.error("Error fetching data: " + error);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Div>
      <StyledList>
        {listShown.map((item, index) => {
          return <StyledListItem key={uuidv4()}>{index + 1}</StyledListItem>;
        })}
      </StyledList>
    </Div>
  );
};

export default NavBar;
