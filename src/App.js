import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
// import Header from './components/Header';
import Picture from './components/Picture';
import StarRating from './components/starRating'
import Landmark from './components/Landmark'
import Buttons from './components/Buttons'
import data from './data.json';

const App = () => {
  let [index, setIndex] = useState(0)
  let [currentLandmark, setCurrentLandmark] = useState(data[index])
  let [favoriteLandmarks, setFavoriteLandmarks] = useState([])

  const swapLandmark = () => {
    setIndex(index += 1)
    console.log(index)
    setCurrentLandmark(data[index])
  }
  
  const addLandmark = () => {
    let newFavoriteLandmarks = [currentLandmark, ...favoriteLandmarks]
    console.log(newFavoriteLandmarks)
    setFavoriteLandmarks(newFavoriteLandmarks)
    swapLandmark()
  }

  return (
    <>
      <BrowserRouter>
        <p>NAVBAR COMPONENT</p>
        <img src={currentLandmark.image} width='500px' />
        <Buttons addLandmark={addLandmark} swapLandmark={swapLandmark} />
      </BrowserRouter>
    </>
  );
};

export default App;


