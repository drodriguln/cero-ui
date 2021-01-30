import React from 'react';

import { useDiscard } from '../../store/session/discard/selector';
import useStyles from './styles';

const backgroundColorMap = {
  blue: 'rgb(145, 179, 236)',
  green: 'rgb(150, 236, 145)',
  red: 'rgb(255, 185, 185)',
  yellow: 'rgb(244, 243, 184)',
  gray: 'rgb(212, 212, 212)',
};

const Background = () => {
  const discard = useDiscard();
  const backgroundColor = backgroundColorMap[discard.color ?? 'gray'];
  const classes = useStyles(backgroundColor)();

  return (
    <div>
      <div className={classes.currentImage} />
    </div>
  );
};

export default Background;
