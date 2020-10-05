import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './theme';
import Layout from './components/layout';
import Home from './pages/home';
import DraftJs from './pages/draftjs';
import SlateJs from './pages/slatejs';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/draftjs">
          <Layout>
            <DraftJs />
          </Layout>
        </Route>
        <Route path="/slatejs">
          <Layout>
            <SlateJs />
          </Layout>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
