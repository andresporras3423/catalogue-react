import {
  CHANGE_FILTER, ADD_POKEMON, ADD_TYPE, SWITCH_FILTER_PAGE,
} from '../types/index';

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

export const changeFilter = pokemonType => ({
  type: CHANGE_FILTER,
  pokemonType,
});

export const switchFilterPage = () => ({
  type: SWITCH_FILTER_PAGE,
});

export default {
  addPokemon, addType, changeFilter, switchFilterPage,
};
