import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../Card';
import { discardSelector } from '../../../store/session/discard/selector';

const Discard = () => {
  const discardCard = useSelector(discardSelector);

  return (
    <Card
      color={discardCard.color}
      value={discardCard.value}
      size="lg"
    />
  );
};

export default Discard;
