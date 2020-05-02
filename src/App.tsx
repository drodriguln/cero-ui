import React from 'react';
import { makeStyles } from '@material-ui/core';

import OpponentHand from './components/OpponentHand';
import PlayerHand from './components/PlayerHand';

const useGlobalStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: 'rgba(40, 40, 40, 0.05)'
    },
  },
});

const App = () => {
  useGlobalStyles();
  return (
    <>
      <OpponentHand />
      <PlayerHand />
    </>
  );
};

export default App