import {
  CHANGE_FILTER_TYPE,
  ADD_POKEMON,
  ADD_TYPE,
  CHANGE_FILTER_NAME,
  CHANGE_TYPE_FILTER_NAME,
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

export const changeFilterType = pokemonType => ({
  type: CHANGE_FILTER_TYPE,
  pokemonType,
});

export const changeFilterName = pokemonName => ({
  type: CHANGE_FILTER_NAME,
  pokemonName,
});

export const changeTypeFilterName = typeFilterName => ({
  type: CHANGE_TYPE_FILTER_NAME,
  typeFilterName,
});

export const changeSelectedPokemon = selectedPokemon => ({
  type: CHANGE_SELECTED_POKEMON,
  selectedPokemon,
});

export default {
  addPokemon, addType, changeFilterType, changeSelectedPokemon,
};
