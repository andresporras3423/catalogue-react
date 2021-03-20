import { ADD_POKEMON, ADD_TYPE } from '../types/index';

export const addPokemon = nPokemon => ({
  type: ADD_POKEMON,
  id: nPokemon.id,
  name: nPokemon.name,
  abilities: nPokemon.abilities,
  types: nPokemon.types,
  image: nPokemon.image,
});

export const addType = nType => ({
  type: ADD_TYPE,
  pokemonType: nType,
});

export default { addPokemon, addType };
