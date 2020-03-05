import React from 'react';
import CommentsList from './CommentsList/CommentsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="https://placehold.it/640x480" alt="placeholder" />
      <h3>Comments:</h3>
      <CommentsList />
    </div>
  );
}

export default App;
