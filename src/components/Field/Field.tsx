import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, makeStyles } from '@material-ui/core';

import CardMat from '../CardMat';
import Deck from './Deck';
import Discard from './Discard';
import { playerSelector } from '../../store/session/player/selector';
import { opponentSelector } from '../../store/session/opponent/selector';
import GlowTypography from '../GlowTypography';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'calc(100% - 100px)',
    padding: '20px 40px',
    animation: '0.6s ease-out 0s 1 $onLoadZoom',
  },
  '@keyframes onLoadZoom': {
    from: {
      transform: 'translate(-50%, -50%) scale(1.3)',
    },
    to: {
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
});

const Hand = () => {
  const { activity: playerActivity } = useSelector(playerSelector);
  const { activity: opponentActivity } = useSelector(opponentSelector);
  const classes = useStyles();

  if (playerActivity === 'won' || opponentActivity === 'won') {
    return (
      <CardMat className={classes.root}>
        <GlowTypography variant="h4">
          {playerActivity === 'won' ? 'You win!' : 'Opponent wins!'}
        </GlowTypography>
      </CardMat>
    );
  }
  return (
    <CardMat className={classes.root}>
      <Grid container spacing={8} wrap="nowrap">
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
