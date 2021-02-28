import { CardSrcMap } from '.';
import zero from '../../assets/img/green/0.png';
import one from '../../assets/img/green/1.png';
import two from '../../assets/img/green/2.png';
import three from '../../assets/img/green/3.png';
import four from '../../assets/img/green/4.png';
import five from '../../assets/img/green/5.png';
import six from '../../assets/img/green/6.png';
import seven from '../../assets/img/green/7.png';
import eight from '../../assets/img/green/8.png';
import nine from '../../assets/img/green/9.png';
import skip from '../../assets/img/green/skip.png';
import { CardValue } from '../../../../enum';

const green: CardSrcMap = {
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

export default green;
