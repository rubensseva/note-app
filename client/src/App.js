import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import { HashRouter, Route, Switch } from "react-router-dom";

import { addCard } from "./actions/cardActions";
import LoginScreen from "./screens/LoginScreen";
import TopicScreen from "./screens/TopicsScreen";
import "./App.css";

import Cards from "./screens/CardsScreen";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/topics" component={TopicScreen} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
