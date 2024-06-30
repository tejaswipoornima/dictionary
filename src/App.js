import React, { useState } from 'react';

function XDictionary() {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const found = dictionary.find(entry => entry.word.toLowerCase() === term);
    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input 
        type="text" 
        placeholder="Search for a word..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      <p><strong>Definition:</strong></p>
      <p>{result}</p>
    </div>
  );
}

export default XDictionary;
