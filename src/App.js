import React from 'react';
import './App.css';
import LikeButton from './components/LikeButton'
import DislikeButton from './components/DislikeButton'
import MoreInfoButton from './components/MoreInfoButton'

function App() {
  return (
    <div className="App">
      <LikeButton />
      <DislikeButton />
      <MoreInfoButton />
    </div>
  );
}

export default App;
