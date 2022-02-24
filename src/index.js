import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DeveloperProfile from './pages/DeveloperProfile';
import './index.css';


function App() {
  return (
      <Router>
          <Switch>
              <Route exact path='/'  component={HomePage} />
              <Route path='/api/developers/:developerId' exact component={DeveloperProfile} />
          </Switch>
      </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);