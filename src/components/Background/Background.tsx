import React from 'react';

import { useDiscard } from '../../store/session/discard/selector';
import useStyles from './styles';

type BackgroundColorMap = {
  [index: string]: string
};

const backgroundColorMap: BackgroundColorMap = {
  blue: 'rgb(145, 179, 236)',
  green: 'rgb(150, 236, 145)',
  red: 'rgb(255, 185, 185)',
  yellow: 'rgb(244, 243, 184)',
  gray: 'rgb(212, 212, 212)',
};


const Background = () => {
  const discard = useDiscard();
  const colorKey = discard.color?.toString()?.toLowerCase() ?? 'gray';
  const backgroundColor = backgroundColorMap[colorKey];
  const classes = useStyles(backgroundColor)();

  return (
    <div className={classes.currentImage} />
  );
};

export default Background;
