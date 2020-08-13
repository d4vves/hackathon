import React from 'react';
import './App.css';
import StarRating from './components/starRating'
import Landmark from './components/Landmark'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarRating />
        <Landmark />
        
      </header>
    </div>
  );
}

export default App;
