import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

function PokemonDetails(props) {
  const { selectedPokemon } = props;
  const { id } = useParams();

  return (
    <div>
      <Link to="/">Go back to filter page</Link>
      <h3>
        {selectedPokemon.name}
        {' '}
        {id}
      </h3>
      <p>
        <strong>Types: </strong>
        {selectedPokemon.types.join(', ')}
      </p>
      <p>
        <strong>Abilities: </strong>
        {selectedPokemon.abilities.join(', ')}
      </p>
      <img width="300px" height="300px" alt="" src={selectedPokemon.image} />
    </div>
  );
}

const mapStateToProps = state => ({
  selectedPokemon: state.filter.selectedPokemon,
});

PokemonDetails.propTypes = {
  selectedPokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    abilities: PropTypes.shape([]).isRequired,
    types: PropTypes.shape([]).isRequired,
    image: PropTypes.string.isRequired,
  }),
};

PokemonDetails.defaultProps = {
  selectedPokemon: null,
};

export default connect(mapStateToProps)(PokemonDetails);
