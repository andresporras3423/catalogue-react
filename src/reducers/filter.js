import { CHANGE_FILTER } from '../types/index';

const filterReducer = (state = { pokemonType: 'All' }, action) => {
  switch (action.type) {
    case CHANGE_FILTER: return {
      ...state,
      pokemonType: action.pokemonType,
    };
    default: return state;
  }
};

export default filterReducer;
