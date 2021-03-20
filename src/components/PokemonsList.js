// import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonRow from './PokemonRow';

function PokemonsList(props) {
  const { pokemons, types } = props;
  console.log(types);
  return (
    <table className="table border-color">
      <tbody>
        {
      pokemons.map(nPokemon => (
        <PokemonRow pokemon={nPokemon} key={nanoid()} />
      ))
  }
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  pokemons: state.data.pokemons,
  types: state.data.types,
});

PokemonsList.propTypes = {
  pokemons: PropTypes.shape([]),
  types: PropTypes.shape([]),
};

PokemonsList.defaultProps = {
  pokemons: null,
  types: null,
};

export default connect(mapStateToProps)(PokemonsList);
