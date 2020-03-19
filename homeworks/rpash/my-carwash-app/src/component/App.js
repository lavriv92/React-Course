import React from 'react';
import '../css/App.css';
import Counter from './Counter/Counter';
import CommentList from "./CommentList/CommentList";


function App() {
  return (
      <>
          <hr/>
          <Counter/>
          <hr/>
          <CommentList/>
      </>
  );
}

export default App;
