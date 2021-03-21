import {
  SWITCH_FILTER_PAGE, CHANGE_FILTER_TYPE, CHANGE_FILTER_NAME, CHANGE_TYPE_FILTER_NAME,
} from '../types/index';

const filterReducer = (state = {
  pokemonType: 'All', switchFilterPage: true, pokemonName: '', typeFilterName: '0',
}, action) => {
  switch (action.type) {
    case CHANGE_FILTER_TYPE: return {
      ...state,
      pokemonType: action.pokemonType,
    };
    case SWITCH_FILTER_PAGE: return {
      ...state,
      switchFilterPage: !state.switchFilterPage,
    };
    case CHANGE_FILTER_NAME: return {
      ...state,
      pokemonName: action.pokemonName,
    };
    case CHANGE_TYPE_FILTER_NAME: return {
      ...state,
      typeFilterName: action.typeFilterName,
    };
    default: return state;
  }
};

export default filterReducer;
