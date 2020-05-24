import React from 'react';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import store from './store';
import Field from './components/Field';
import Opponent from './components/Opponent';
import Player from './components/Player';
import Background from './components/Background';

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
    <Provider store={store}>
      <>
        <Background />
        <Opponent />
        <Field />
        <Player />
      </>
    </Provider>
  );
};

export default App;
