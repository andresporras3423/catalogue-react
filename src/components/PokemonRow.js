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
    id: PropTypes.number,
    name: PropTypes.string,
    abilities: PropTypes.instanceOf(Array),
    types: PropTypes.instanceOf(Array),
    image: PropTypes.string,
  }),
};

PokemonRow.defaultProps = {
  pokemon: null,
};

export default PokemonRow;
