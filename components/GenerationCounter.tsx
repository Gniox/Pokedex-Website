import React, { FunctionComponent, useEffect, useState } from "react";
import { fetchGeneration } from "../pokeapi/something";
import { v4 as uuidv4 } from "uuid";
import "@testing-library/jest-dom/extend-expect";

async function parseGenerationData() {
  const generationData = await fetchGeneration();
  const generationJSON = JSON.parse(generationData);

  return new Promise<[]>((resolve, reject) => {
    resolve(generationJSON.results);
  });
  //something new
}

const GenerationCounter = () => {
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
    <div>
      <ul>
        {generationList.map((item) => (
          <li key={uuidv4()}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenerationCounter;
