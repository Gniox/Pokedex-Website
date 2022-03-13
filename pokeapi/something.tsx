export async function fetchGeneration() {
  const url = 'https://pokeapi.co/api/v2/generation/';

  const response = await fetch(url);

  console.log(response.status);
  console.log(response.statusText);

  const data = await response.json();

  return data;
}
