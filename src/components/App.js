// import { useState, useEffect } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonList from './PokemonsList';
import PokemonFilter from './PokemonFilter';

function App(props) {
  const { switchFilterPage } = props;

  const renderComponent = () => {
    if (switchFilterPage) {
      return <PokemonFilter />;
    }

    return <PokemonList />;
  };

  return (
    <div className="App">
      {renderComponent()}
    </div>
  );
}

const mapStateToProps = state => ({
  switchFilterPage: state.filter.switchFilterPage,
});

App.propTypes = {
  switchFilterPage: PropTypes.bool,
};

App.defaultProps = {
  switchFilterPage: true,
};

export default connect(mapStateToProps)(App);
