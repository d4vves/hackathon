import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Buttons from './components/Buttons'
import Landmark from './components/Landmark'
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
        <Switch>
          <Route path='/' render={props =>
            <>
              <Landmark currentLandmark={currentLandmark} />
              <Buttons addLandmark={addLandmark} swapLandmark={swapLandmark} />
            </>
          } />
          <Route path='/profile' />
        </Switch>
        
      </BrowserRouter>
    </>
  );
};

export default App;


