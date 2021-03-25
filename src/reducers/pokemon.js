import { ADD_POKEMON, ADD_TYPE } from '../types/index';

const pokemonReducer = (state = { pokemons: [], types: new Set(['All']) }, action) => {
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
    default: return state;
  }
};

export default pokemonReducer;
