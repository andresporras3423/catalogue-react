import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { changeSelectedPokemon, switchFilterPage } from '../actions/index';

function PokemonRow(props) {
  const { pokemon, handleSwitchFilterPage, handleChangeSelectedPokemon } = props;

  const changeSelected = () => {
    handleChangeSelectedPokemon(pokemon);
    handleSwitchFilterPage();
  };
  return (
    <tr>
      <td>
        <Link to={`/details/${pokemon.id}`} onClick={changeSelected}>{pokemon.name}</Link>
      </td>
    </tr>
  );
}

const mapDispatchToProps = dispatch => ({
  handleChangeSelectedPokemon: selectedPokemon => {
    dispatch(changeSelectedPokemon(selectedPokemon));
  },
  handleSwitchFilterPage: () => {
    dispatch(switchFilterPage());
  },
});

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    abilities: PropTypes.shape([]).isRequired,
    types: PropTypes.shape([]).isRequired,
    image: PropTypes.string.isRequired,
  }),
  handleChangeSelectedPokemon: PropTypes.func.isRequired,
  handleSwitchFilterPage: PropTypes.func.isRequired,
};

PokemonRow.defaultProps = {
  pokemon: null,
};

export default connect(null, mapDispatchToProps)(PokemonRow);
