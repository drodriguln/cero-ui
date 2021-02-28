import { CardSrcMap } from '.';
import zero from '../../assets/img/red/0.png';
import one from '../../assets/img/red/1.png';
import two from '../../assets/img/red/2.png';
import three from '../../assets/img/red/3.png';
import four from '../../assets/img/red/4.png';
import five from '../../assets/img/red/5.png';
import six from '../../assets/img/red/6.png';
import seven from '../../assets/img/red/7.png';
import eight from '../../assets/img/red/8.png';
import nine from '../../assets/img/red/9.png';
import skip from '../../assets/img/red/skip.png';
import { CardValue } from '../../../../enum';

const red: CardSrcMap = {
  [CardValue.ZERO]: zero,
  [CardValue.ONE]: one,
  [CardValue.TWO]: two,
  [CardValue.THREE]: three,
  [CardValue.FOUR]: four,
  [CardValue.FIVE]: five,
  [CardValue.SIX]: six,
  [CardValue.SEVEN]: seven,
  [CardValue.EIGHT]: eight,
  [CardValue.NINE]: nine,
  [CardValue.SKIP]: skip,
};

export default red;
