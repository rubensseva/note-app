import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Grid from "@material-ui/core/Grid"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"

import { HashRouter, Route, Switch } from "react-router-dom";

import { addCard } from "./actions/cardActions";
import Navbar from "./components/Navbar"
import LoginScreen from "./screens/LoginScreen";
import TopicScreen from "./screens/TopicsScreen";

import "./App.css";

import Cards from "./screens/CardsScreen";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Grid container directoin="column">
          <Navbar />
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/topics" component={TopicScreen} />
        </Switch>
        </Grid>
      </HashRouter>
    </Provider>
  );
}

export default App;
