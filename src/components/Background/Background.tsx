import React from 'react';
import { makeStyles } from '@material-ui/core';

import { CardData } from '../../store/types';
import { useSelector } from 'react-redux';
import { discardSelector, discardTopCardSelector } from '../../store/discard/selector';

type Props = {
  children?: React.ReactNode;
}

type StyleProps = {
  backgroundColor: {
    current: string;
    previous: string;
  };
}

const useStyles = makeStyles({
  root: ({ backgroundColor }: StyleProps) => ({
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundImage: `radial-gradient(${backgroundColor.current} 10%, ${backgroundColor.previous})`,
    minHeight: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  })
});

const backgroundColorMap = {
  blue: 'rgb(145, 179, 236)',
  green: 'rgb(150, 236, 145)',
  red: 'rgb(255, 185, 185)',
  yellow: 'rgb(244, 243, 184)',
  gray: 'rgb(192, 192, 192)'
}

const createBackgroundColor = (currentCard?: CardData, previousCard?: CardData) => {
  const currentColor = backgroundColorMap[currentCard?.color ?? 'gray'];
  const previousColor = backgroundColorMap[previousCard?.color ?? 'gray'];
  return { current: currentColor, previous: previousColor };
};

const Background = ({ children }: Props) => {
  const discard = useSelector(discardSelector);
  const currentCard = useSelector(discardTopCardSelector);
  const previousCard = discard?.length > 1 ? discard[discard.length - 2] : undefined;
  const classes = useStyles({
    backgroundColor: createBackgroundColor(currentCard, previousCard)
  });

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default Background;