// import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonRow from './PokemonRow';
import PokemonFilter from './PokemonFilter';

function PokemonsList(props) {
  const { pokemons, types, pokemonType } = props;
  console.log(types);
  return (
    <div>
      <PokemonFilter />
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
  types: state.data.types,
  pokemonType: state.filter.pokemonType,
});

PokemonsList.propTypes = {
  pokemons: PropTypes.shape([]),
  types: PropTypes.shape([]),
  pokemonType: PropTypes.string,
};

PokemonsList.defaultProps = {
  pokemons: null,
  types: null,
  pokemonType: null,
};

export default connect(mapStateToProps)(PokemonsList);
