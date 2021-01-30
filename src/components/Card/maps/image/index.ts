import blue from './blue';
import green from './green';
import red from './red';
import yellow from './yellow';
import { CardColor, CardValue } from '../../../../enum';

export type CardSrcMap = {
  [key in CardValue]: string;
};

type CardImageMap = {
  [key in CardColor]: CardSrcMap;
};

const imageMap: CardImageMap = {
  [CardColor.BLUE]: blue,
  [CardColor.GREEN]: green,
  [CardColor.RED]: red,
  [CardColor.YELLOW]: yellow,
};

export default imageMap;
