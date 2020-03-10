import React, {useState} from 'react';
import './App.css';
import FirstHomeTask from './components/FirstHomeTask/FirstHomeTask'
import SecondHomeTask from "./components/SecondHomeTask/SecondHomeTask";

function App() {
  const [hide, setHide] = useState(true);
  
  function handleState(isHide) {
    setHide(!isHide);
  }

  return (
    <div className="App">
      <div onClick={() => handleState(hide)} className="hometask-1">
         Click here to <span>{ hide ? 'show' : 'hide' }</span> hometask 1
      </div>

      <div className={ hide ? 'hidden' : '' }>
        <FirstHomeTask />
      </div>
      
      <div className={ !hide ? 'hidden' : '' }>
        <SecondHomeTask />
      </div>
    </div>
  );
}

export default App;
