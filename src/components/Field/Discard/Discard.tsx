import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../Card';
import { discardTopCardSelector } from '../../../store/session/discard/selector';

const Discard = () => {
  const discardCard = useSelector(discardTopCardSelector);

  return discardCard !== undefined
    ? <Card color={discardCard.color} value={discardCard.value} size="lg" />
    : null;
};

export default Discard;
