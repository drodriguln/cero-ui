import React from 'react';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { useSelector } from 'react-redux';
import { opponentSelector } from '../../store/opponent/selector';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});

const Opponent = () => {
  const { cards } = useSelector(opponentSelector)
  const classes = useStyles();
  const hasCards = cards?.length === 0;

  return (
    <Slide direction='down' timeout={600} in={!hasCards} exit={!hasCards}>
      <Hand cards={cards} className={classes.root} hidden />
    </Slide>
  );
};

export default Opponent;