import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonRow from './PokemonRow';
import { switchFilterPage } from '../actions/index';

function PokemonsList(props) {
  const {
    pokemons, pokemonType, handleSwitchFilterPage, pokemonName, typeFilterName,
  } = props;

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
  const changePage = () => {
    handleSwitchFilterPage();
  };
  return (
    <div>
      <button type="submit" onClick={changePage}>Go back to filter page</button>
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

const mapStateToProps = state => ({
  pokemons: state.data.pokemons,
  pokemonType: state.filter.pokemonType,
  pokemonName: state.filter.pokemonName,
  typeFilterName: state.filter.typeFilterName,
});

const mapDispatchToProps = dispatch => ({
  handleSwitchFilterPage: () => {
    dispatch(switchFilterPage());
  },
});

PokemonsList.propTypes = {
  pokemons: PropTypes.shape([]),
  pokemonType: PropTypes.string,
  pokemonName: PropTypes.string,
  handleSwitchFilterPage: PropTypes.func,
  typeFilterName: PropTypes.string,
};

PokemonsList.defaultProps = {
  pokemons: null,
  pokemonType: null,
  pokemonName: null,
  handleSwitchFilterPage: null,
  typeFilterName: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
