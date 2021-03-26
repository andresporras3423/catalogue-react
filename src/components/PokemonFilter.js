import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function PokemonFilter(props) {
  const {
    types,
    pokemonType,
    pokemonName,
    typeFilterName,
    updateName,
    updateType,
    updateTypeFilterName,
  } = props;

  const changeFilterType = event => {
    updateType(event.target.value);
  };

  const changeFilterName = event => {
    updateName(event.target.value);
  };

  const changeTypeFilterName = event => {
    updateTypeFilterName(event.target.value);
  };

  const clearForm = event => {
    event.preventDefault();
    updateType('All');
    updateName('');
    updateTypeFilterName('0');
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

const mapStateToProps = state => ({
  types: state.data.types,
});

PokemonFilter.propTypes = {
  types: PropTypes.shape([]),
  pokemonType: PropTypes.string,
  pokemonName: PropTypes.string,
  typeFilterName: PropTypes.string,
  updateName: PropTypes.func,
  updateType: PropTypes.func,
  updateTypeFilterName: PropTypes.func,
};

PokemonFilter.defaultProps = {
  types: null,
  pokemonType: null,
  pokemonName: null,
  typeFilterName: null,
  updateName: null,
  updateType: null,
  updateTypeFilterName: null,
};

export default connect(mapStateToProps)(PokemonFilter);
