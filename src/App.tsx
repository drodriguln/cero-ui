import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import store from './store';
import Field from './components/CardField';
import Opponent from './components/Opponent';
import Player from './components/Player';
import Background from './components/Background';
import { SessionProvider } from "./components/SessionProvider";

const useGlobalStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
    },
  },
});

const App = () => {
  useGlobalStyles();

  return (
    <StoreProvider store={store}>
      <SessionProvider>
        <Background />
        <Opponent />
        <Field />
        <Player />
      </SessionProvider>
    </StoreProvider>
  );
};

export default App;
