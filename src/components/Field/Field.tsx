import React from 'react';
import { Fade, Grid, makeStyles } from '@material-ui/core';

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
    overflow: 'visible'
  }
});

const Hand = () => {
  const classes = useStyles();
  return (
    <CardMat className={classes.root}>
      <Fade timeout={2000} in>
        <Grid container spacing={8} wrap='nowrap'>
          <Grid item>
            <Card color='blue' value='0' size='lg' />
          </Grid>
          <Grid item>
            <Deck />
          </Grid>
        </Grid>
      </Fade>
    </CardMat>
  );
};

export default Hand;