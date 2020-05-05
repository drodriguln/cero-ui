import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Card from '../Card';
import CardMat from '../CardMat';
import Deck from './Deck';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'calc(100% - 100px)',
    padding: '20px 40px',
    overflow: 'visible',
    animation: '0.6s ease-out 0s 1 $onLoadZoom',
  },
  '@keyframes onLoadZoom': {
    '0%': {
      transform: 'translate(-50%, -50%) scale(1.35)'
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
          <Card color='blue' value='0' size='lg' />
        </Grid>
        <Grid item>
          <Deck />
        </Grid>
      </Grid>
    </CardMat>
  );
};

export default Hand;