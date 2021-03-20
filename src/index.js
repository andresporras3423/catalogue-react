import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { addPokemon, addType } from './actions/index';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';

const initialState = {
  pokemons: [],
  types: [],
};

const store = createStore(rootReducer, applyMiddleware(thunk));

(async () => {
  const getPokemonData = async () => {
    const response = await fetch('https://hidden-plateau-07048.herokuapp.com/pokemon/get', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    initialState.pokemons = Object.values(data);
  };
  await getPokemonData();

  initialState.pokemons.forEach(nPokemon => {
    store.dispatch(addPokemon(nPokemon));
    nPokemon.types.forEach(nType => store.dispatch(addType(nType)));
  });
})();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
