type pokeSpecies = {
  name: string;
  url: string;
};

// function getPokemonValue(currentPokemon:pokeSpecies, )

//TODO: figure out a way to sort pokemon array by url
//Sorts array of PokeSpecies by url(number)
export function sortPokemon(pokemon: pokeSpecies[]): pokeSpecies[] {
  for (let i = 1; i < pokemon.length; i++) {
    let previousIndex = i - 1;
    let currentIndex = i;
    let previousPokeValue = pokemon[previousIndex].url.split('/');
    let currentPokeValue = pokemon[currentIndex].url.split('/');

    while (
      parseInt(currentPokeValue[currentPokeValue.length - 2]) <
      parseInt(previousPokeValue[previousPokeValue.length - 2])
    ) {
      const temp = pokemon[previousIndex];

      pokemon[previousIndex] = pokemon[currentIndex];
      pokemon[currentIndex] = temp;

      previousIndex--;
      currentIndex--;

      previousPokeValue = pokemon[previousIndex].url.split('/');
      currentPokeValue = pokemon[currentIndex].url.split('/');
    }
  }

  return pokemon;
}
