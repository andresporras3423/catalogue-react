import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import PokemonRow from './PokemonRow';
import { addPokemon, addType } from '../actions/index';

function PokemonsList(props) {
  const {
    pokemons, pokemonType, pokemonName, typeFilterName, handleAddPokemon, handleAddType,
  } = props;
  useEffect(async () => {
    if (pokemons.length === 0) {
      const getPokemonData = async () => {
        const response = await fetch('https://hidden-plateau-07048.herokuapp.com/pokemon/get_names_types', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        Object.values(data).forEach((nPokemon, index) => {
          handleAddPokemon({
            id: index,
            name: nPokemon.name,
            types: nPokemon.types,
          });
          nPokemon.types.forEach(nType => handleAddType(nType));
        });
      };
      await getPokemonData();
    }
  }, [pokemons]);

  const filterPokemons = () => pokemons.filter(
    nPokemon => (pokemonType === 'All' || nPokemon.types.includes(pokemonType))
    && (pokemonName === ''
    || (
      (typeFilterName === '0' && (new RegExp(`${pokemonName}`)).test(nPokemon.name))
      || (typeFilterName === '1' && (new RegExp(`^(${pokemonName})`)).test(nPokemon.name))
      || (typeFilterName === '2' && (new RegExp(`(${pokemonName})$`)).test(nPokemon.name))
      || (typeFilterName === '3' && (new RegExp(`^(${pokemonName}){1}$`)).test(nPokemon.name))
    )
    ),
  );
  return (
    <div>
      <span>{pokemons.length === 0 ? 'please wait, data loading...' : `${filterPokemons().length} results`}</span>
      <table className="table border-color">
        <tbody>
          {
      filterPokemons().map(nPokemon => (
        <PokemonRow pokemon={nPokemon} key={nanoid()} />
      ))
  }
        </tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  handleAddPokemon: pokemon => {
    dispatch(addPokemon(pokemon));
  },
  handleAddType: type => {
    dispatch(addType(type));
  },
});

const mapStateToProps = state => ({
  pokemons: state.data.pokemons,
});

PokemonsList.propTypes = {
  pokemons: PropTypes.shape([]),
  pokemonType: PropTypes.string,
  pokemonName: PropTypes.string,
  typeFilterName: PropTypes.string,
  handleAddPokemon: PropTypes.func,
  handleAddType: PropTypes.func,
};

PokemonsList.defaultProps = {
  pokemons: null,
  pokemonType: null,
  pokemonName: null,
  typeFilterName: null,
  handleAddPokemon: null,
  handleAddType: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
