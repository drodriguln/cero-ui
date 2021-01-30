import { CardSrcMap } from '.';
import zero from '../../assets/img/yellow/0.png';
import one from '../../assets/img/yellow/1.png';
import two from '../../assets/img/yellow/2.png';
import three from '../../assets/img/yellow/3.png';
import four from '../../assets/img/yellow/4.png';
import five from '../../assets/img/yellow/5.png';
import six from '../../assets/img/yellow/6.png';
import seven from '../../assets/img/yellow/7.png';
import eight from '../../assets/img/yellow/8.png';
import nine from '../../assets/img/yellow/9.png';
import skip from '../../assets/img/yellow/skip.png';
import { CardValue } from '../../../../enum';

const yellow: CardSrcMap = {
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

export default yellow;
