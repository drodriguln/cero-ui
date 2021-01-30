import { CardColor, CardValue } from '../../../../types';
import blue from './blue';
import green from './green';
import red from './red';
import yellow from './yellow';

export type CardSrcMap = {
  [key in CardValue]: string;
};

type CardImageMap = {
  [key in CardColor]: CardSrcMap;
};

const imageMap: CardImageMap = {
  blue,
  green,
  red,
  yellow,
};

export default imageMap;
