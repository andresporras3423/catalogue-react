import { useState } from 'react';
import '../App.css';
import {
  Route, Switch,
} from 'react-router-dom';
import PokemonList from '../containers/PokemonsList';
import PokemonFilter from '../containers/PokemonFilter';
import PokemonDetails from '../containers/PokemonDetails';

function App() {
  const [name, setName] = useState('');
  const [type, setType] = useState('All');
  const [typeFilterName, setTypeFilterName] = useState('0');
  const updateName = nName => setName(nName);
  const updateType = nType => setType(nType);
  const updateTypeFilterName = nTypeFilterName => setTypeFilterName(nTypeFilterName);

  return (

    <div className="App">
      <div>
        <h1 className="pokelist-title">My PokeList</h1>
        <Switch>
          <Route exact path="/details/:id">
            <PokemonDetails />
          </Route>
          <Route exact path="/">
            <PokemonFilter
              pokemonName={name}
              pokemonType={type}
              typeFilterName={typeFilterName}
              updateName={updateName}
              updateType={updateType}
              updateTypeFilterName={updateTypeFilterName}
            />
            <PokemonList pokemonName={name} pokemonType={type} typeFilterName={typeFilterName} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
