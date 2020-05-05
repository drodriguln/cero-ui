import React from 'react';
import { Slide } from '@material-ui/core';

import Hand from '../Hand';
import { useSelector } from 'react-redux';
import { selectPlayer } from '../../store/player/selector';

const PlayerHand = () => {
  const { cards } = useSelector(selectPlayer)

  return (
    <Slide direction='left' in>
      <Hand cards={cards} type='player' />
    </Slide>
  );
};

export default PlayerHand;