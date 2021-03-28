import {
  ADD_POKEMON,
  ADD_TYPE,
  CHANGE_SELECTED_POKEMON,
} from '../types/index';

export const addPokemon = nPokemon => ({
  type: ADD_POKEMON,
  id: nPokemon.id,
  name: nPokemon.name,
  types: nPokemon.types,
});

export const addType = nType => ({
  type: ADD_TYPE,
  pokemonType: nType,
});

export const changeSelectedPokemon = nPokemon => ({
  type: CHANGE_SELECTED_POKEMON,
  name: nPokemon.name,
  abilities: [...nPokemon.abilities],
  selectedTypes: [...nPokemon.types],
  image: nPokemon.image,
});

export default {
  addPokemon, addType, changeSelectedPokemon,
};
