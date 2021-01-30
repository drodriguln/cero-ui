import { CardSrcMap } from '.';
import zero from '../../assets/img/blue/0.png';
import one from '../../assets/img/blue/1.png';
import two from '../../assets/img/blue/2.png';
import three from '../../assets/img/blue/3.png';
import four from '../../assets/img/blue/4.png';
import five from '../../assets/img/blue/5.png';
import six from '../../assets/img/blue/6.png';
import seven from '../../assets/img/blue/7.png';
import eight from '../../assets/img/blue/8.png';
import nine from '../../assets/img/blue/9.png';
import reverse from '../../assets/img/blue/reverse.png';
import skip from '../../assets/img/blue/skip.png';
import { CardValue } from '../../../../enum';

const blue: CardSrcMap = {
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
  [CardValue.REVERSE]: reverse,
  [CardValue.SKIP]: skip,
};

export default blue;
