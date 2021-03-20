import { ADD_POKEMON, ADD_TYPE } from '../types/index';

const pokemonReducer = (state = { pokemons: [], types: new Set() }, action) => {
  switch (action.type) {
    case ADD_POKEMON: return {
      ...state,
      pokemons: (() => {
        const nPokemons = [...state.pokemons];
        nPokemons.push({
          id: action.id,
          name: action.name,
          abilities: action.abilities,
          types: action.types,
          image: action.image,
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
