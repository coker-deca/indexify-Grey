import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <Route path="/homepage">
          <HomePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
