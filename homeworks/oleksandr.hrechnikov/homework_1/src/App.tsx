import React from 'react';
import './App.css';
import logo from './logo.svg';
import RotateImage from './components/RotateImage/RotateImage'
import CounterManager from './components/CounterManager/CounterManager';

const counterConfig = {
  min: -360,
  max: 360,
  position: 50
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterManager min={counterConfig.min} max={counterConfig.max} position={counterConfig.position}>
          {counter => (
            <RotateImage src={logo} maxPosition={counterConfig.max} {...counter}> 
              {animationDirection => (<p>{animationDirection}</p>)}
            </RotateImage>
          )}
        </CounterManager>
      </header>
    </div>
  );
}

export default App;
