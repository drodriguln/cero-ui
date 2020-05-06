import React from 'react';
import { makeStyles } from '@material-ui/core';

import { CardColor } from '../../store/types';
import { useSelector } from 'react-redux';
import { selectDiscard } from '../../store/discard/selector';

type BackgroundColorMap = {
  [keys in CardColor]: string;
}

type Props = {
  children?: React.ReactNode;
}

type GlobalStyleProps = {
  backgroundColor: {
    previous: string,
    current: string;
  };
}

const useStyles = makeStyles({
  root: ({ backgroundColor }: GlobalStyleProps) => ({
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundImage: `radial-gradient(${backgroundColor.current} 50%, ${backgroundColor.previous})`,
    minHeight: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  })
});

const backgroundColorMap: BackgroundColorMap = {
  blue: 'rgb(145, 179, 236)',
  green: 'rgb(150, 236, 145)',
  red: 'rgb(236, 151, 145)',
  yellow: 'rgb(244, 243, 184)'
}

const Background = ({ children }: Props) => {
  const discard = useSelector(selectDiscard);
  const previousCard = discard?.length > 1 ? discard[discard.length - 2] : undefined;
  const currentCard = discard?.length > 0 ? discard[discard.length - 1] : undefined;
  const previousColor = previousCard !== undefined ? backgroundColorMap[previousCard.color] : 'rgb(192, 192, 192)';
  const currentColor = currentCard !== undefined ? backgroundColorMap[currentCard.color] : 'rgb(192, 192, 192)';
  const classes = useStyles({
    backgroundColor: {
      previous: previousColor,
      current: currentColor
    }
  });

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default Background;