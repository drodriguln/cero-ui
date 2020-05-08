import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import CardMat from '../CardMat';
import Deck from './Deck';
import Discard from './Discard';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'calc(100% - 100px)',
    padding: '20px 40px',
    overflow: 'visible',
    animation: '0.5s ease-out 0s 1 $onLoadZoom',
  },
  '@keyframes onLoadZoom': {
    '0%': {
      transform: 'translate(-50%, -50%) scale(1.3)'
    },
    '100%': {
      transform: 'translate(-50%, -50%) scale(1)'
    }
  }
});

const Hand = () => {
  const classes = useStyles();

  return (
    <CardMat className={classes.root}>
      <Grid container spacing={8} wrap='nowrap'>
        <Grid item>
          <Discard />
        </Grid>
        <Grid item>
          <Deck />
        </Grid>
      </Grid>
    </CardMat>
  );
};

export default Hand;