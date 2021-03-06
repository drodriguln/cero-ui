import React from 'react';
import { makeStyles } from '@material-ui/core';

import CardImageBack from '../Card/CardImage/Back';
import CardImageDraw from '../Card/CardImage/Draw';
import imageMap from './imageMap';
import { CardColor, CardValue } from '../../enum';

type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = {
  value: CardValue;
  color: CardColor;
  title?: string;
  size?: CardSize;
  className?: string;
  onClick?: () => void;
}

type CardHiddenProps = {
  title?: string;
  size?: CardSize;
}

type EmptyCardProps = {
  title?: string;
  size?: CardSize;
  className?: string;
  onClick?: () => void;
}

const sizeMap = {
  xs: { height: 70, width: 50 },
  sm: { height: 98, width: 70 },
  md: { height: 140, width: 100 },
  lg: { height: 196, width: 140 },
  xl: { height: 280, width: 200 },
};

const useStyles = makeStyles({
  card: {
    borderRadius: 5,
  },
});

const findCardImage = (color: CardColor, value: CardValue) => imageMap[color]?.[value] ?? CardImageBack;

const Card = (props: Props) => {
  const {
    value, color, size = 'md', title = `${color} ${value}`, ...otherProps
  } = props;
  const classes = useStyles();
  const { height, width } = sizeMap[size];
  const CardImage = findCardImage(color, value);
  return (
    <div title={title} {...otherProps}>
      <CardImage height={height} width={width} className={classes.card} />
    </div>
  );
};

Card.Hidden = ({ title = 'Hidden', size = 'sm', ...otherProps }: CardHiddenProps) => {
  const { height, width } = sizeMap[size];
  const classes = useStyles();
  return (
    <div title={title} {...otherProps}>
      <CardImageBack height={height} width={width} className={classes.card} />
    </div>
  );
};

Card.Draw = ({ title = 'Draw', size = 'md', ...otherProps }: EmptyCardProps) => {
  const { height, width } = sizeMap[size];
  const classes = useStyles();
  return (
    <div title={title} {...otherProps}>
      <CardImageDraw height={height} width={width} className={classes.card} />
    </div>
  );
};

export default Card;
