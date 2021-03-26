import { ADD_POKEMON, ADD_TYPE, CHANGE_SELECTED_POKEMON } from '../types/index';

const pokemonReducer = (state = {
  name: '',
  abilities: [],
  selectedTypes: [],
  image: '',
  pokemons: [],
  types: new Set(['All']),
}, action) => {
  switch (action.type) {
    case ADD_POKEMON: return {
      ...state,
      pokemons: (() => {
        const nPokemons = [...state.pokemons];
        nPokemons.push({
          id: action.id,
          name: action.name,
          types: action.types,
        });
        return nPokemons;
      })(),
    };
    case ADD_TYPE: return {
      ...state,
      types: (() => {
        const nTypes = new Set(state.types);
        nTypes.add(action.pokemonType);
        return nTypes;
      })(),
    };
    case CHANGE_SELECTED_POKEMON: return {
      ...state,
      name: action.name,
      abilities: [...action.abilities],
      selectedTypes: [...action.selectedTypes],
      image: action.image,
    };
    default: return state;
  }
};

export default pokemonReducer;
