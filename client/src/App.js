import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { HashRouter, Route, Switch } from "react-router-dom";

import { addCard } from "./actions/cardActions";
import LoginScreen from "./screens/LoginScreen";
import "./App.css";

import Cards from "./screens/CardsScreen";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/cards" component={Cards} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
