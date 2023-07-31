import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Menu } from './components/Menu';
import './index.css';
import { Abc } from './templates/Abc';
import { App } from './templates/App';
import { Page404 } from './templates/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/abc/:slug" component={Abc} />
      <Route path="/abc" component={Abc} />
      <Route path="/" component={App} exact />
      <Route path="*" component={Page404} />
    </Switch>
  </BrowserRouter>,
);
