import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import UpArrow from "./UpArrow";
import DownArrow from "./DownArrow";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify: center;
  flex-direction: column;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const GenerationCounter: React.FC = () => {
  type genItem = {
    name: string;
    url: string;
  };

  interface genList {
    count: number;
    next: string;
    previous: string;
    results: [genItem];
  }

  const [generationList, setGenerationList] = React.useState<genItem[]>([]);
  const [listShown, setListShown] = React.useState<genItem[]>([]);
  const [limit, setLimit] = React.useState(3);
  const [offset, setOffSet] = React.useState(0);

  //use effect for fetch requests
  useEffect(() => {
    let isMounted = true;
    fetch("https://pokeapi.co/api/v2/generation")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data: genList) => {
        if (isMounted) {
          setGenerationList(data.results);
          setListShown(data.results.slice(offset, limit));
        }
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  function moveListUpByThree() {
    const newLimit = limit - 3;
    const newOffSet = offset - 3;
    const newList = generationList.slice(newOffSet, newLimit);

    if (newOffSet > -1) {
      setListShown(newList);
      setLimit(newLimit);
      setOffSet(newOffSet);
    }
  }

  //onClick of DownButton, it will move the generation list
  //down 3 item values.  It will also update the limit and
  // offset values.
  function moveListDownByThree() {
    //to make sure state updates, set values to variable
    //if using other states, use new value before updating
    //them as well, as there is delay before the next
    //re render
    const newLimit = limit + 3;
    const newOffSet = offset + 3;
    const newList = generationList.slice(newOffSet, newLimit);

    if (newOffSet < 9) {
      setListShown(newList);
      setLimit(newLimit);
      setOffSet(newOffSet);
    }
  }

  //TODO: figure out a way to await li generation before returning component
  //      (buttons are instant while list takes a split second to load)
  //      Looks like this was fixed ... works sometimes
  return (
    <Div>
      <UpArrow onClick={moveListUpByThree} />
      <StyledList>
        {listShown.map((item) => {
          return <li key={uuidv4()}>{item.name}</li>;
        })}
      </StyledList>
      <DownArrow onClick={moveListDownByThree} />
    </Div>
  );
};

export default GenerationCounter;
