import { combineReducers } from 'redux';
import pokemonReducer from './pokemon';

const rootReducer = combineReducers({ data: pokemonReducer });

export default rootReducer;
