import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Counter from './components/counter/counter';
import CommentsApp from './components/comments_list/comments_app';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Homeworks</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/counter'} className="nav-link">Counter</Link></li>
            <li><Link to={'/comments-list'} className="nav-link">Comments List</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route path='/counter' component={Counter} />
              <Route path='/comments-list' component={CommentsApp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;