import React, { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import CardMat from '../CardContainer';
import Deck from './Deck';
import Discard from './Discard';
import { usePlayer } from '../../store/session/player/selector';
import { useOpponent } from '../../store/session/opponent/selector';
import GlowTypography from './GlowTypography';
import { PlayerStatus } from '../../enum';
import { useId } from "../../store/session/id/selector";

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

const deleteSession = (sessionId: string) => {
  return fetch(`/api/sessions/${sessionId}`, {
    method: 'DELETE',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
  });
}

const Hand = () => {
  const sessionId = useId();
  const { status: playerStatus } = usePlayer();
  const { status: opponentStatus } = useOpponent();
  const hasWinner = playerStatus === PlayerStatus.WON || opponentStatus === PlayerStatus.WON;
  const classes = useStyles();

  useEffect(() => {
    if (!hasWinner) {
      return;
    }

    (async () => {
      await deleteSession(sessionId);
    })();
  }, [hasWinner]);

  return (
    <CardMat className={classes.root}>
      {hasWinner ? (
        <GlowTypography variant="h4">
          {playerStatus === PlayerStatus.WON ? 'You win!' : 'Opponent wins!'}
        </GlowTypography>
      ) : (
        <Grid container spacing={8} wrap="nowrap">
          <Grid item>
            <Discard />
          </Grid>
          <Grid item>
            <Deck />
          </Grid>
        </Grid>
      )}
    </CardMat>
  );
};

export default Hand;
