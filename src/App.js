import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import Home from './Pages/Home'
import Product from './Pages/Product'
import ShopProvider from './Context/Context'
const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine(); //styletron boilerplate code

  const engine = new Styletron();

const App = () => {
  return (
    <ShopProvider>
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <Router>
        <Switch>
        <Route path="/product">
        <Product />
        </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>

    </Router>
  </StyletronProvider>
    </ShopProvider>
    
  )
}

export default App
