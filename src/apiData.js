export async function dataPerPokemon(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const abilities = [];
    const types = [];
    data.abilities.forEach(nAbility => {
      abilities.push(nAbility.ability.name);
    });
    data.types.forEach(nType => {
      types.push(nType.type.name);
    });
    // console.log(data.sprites.other['official-artwork'].front_default);
    // console.log({ abilities, types });
    const image = String(data.sprites.other['official-artwork'].front_default);
    return { abilities, types, image };
  } catch {
    return -1;
  }
}

export async function getAllPokemonData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const listPokemon = [];
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i < data.results.length; i += 1) {
      const pokemon = data.results[i];
      const aditionalInfo = await dataPerPokemon(pokemon.url);
      listPokemon.push({
        name: pokemon.name,
        abilities: aditionalInfo.abilities,
        types: aditionalInfo.types,
        image: aditionalInfo.image,
      });
    }
    // console.log(listPokemon);
    return listPokemon;
  } catch {
    return -1;
  }
}

export default { getAllPokemonData, dataPerPokemon };
