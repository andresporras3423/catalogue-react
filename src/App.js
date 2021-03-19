import { useState, useEffect } from 'react';
import { getAllPokemonData } from './apiData';
import './App.css';

function App() {
  const [values, setValues] = useState([]);

  useEffect(async () => {
    setValues(await getAllPokemonData());
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
