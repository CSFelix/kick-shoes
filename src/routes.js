import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    // we don't import 'BrowserRouter' here due to the reason
    // we will set the header as a pattern to all pages.
    //
    // so we usee 'BrowseRouter' in App.js file
    <Switch>
      <Route path="/" exact element={<Home />}/>
      <Route path="/cart" element={<Cart />} />
    </Switch>
  );
}
