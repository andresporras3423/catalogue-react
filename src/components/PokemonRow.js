import { useState } from 'react';
import PropTypes from 'prop-types';

function PokemonRow(props) {
  const { pokemon } = props;
  const [selected, setSelected] = useState(false);

  const updateSelected = () => {
    setSelected(!selected);
  };

  const renderAuthButton = () => {
    if (selected) {
      return (
        <div>
          <p>
            {`types: ${pokemon.types.join(', ')}`}
          </p>
          <p>
            {`abilities: ${pokemon.abilities.join(', ')}`}
          </p>
          <img width="300px" height="300px" alt="" src={pokemon.image} />
        </div>
      );
    }

    return <div />;
  };

  return (
    <tr>
      <td>
        <span>{pokemon.name}</span>
        {renderAuthButton()}
      </td>
      <td><button type="submit" onClick={updateSelected}>{selected ? 'hide details' : 'show details'}</button></td>
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
