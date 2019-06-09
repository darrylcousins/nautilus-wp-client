/*
 * Component as entry point to application.
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Page from './components/Page';
import HeaderMenu from './components/HeaderMenu';
import FooterMenu from './components/FooterMenu';

const App = () => (
  <Router>
    <main>
      <HeaderMenu />
      <Container className="pt10">
        <Route path="/:slug" component={Page} />
        <Route strict exact path="/" component={Page} />
      </Container>
      <FooterMenu />
    </main>
  </Router>
);

export default App;
