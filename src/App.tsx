import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { SignUp } from './pages/SignUp';
import { PrivateRoute } from './routes/PrivateRoute';

// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
// import { companyApi } from './utils/service';

function App() {
  return (
    // <ApiProvider api={companyApi}>
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
    // </ApiProvider>
  );
}

export default App;
