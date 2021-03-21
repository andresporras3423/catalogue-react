// import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter, switchFilterPage } from '../actions/index';

function PokemonFilter(props) {
  const {
    types, handleFilterChange, handleSwitchFilterPage, pokemonType,
  } = props;

  const changeFilter = event => {
    handleFilterChange(event.target.value);
  };

  const changePage = () => {
    handleSwitchFilterPage();
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
      <button type="submit" onClick={changePage}>Search</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  handleFilterChange: pokemonType => {
    dispatch(changeFilter(pokemonType));
  },
  handleSwitchFilterPage: () => {
    dispatch(switchFilterPage());
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
  handleSwitchFilterPage: PropTypes.func,
};

PokemonFilter.defaultProps = {
  types: null,
  pokemonType: null,
  handleFilterChange: null,
  handleSwitchFilterPage: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonFilter);
