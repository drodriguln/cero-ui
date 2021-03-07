import React from 'react';
import { Slide } from '@material-ui/core';

import { useOpponent } from '../../store/session/opponent/selector';
import { usePlayer } from '../../store/session/player/selector';
import OpponentHand from './OpponentHand';
import { PlayerStatus } from '../../enum';

const Opponent = () => {
  const opponent = useOpponent();
  const player = usePlayer();
  const hasCards = opponent.cardCount !== 0;
  const hasGameEnded = opponent.status === PlayerStatus.WON || player.status === PlayerStatus.WON;

  return (
    <Slide
      direction="down"
      timeout={600}
      in={hasCards && !hasGameEnded}
      exit={!hasCards || hasGameEnded}
    >
      <OpponentHand />
    </Slide>
  );
};

export default Opponent;
