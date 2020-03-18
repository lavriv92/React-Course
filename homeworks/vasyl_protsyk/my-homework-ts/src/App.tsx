import React from 'react';
import './App.css';
import Menu from './components/menu-component/menu.component';
import MENU from './constants/menu.constant';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="row">
            <div className='col-md-4'><Menu/></div>

            <div className="col-md-8">
              <Switch>
                { MENU.map(item =>
                  <Route path={item.path} exact={item.path === '/'}><div>{item.name}</div></Route>)
                }
                {/*<Route path='/' exact={true}><div>Home</div></Route>*/}
                {/*<Route path='/first-homework'><div>first-homework</div></Route>*/}
                {/*<Route path='/second-homework'><div>second-homework</div></Route>*/}
                {/*<Route path='/third-homework'><div>third-homework</div></Route>*/}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
