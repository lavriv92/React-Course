import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import CommentsList from "./components/CommentList/CommentsList"

function App() {
  return (
    <div className="App">
      <Counter />
      <div>Next Components</div>
      <CommentsList/>
    </div>
  );
}

export default App;
