import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './theme';
import Home from './pages/home';
import DraftJs from './pages/draftjs';
import SlateJs from './pages/slatejs';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Switch>
          <Route path="/draftjs">
            <DraftJs />
          </Route>
          <Route path="/slatejs">
            <SlateJs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
