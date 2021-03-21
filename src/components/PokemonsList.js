// import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonRow from './PokemonRow';
import { switchFilterPage } from '../actions/index';

function PokemonsList(props) {
  const { pokemons, pokemonType, handleSwitchFilterPage } = props;
  const changePage = () => {
    handleSwitchFilterPage();
  };
  return (
    <div>
      <button type="submit" onClick={changePage}>Go back to filter page</button>
      <table className="table border-color">
        <tbody>
          {
      pokemons.filter(nPokemon => pokemonType === 'All' || nPokemon.types.includes(pokemonType)).map(nPokemon => (
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
});

const mapDispatchToProps = dispatch => ({
  handleSwitchFilterPage: () => {
    dispatch(switchFilterPage());
  },
});

PokemonsList.propTypes = {
  pokemons: PropTypes.shape([]),
  pokemonType: PropTypes.string,
  handleSwitchFilterPage: PropTypes.func,
};

PokemonsList.defaultProps = {
  pokemons: null,
  pokemonType: null,
  handleSwitchFilterPage: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
