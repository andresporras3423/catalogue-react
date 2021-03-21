// import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../actions/index';

function PokemonFilter(props) {
  const { types, handleFilterChange, pokemonType } = props;

  const changeFilter = event => {
    handleFilterChange(event.target.value);
  };
  return (
    <div className="select-filter">
      <span>Filter by category:</span>
      <select
        className="form-control"
        value={pokemonType}
        onChange={changeFilter}
      >
        {
        [...types].map(type => (
          <option value={type} key={nanoid()}>{type}</option>
        ))
      }
      </select>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  handleFilterChange: pokemonType => {
    dispatch(changeFilter(pokemonType));
  },
});

const mapStateToProps = state => ({
  types: state.data.types,
  pokemonType: state.filter.pokemonType,
});

PokemonFilter.propTypes = {
  types: PropTypes.shape([]),
  pokemonType: PropTypes.string,
  handleFilterChange: PropTypes.func,
};

PokemonFilter.defaultProps = {
  types: null,
  pokemonType: null,
  handleFilterChange: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonFilter);
