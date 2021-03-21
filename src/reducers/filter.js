import { SWITCH_FILTER_PAGE, CHANGE_FILTER } from '../types/index';

const filterReducer = (state = { pokemonType: 'All', switchFilterPage: true }, action) => {
  switch (action.type) {
    case CHANGE_FILTER: return {
      ...state,
      pokemonType: action.pokemonType,
    };
    case SWITCH_FILTER_PAGE: return {
      ...state,
      switchFilterPage: !state.switchFilterPage,
    };
    default: return state;
  }
};

export default filterReducer;
