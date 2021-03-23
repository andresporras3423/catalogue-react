import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { switchFilterPage } from '../actions/index';

function PokemonDetails(props) {
  const { selectedPokemon, handleSwitchFilterPage } = props;

  const changePage = () => {
    handleSwitchFilterPage();
  };

  return (
    <div>
      <button type="submit" onClick={changePage}>Go back to filter page</button>
      <h3>{selectedPokemon.name}</h3>
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

const mapDispatchToProps = dispatch => ({
  handleSwitchFilterPage: () => {
    dispatch(switchFilterPage());
  },
});

PokemonDetails.propTypes = {
  selectedPokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    abilities: PropTypes.shape([]).isRequired,
    types: PropTypes.shape([]).isRequired,
    image: PropTypes.string.isRequired,
  }),
  handleSwitchFilterPage: PropTypes.func,
};

PokemonDetails.defaultProps = {
  selectedPokemon: null,
  handleSwitchFilterPage: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
