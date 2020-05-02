import React from 'react';
import { Slide } from '@material-ui/core';

import { CardData } from '../Card/types';
import Hand from '../Hand';

const initialCards: CardData[] = [
  {color: 'blue', value: '0'},
  {color: 'green', value: '1'},
  {color: 'red', value: '2'},
  {color: 'yellow', value: '3'},
  {color: 'blue', value: 'reverse'},
  {color: 'green', value: 'skip'}
];

const OpponentHand = () => {
  const [cards] = React.useState(initialCards);
  return (
    <Slide direction='right' in>
      <Hand cards={cards} type='opponent' />
    </Slide>
  );
};

export default OpponentHand;