import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PokemonRow(props) {
  const { pokemon } = props;
  return (
    <tr>
      <td>
        <Link to={`/details/${pokemon.id}`}>{pokemon.name}</Link>
      </td>
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
