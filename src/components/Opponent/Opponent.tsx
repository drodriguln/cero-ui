import React from 'react';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { useOpponent } from '../../store/session/opponent/selector';
import { usePlayer } from '../../store/session/player/selector';
import { PlayerStatus } from '../../enum';
import { CardData } from "../../types";

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

const createHiddenCards = (count: number) => {
  let cards = [];
  for (let i = 0; i <= count; i++) {
    cards.push({ id: String(i) } as CardData);
  }

  return cards;
}

const Opponent = () => {
  const opponent = useOpponent();
  const player = usePlayer();
  const classes = useStyles();
  const hasCards = opponent.cardCount !== 0;
  const hasGameEnded = opponent.status === PlayerStatus.WON || player.status === PlayerStatus.WON;
  const cards = createHiddenCards(opponent.cardCount);

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
