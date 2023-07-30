import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Menu } from './components/Menu';
import './index.css';
import { Abc } from './templates/Abc';
import { App } from './templates/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/abc/:slug/:id" component={Abc} exact />
    </Switch>
  </BrowserRouter>,
);
