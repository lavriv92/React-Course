import React from 'react';
import Header from './components/Header';
import PageHome from './components/PageHome';
import PageForm from './components/PageForm';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

const Root = () => (
  <div className="App">
    <Header />
    <main>
      <Route exact path="/"
        render={() => <PageHome />}
      />
      <Route exact path="/form"
        render={() => <PageForm />}
      />
    </main>
  </div>
);

const RootWithConnect = withRouter(Root);

const App = () => (
  <Router>
    <RootWithConnect />
  </Router>
);

export default App;
