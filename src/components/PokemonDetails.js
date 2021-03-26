import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeSelectedPokemon } from '../actions/index';

function PokemonDetails(props) {
  const {
    handleChangeSelectedPokemon, name, abilities, selectedTypes, image,
  } = props;
  const [newData, setNewData] = useState(false);
  const { id } = useParams();

  useEffect(async () => {
    const getPokemonData = async () => {
      const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/pokemon/get_details?id=${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      // console.log(data);
      handleChangeSelectedPokemon(data);
      // console.log(selectedPokemon);
    };
    await getPokemonData();
    setNewData(true);
  }, []);

  const showPokemonData = () => {
    if (newData) {
      return (
        <>
          <h3>
            {name}
          </h3>
          <p>
            <strong>Types: </strong>
            {selectedTypes.join(', ')}
          </p>
          <p>
            <strong>Abilities: </strong>
            {abilities.join(', ')}
          </p>
          <img width="300px" height="300px" alt="" src={image} />
        </>
      );
    }

    return <p>loading content...</p>;
  };

  return (
    <div>
      <Link to="/">Go back to filter page</Link>
      {showPokemonData()}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  handleChangeSelectedPokemon: pokemon => {
    dispatch(changeSelectedPokemon(pokemon));
  },
});

const mapStateToProps = state => ({
  name: state.data.name,
  abilities: state.data.abilities,
  selectedTypes: state.data.selectedTypes,
  image: state.data.image,
});

PokemonDetails.propTypes = {
  name: PropTypes.string,
  abilities: PropTypes.instanceOf(Array),
  selectedTypes: PropTypes.instanceOf(Array),
  image: PropTypes.string,
  handleChangeSelectedPokemon: PropTypes.func,
};

PokemonDetails.defaultProps = {
  name: null,
  abilities: null,
  selectedTypes: null,
  image: null,
  handleChangeSelectedPokemon: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
