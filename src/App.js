import React, { useState } from 'react';
<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from 'react-router-dom'
=======
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 544796e7fcf852a35bfc16431b852d94236c92f6
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

  
  