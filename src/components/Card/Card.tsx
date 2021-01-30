import React from 'react';

import backImageSrc from './assets/img/back.png';
import drawImageSrc from './assets/img/draw.png';
import { imageMap, sizeMap } from './maps';
import { CardColor, CardSize, CardValue } from '../../types';

type Props = {
  value: CardValue;
  color: CardColor;
  size?: CardSize;
  title?: string;
  hidden?: boolean;
  className?: string;
  onClick?: () => void;
}

type EmptyCardProps = {
  title?: string;
  size?: CardSize;
  className?: string;
  onClick?: () => void;
}

const findCardImage = (color: CardColor, value: CardValue) => imageMap[color]?.[value] ?? backImageSrc;

const Card = (props: Props) => {
  const {
    value, color, size = 'md', title = `${color} ${value}`, hidden = false, ...otherProps
  } = props;
  const { height, width } = sizeMap[size];
  const src = hidden ? backImageSrc : findCardImage(color, value);
  return <img alt={title} src={src} height={height} width={width} {...otherProps} />;
};

Card.Draw = ({ title = 'Draw', size = 'md', ...otherProps }: EmptyCardProps) => {
  const { height, width } = sizeMap[size];
  return <img alt={title} height={height} width={width} src={drawImageSrc} {...otherProps} />;
};

export default Card;
