import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css' 
import {BrowserRouter as Router} from 'react-router-dom'


import './App.css';

function App() {
  return (
    
    <Router>
    <div>
      <nav>
        <Navbar /> 
      </nav> 
    </div>
    

  
  </Router>
  
  );
}

export default App;