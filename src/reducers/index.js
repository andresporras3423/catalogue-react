import { combineReducers } from 'redux';
import pokemonReducer from './pokemon';
import filterReducer from './filter';

const rootReducer = combineReducers({ data: pokemonReducer, filter: filterReducer });

export default rootReducer;
