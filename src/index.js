import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import TopBar from './components/topBar';
import Routes from './routes';
import { CurrentUserProvider } from './contexts/currentUser';
const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </CurrentUserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
