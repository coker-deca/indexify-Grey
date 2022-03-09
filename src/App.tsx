import './App.css';

// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { SignUp } from './pages/SignUp';
// import { companyApi } from './utils/service';

function App() {
  return (
    // <ApiProvider api={companyApi}>
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
    // </ApiProvider>
  );
}

export default App;
