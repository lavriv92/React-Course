import React from 'react';
import './App.css';
import logo from './logo.svg';
import RotateImage from './components/RotateImage/RotateImage'
import CounterManager from './components/CounterManager/CounterManager';
import Login from './components/Login/Login';

const counterConfig = {
  min: -360,
  max: 360,
  position: 50
};

function App() {
  return (
    <div className="App">
      <section>
        <h1>Homework 2</h1>
        <Login />
      </section>

      <aside>
        <h1>Homework 1</h1>
        <CounterManager min={counterConfig.min} max={counterConfig.max} position={counterConfig.position}>
          {counter => (
            <RotateImage src={logo} maxPosition={counterConfig.max} {...counter}>
              {animationDirection => (<p>{animationDirection}</p>)}
            </RotateImage>
          )}
        </CounterManager>
      </aside>

    </div>
  );
}

export default App;
