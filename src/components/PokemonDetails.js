import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PokemonDetails() {
  const [pokemon, setPokemon] = useState({
    name: '', abilities: [], types: [], image: '',
  });
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
      setPokemon(data);
    };
    await getPokemonData();
  }, []);

  const showPokemonData = () => {
    if (pokemon.image !== '') {
      return (
        <>
          <h3>
            {pokemon.name}
          </h3>
          <p>
            <strong>Types: </strong>
            {pokemon.types.join(', ')}
          </p>
          <p>
            <strong>Abilities: </strong>
            {pokemon.abilities.join(', ')}
          </p>
          <img width="300px" height="300px" alt="" src={pokemon.image} />
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

export default PokemonDetails;
