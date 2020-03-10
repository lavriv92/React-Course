import React from 'react';
import "./styles.css";
import './App.css';
import CounterButton from './components/Buttons/CounterButton'
import CommentsList from './components/Comments/CommentsList'
import LoginForm from './components/LoginForm/LoginForm'


function App() {
  return (
    <div className="App">
        <CounterButton />
        <CommentsList/>
        <LoginForm/>
    </div>
  );
}

export default App;
