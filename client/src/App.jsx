import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import store from "./store";
import Navbar from "./components/Navbar";
import LoginScreen from "./screens/LoginScreen";
import TopicsScreen from "./screens/TopicsScreen";
import Cards from "./screens/CardsScreen";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Grid container directoin="column">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/cards" component={Cards} />
            <Route exact path="/topics" component={TopicsScreen} />
          </Switch>
        </Grid>
      </HashRouter>
    </Provider>
  );
}

export default App;
