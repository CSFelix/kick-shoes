import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (

    // see explanation to why we're using BrowserRouter here
    // in routes.js file
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
