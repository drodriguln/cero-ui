import React from 'react';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { useOpponent } from '../../store/session/opponent/selector';
import { usePlayer } from '../../store/session/player/selector';
import { PlayerStatus } from '../../enum';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

const Opponent = () => {
  const { cards, status: opponentStatus } = useOpponent();
  const { status: playerStatus } = usePlayer();
  const classes = useStyles();
  const hasCards = cards?.length !== 0;
  const hasGameEnded = opponentStatus === PlayerStatus.WON || playerStatus === PlayerStatus.WON;

  return (
    <Slide
      direction="down"
      timeout={600}
      in={hasCards && !hasGameEnded}
      exit={!hasCards || hasGameEnded}
    >
      <Hand cards={cards} className={classes.root} type="opponent" />
    </Slide>
  );
};

export default Opponent;
