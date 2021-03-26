import { useState } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './PokemonsList';
import PokemonFilter from './PokemonFilter';
import PokemonDetails from './PokemonDetails';

function App() {
  const [name, setName] = useState('');
  const [type, setType] = useState('All');
  const [typeFilterName, setTypeFilterName] = useState('0');
  const updateName = nName => setName(nName);
  const updateType = nType => setType(nType);
  const updateTypeFilterName = nTypeFilterName => setTypeFilterName(nTypeFilterName);

  return (
    <Router>
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
    </Router>
  );
}

export default App;
