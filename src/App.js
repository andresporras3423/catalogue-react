// import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';

function App(props) {
  const { pokemons, types } = props;
  console.log(pokemons);
  return (
    <div className="App">
      <p>
        {/* {pokemons.map(p => JSON.stringify(p)).join(',')} */}
      </p>
      <p>
        {[...types].map(t => JSON.stringify(t)).join(',')}
      </p>
    </div>
  );
}

const mapStateToProps = state => ({
  pokemons: state.data.pokemons,
  types: state.data.types,
});

App.propTypes = {
  pokemons: PropTypes.shape([]),
  types: PropTypes.shape([]),
};

App.defaultProps = {
  pokemons: null,
  types: null,
};

export default connect(mapStateToProps)(App);
