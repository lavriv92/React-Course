import React from 'react';
import './App.css';
import Counter from './components/counter/counter';
import Comments from './components/comments/comments';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="App-logo">Header</section>
        <Counter></Counter>
      </header>
      <main>
        <Comments></Comments>
      </main>
    </div>
  );
}

export default App;
