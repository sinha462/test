import React from 'react';
import './App.css';
import SignInOutContainer from './containers';
import Rocket from "./rocket.png";

function App() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5'>
          <SignInOutContainer/> 
        </div>
      </div>
    </div>
  );
} 

export default App;