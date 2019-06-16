/*
 * Component as entry point to application.
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ResponsiveContainer from './components/ResponsiveContainer';
import Page from './components/Page';

const App = () => (
  <Router>
    <ResponsiveContainer>
      <Switch>
        <Route path="/:slug" component={Page} />
        <Route strict exact path="/" component={Page} />
      </Switch>
    </ResponsiveContainer>
  </Router>
);

export default App;
