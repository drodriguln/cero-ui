import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../Card';
import { discardSelector } from '../../../store/session/discard/selector';

const Discard = () => {
  const discard = useSelector(discardSelector);

  return (
    <Card
      color={discard.color}
      value={discard.value}
      size="lg"
    />
  );
};

export default Discard;
