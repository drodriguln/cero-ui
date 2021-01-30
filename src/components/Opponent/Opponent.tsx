import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { opponentSelector } from '../../store/session/opponent/selector';
import { playerSelector } from '../../store/session/player/selector';
import { Status } from '../../enum';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

const Opponent = () => {
  const { cards, status: opponentStatus } = useSelector(opponentSelector);
  const { status: playerStatus } = useSelector(playerSelector);
  const classes = useStyles();
  const hasCards = cards?.length !== 0;
  const hasGameEnded = opponentStatus === Status.WON || playerStatus === Status.WON;

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
