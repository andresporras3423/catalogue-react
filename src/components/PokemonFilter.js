import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeFilterType, changeFilterName, changeTypeFilterName,
} from '../actions/index';

function PokemonFilter(props) {
  const {
    types,
    handleFilterType,
    pokemonType,
    handleFilterName,
    handleTypeFilterName,
    pokemonName,
    typeFilterName,
  } = props;

  const changeFilterType = event => {
    handleFilterType(event.target.value);
  };

  const changeFilterName = event => {
    handleFilterName(event.target.value);
  };

  const changeTypeFilterName = event => {
    handleTypeFilterName(event.target.value);
  };

  const clearForm = event => {
    event.preventDefault();
    handleFilterType('All');
    handleFilterName('');
    handleTypeFilterName('0');
  };
  return (
    <div className="filter-container">
      <form className="select-filter">
        <div>
          <h2>Welcome to my Pokedex</h2>
          <p>Here you will find find information about the first 100 pokemons</p>
          <p>Use below form to filter by type or content name.</p>
        </div>
        <div className="two-columns">
          <span>Filter by type:</span>
          <select
            className="form-control"
            value={pokemonType}
            onChange={changeFilterType}
          >
            {
        [...types].map(type => (
          <option value={type} key={nanoid()}>{type}</option>
        ))
      }
          </select>
        </div>
        <div className="two-columns">
          <select value={typeFilterName} className="form-control name-select" onChange={changeTypeFilterName}>
            <option value="0">Contains:</option>
            <option value="1">Starts:</option>
            <option value="2">Ends:</option>
            <option value="3">Find exact:</option>
          </select>
          <input type="text" placeholder="empty to ignore" className="form-control" onChange={changeFilterName} value={pokemonName} />
        </div>
        <button type="submit" onClick={clearForm}>Clear form</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  handleFilterType: pokemonType => {
    dispatch(changeFilterType(pokemonType));
  },
  handleFilterName: pokemonName => {
    dispatch(changeFilterName(pokemonName));
  },
  handleTypeFilterName: typeFilterName => {
    dispatch(changeTypeFilterName(typeFilterName));
  },
});

const mapStateToProps = state => ({
  types: state.data.types,
  pokemonType: state.filter.pokemonType,
  pokemonName: state.filter.pokemonName,
  typeFilterName: state.filter.typeFilterName,
});

PokemonFilter.propTypes = {
  types: PropTypes.shape([]),
  pokemonType: PropTypes.string,
  handleFilterType: PropTypes.func,
  handleFilterName: PropTypes.func,
  handleTypeFilterName: PropTypes.func,
  pokemonName: PropTypes.string,
  typeFilterName: PropTypes.string,
};

PokemonFilter.defaultProps = {
  types: null,
  pokemonType: null,
  handleFilterType: null,
  handleFilterName: null,
  handleTypeFilterName: null,
  pokemonName: null,
  typeFilterName: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonFilter);
