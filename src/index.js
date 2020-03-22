import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import TopBar from './components/topBar';
import Routes from './routes';

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
