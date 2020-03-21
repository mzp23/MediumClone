import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalFeed from './pages/globalFeed';
import Article from './pages/article';

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={GlobalFeed} />
      <Route exact path='/articles/:slug' component={Article} />
    </Switch>
  );
};
