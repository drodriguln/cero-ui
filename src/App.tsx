import React from 'react';
import { makeStyles } from '@material-ui/core';

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
    <Background>
      <OpponentHand />
      <Field />
      <PlayerHand />
    </Background>
  );
};

export default App