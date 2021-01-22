import React from 'react';

import { useSelector } from 'react-redux';
import { CardData } from '../../store/types';
import { discardSelector, discardTopCardSelector } from '../../store/session/discard/selector';
import useStyles from './styles';

const backgroundColorMap = {
  blue: 'rgb(145, 179, 236)',
  green: 'rgb(150, 236, 145)',
  red: 'rgb(255, 185, 185)',
  yellow: 'rgb(244, 243, 184)',
  gray: 'rgb(212, 212, 212)',
};

const createBackgroundColor = (previousCard?: CardData, currentCard?: CardData) => {
  const previousColor = backgroundColorMap[previousCard?.color ?? 'gray'];
  const currentColor = backgroundColorMap[currentCard?.color ?? 'gray'];
  return { previous: previousColor, current: currentColor };
};

const Background = () => {
  const discard = useSelector(discardSelector);
  const currentCard = useSelector(discardTopCardSelector);
  const previousCard = discard?.length > 1 ? discard[discard.length - 2] : undefined;
  const backgroundColor = createBackgroundColor(previousCard, currentCard);
  const classes = useStyles(backgroundColor.previous, backgroundColor.current)();

  return (
    <div>
      <div className={classes.previousImage} />
      <div className={classes.currentImage} />
    </div>
  );
};

export default Background;
