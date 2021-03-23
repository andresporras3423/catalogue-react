import '../App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonList from './PokemonsList';
import PokemonFilter from './PokemonFilter';
import PokemonDetails from './PokemonDetails';

function App(props) {
  const { switchFilterPage } = props;

  const renderComponent = () => {
    if (switchFilterPage) {
      return (
        <>
          <PokemonFilter />
          <PokemonList />
        </>
      );
    }

    return <PokemonDetails />;
  };

  return (
    <div className="App">
      <div>
        <h1 className="pokelist-title">My PokeList</h1>
        {renderComponent()}
      </div>
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
