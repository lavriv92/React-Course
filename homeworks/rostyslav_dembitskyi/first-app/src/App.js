import React from 'react';
import "./styles.css";
import './App.css';
import CounterButton from './components/Buttons/CounterButton'
import CommentsList from './components/Comments/CommentsList'


function App() {
  return (
    <div className="App">
        <CounterButton />
        <CommentsList/>
    </div>
  );
}

export default App;
