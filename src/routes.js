import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalFeed from './pages/globalFeed';
import Article from './pages/article';
import Authentication from './pages/auth';
import TagFeed from './pages/tagFeed';
import YourFeed from './pages/yourFeed';
import CreateArticle from './pages/createArticle/';
import EditArticle from './pages/editArticle/';
import UserProfile from './pages/userProfile';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={GlobalFeed} exact />
      <Route path='/profiles/:slug' component={UserProfile} exact />
      <Route path='/profiles/:slug/favorites' component={UserProfile} exact />
      <Route path='/articles/new' component={CreateArticle} />
      <Route path='/articles/:slug/edit' component={EditArticle} exact />
      <Route path='/feed' component={YourFeed} exact />
      <Route path='/tags/:slug' component={TagFeed} />
      <Route path='/articles/:slug' component={Article} />
      <Route path='/login' component={Authentication} />
      <Route path='/register' component={Authentication} />
    </Switch>
  );
};
export default Routes;
