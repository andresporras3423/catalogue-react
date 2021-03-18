import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = JSON.stringify(await response.json());
        setValue(data);
        console.log(`data from the api: ${data}`);
        return data;
      } catch {
        return -1;
      }
    })();
  });
  return (
    <div className="App">
      <p>
        {value}
      </p>
    </div>
  );
}

export default App;
