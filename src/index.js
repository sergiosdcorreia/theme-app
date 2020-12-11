import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import AppContainer from './containers/App';
import Routes from './routes';

import './styles/_main.scss';

ReactDOM.render(
  <AppContainer>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AppContainer>,
  document.getElementById('root')
);
