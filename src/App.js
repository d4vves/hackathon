import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Buttons from './components/Buttons'
import Landmark from './components/Landmark'
import data from './data.json';
import Navbar from './components/Navbar'
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
       <Navbar />
        <Landmark currentLandmark={currentLandmark} />
        <Buttons addLandmark={addLandmark} swapLandmark={swapLandmark} />
      </BrowserRouter>
    </>
  );
};


export default App;

  
  