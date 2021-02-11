import React, { useState } from 'react';
import { Characters } from './features/characters/characters.js';
import { Movies } from './features/characters/movies.js';

import './App.css';

function App() {

  const [selectedCharacter, setSelectedCharacter] = useState({});

  const onCharacterChange = function(e) {
    console.log('hhh');
    console.log(e);
    setSelectedCharacter(e);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Characters onCharacterChange = {onCharacterChange} />
        <Movies selectedCharacter = {selectedCharacter} />
      </header>
    </div>
  );
}

export default App;
