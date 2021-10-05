import React from "react";
import Product from "./Pages/Product";
import Home from './Pages/Home'
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
  const user = true
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products/:category">
          <ProductList />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          {
            user ? <Redirect to="/" /> : <Login />
          }
        </Route>
        <Route exact path="/register">
          {
            user ? <Redirect to="/" /> : <Register />
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
