import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { SignUp } from './pages/SignUp';
import { PrivateRoute } from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <PrivateRoute path="/homepage">
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/">
          <HomePage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
