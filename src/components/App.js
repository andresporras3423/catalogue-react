import '../App.css';
import { useEffect } from 'react';
import useState from 'react-usestateref';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPokemon, addType } from '../actions/index';
import PokemonList from './PokemonsList';
import PokemonFilter from './PokemonFilter';
import PokemonDetails from './PokemonDetails';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(props) {
  const { switchFilterPage, handleAddPokemon, handleAddType } = props;
  const [initialState, setInitialState, refInitialState] = useState([]);
  useEffect(async () => {
    if (initialState.length === 0) {
      const getPokemonData = async () => {
        const response = await fetch('https://hidden-plateau-07048.herokuapp.com/pokemon/get', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setInitialState(Object.values(data));
      };
      await getPokemonData();
      console.log(refInitialState.current);
      refInitialState.current.forEach((nPokemon, index) => {
        handleAddPokemon({
          id: index,
          name: nPokemon.name,
          abilities: nPokemon.abilities,
          types: nPokemon.types,
          image: nPokemon.image,
        });
        nPokemon.types.forEach(nType => handleAddType(nType));
      });
    }
  }, [initialState]);

  const renderComponent = () => {
    if (switchFilterPage) {
      return (
        <>
          <PokemonFilter />
          <PokemonList />
        </>
      );
    }

    return <PokemonDetails />;
  };

  return (
    <div className="App">
      <div>
        <h1 className="pokelist-title">My PokeList</h1>
        {renderComponent()}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  switchFilterPage: state.filter.switchFilterPage,
});

const mapDispatchToProps = dispatch => ({
  handleAddPokemon: pokemon => {
    dispatch(addPokemon(pokemon));
  },
  handleAddType: type => {
    dispatch(addType(type));
  },
});

App.propTypes = {
  switchFilterPage: PropTypes.bool,
  handleAddPokemon: PropTypes.func,
  handleAddType: PropTypes.func,
};

App.defaultProps = {
  switchFilterPage: true,
  handleAddPokemon: null,
  handleAddType: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
