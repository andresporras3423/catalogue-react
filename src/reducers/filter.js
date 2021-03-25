import {
  CHANGE_FILTER_TYPE,
  CHANGE_FILTER_NAME,
  CHANGE_TYPE_FILTER_NAME,
  CHANGE_SELECTED_POKEMON,
} from '../types/index';

const filterReducer = (state = {
  pokemonType: 'All', pokemonName: '', typeFilterName: '0', selectedPokemon: {},
}, action) => {
  switch (action.type) {
    case CHANGE_FILTER_TYPE: return {
      ...state,
      pokemonType: action.pokemonType,
    };
    case CHANGE_FILTER_NAME: return {
      ...state,
      pokemonName: action.pokemonName,
    };
    case CHANGE_TYPE_FILTER_NAME: return {
      ...state,
      typeFilterName: action.typeFilterName,
    };
    case CHANGE_SELECTED_POKEMON: return {
      ...state,
      selectedPokemon: action.selectedPokemon,
    };
    default: return state;
  }
};

export default filterReducer;
