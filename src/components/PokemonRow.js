// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function PokemonRow(props) {
  const { pokemon } = props;
  return (
    <tr>
      <td>{pokemon.name}</td>
      <td><button type="submit">show details</button></td>
    </tr>
  );
}

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    abilities: PropTypes.shape([]).isRequired,
    types: PropTypes.shape([]).isRequired,
    image: PropTypes.string.isRequired,
  }),
};

PokemonRow.defaultProps = {
  pokemon: null,
};

export default PokemonRow;
