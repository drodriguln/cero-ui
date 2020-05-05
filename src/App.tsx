import React from 'react';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import store from './store';
import Field from './components/Field';
import OpponentHand from './components/OpponentHand';
import PlayerHand from './components/PlayerHand';
import Background from './components/Background';

const useGlobalStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0
    }
  }
});

const App = () => {
  useGlobalStyles();

  return (
    <Provider store={store}>
      <Background>
        <OpponentHand />
        <Field />
        <PlayerHand />
      </Background>
    </Provider>
  );
};

export default App