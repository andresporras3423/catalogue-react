import { useState, useEffect } from 'react';
// import { getAllPokemonData } from './apiData';
import './App.css';

function App() {
  const [values, setValues] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://hidden-plateau-07048.herokuapp.com/pokemon/get', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(Object.values(data));
    setValues(Object.values(data));
  }, []);
  return (
    <div className="App">
      <p>
        {values.map(v => JSON.stringify(v)).join(',')}
      </p>
    </div>
  );
}

export default App;
