import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { addCard } from './actions/cardActions';
import './App.css';

import Cards from './screens/cardsScreen';

function App() {
  return (
    <Provider store={store}>
      <div>
        <p style={{ height: '100px'}}>
          Welcome to the awesome note app!
        </p>
      </div>
    <Cards />
  </Provider>
  );
}

export default App;
