import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/App.css'
import ErrorPage from './components/ErrorPage';
import Product from './components/Product'
import Products from './components/Products'
import Header from './components/Header';
import Cart from './components/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/Product/:x" component={Product} />
        <Route exact path="/Cart" component={Cart} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App


