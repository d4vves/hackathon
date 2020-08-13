import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header';
import Picture from './components/Picture';
import StarRating from './components/starRating'
import Landmark from './components/Landmark'

import data from './data.json';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <StarRating />
        <Landmark />
        
      </header>
    </div>
  );
};

export default App;


