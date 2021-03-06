import React from 'react';

import Card from '../../Card';
import { useDiscard } from '../../../store/session/discard/selector';

const Discard = () => {
  const discard = useDiscard();

  return (
    <Card
      color={discard.color}
      value={discard.value}
      size="lg"
    />
  );
};

export default Discard;
