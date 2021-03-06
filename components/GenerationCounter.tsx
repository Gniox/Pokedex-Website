import React, { FunctionComponent, useEffect, useState } from 'react';
import { fetchGeneration } from '../pokeapi/something';
import { v4 as uuidv4 } from 'uuid';

async function parseGenerationData() {
  const generationData = await fetchGeneration();
  const generationJSON = JSON.parse(generationData);

  return new Promise<[]>((resolve, reject) => {
    resolve(generationJSON.results);
  });
}

//TODO: install jsdom for testing
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
    fetch('https://pokeapi.co/api/v2/generation')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data: genList) => {
        setGenerationList(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data: ' + error);
      });
  });

  return (
    <div>
      <ul>
        {generationList.map((item) => (
          <li key={uuidv4()}>item.name</li>
        ))}
      </ul>
    </div>
  );
};

export default GenerationCounter;
