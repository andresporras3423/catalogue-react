import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './PokemonsList';
import PokemonFilter from './PokemonFilter';
import PokemonDetails from './PokemonDetails';

function App() {
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
              <PokemonFilter />
              <PokemonList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
