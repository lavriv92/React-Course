import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import CommentsList from "./components/CommentList/CommentsList"
import FormContainer from './components/FormContainer/FormContainer';

function App() {

  return (
    <div className="App">
      <Counter />
      <div>Next Components</div>
      <CommentsList/>
      
      <FormContainer/>
    </div>
  );
}

export default App;
