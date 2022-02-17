import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { reducer, StateProvider } from "./state";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <StateProvider reducer={reducer}>
    <Router>
    <App />
    </Router>
  </StateProvider>,
  document.getElementById('root')
);


