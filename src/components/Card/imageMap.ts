import {
  Zero as BlueZero, One as BlueOne, Two as BlueTwo,
  Three as BlueThree, Four as BlueFour, Five as BlueFive,
  Six as BlueSix, Seven as BlueSeven, Eight as BlueEight,
  Nine as BlueNine, Skip as BlueSkip,
} from './CardImage/Blue';
import {
  Zero as GreenZero, One as GreenOne, Two as GreenTwo,
  Three as GreenThree, Four as GreenFour, Five as GreenFive,
  Six as GreenSix, Seven as GreenSeven, Eight as GreenEight,
  Nine as GreenNine, Skip as GreenSkip,
} from './CardImage/Green';
import {
  Zero as RedZero, One as RedOne, Two as RedTwo,
  Three as RedThree, Four as RedFour, Five as RedFive,
  Six as RedSix, Seven as RedSeven, Eight as RedEight,
  Nine as RedNine, Skip as RedSkip,
} from './CardImage/Red';
import {
  Zero as YellowZero, One as YellowOne, Two as YellowTwo,
  Three as YellowThree, Four as YellowFour, Five as YellowFive,
  Six as YellowSix, Seven as YellowSeven, Eight as YellowEight,
  Nine as YellowNine, Skip as YellowSkip,
} from './CardImage/Yellow';
import { CardColor, CardValue } from '../../enum';

export default {
  [CardColor.BLUE]: {
    [CardValue.ZERO]: BlueZero,
    [CardValue.ONE]: BlueOne,
    [CardValue.TWO]: BlueTwo,
    [CardValue.THREE]: BlueThree,
    [CardValue.FOUR]: BlueFour,
    [CardValue.FIVE]: BlueFive,
    [CardValue.SIX]: BlueSix,
    [CardValue.SEVEN]: BlueSeven,
    [CardValue.EIGHT]: BlueEight,
    [CardValue.NINE]: BlueNine,
    [CardValue.SKIP]: BlueSkip,
  },
  [CardColor.GREEN]: {
    [CardValue.ZERO]: GreenZero,
    [CardValue.ONE]: GreenOne,
    [CardValue.TWO]: GreenTwo,
    [CardValue.THREE]: GreenThree,
    [CardValue.FOUR]: GreenFour,
    [CardValue.FIVE]: GreenFive,
    [CardValue.SIX]: GreenSix,
    [CardValue.SEVEN]: GreenSeven,
    [CardValue.EIGHT]: GreenEight,
    [CardValue.NINE]: GreenNine,
    [CardValue.SKIP]: GreenSkip,
  },
  [CardColor.RED]: {
    [CardValue.ZERO]: RedZero,
    [CardValue.ONE]: RedOne,
    [CardValue.TWO]: RedTwo,
    [CardValue.THREE]: RedThree,
    [CardValue.FOUR]: RedFour,
    [CardValue.FIVE]: RedFive,
    [CardValue.SIX]: RedSix,
    [CardValue.SEVEN]: RedSeven,
    [CardValue.EIGHT]: RedEight,
    [CardValue.NINE]: RedNine,
    [CardValue.SKIP]: RedSkip,
  },
  [CardColor.YELLOW]: {
    [CardValue.ZERO]: YellowZero,
    [CardValue.ONE]: YellowOne,
    [CardValue.TWO]: YellowTwo,
    [CardValue.THREE]: YellowThree,
    [CardValue.FOUR]: YellowFour,
    [CardValue.FIVE]: YellowFive,
    [CardValue.SIX]: YellowSix,
    [CardValue.SEVEN]: YellowSeven,
    [CardValue.EIGHT]: YellowEight,
    [CardValue.NINE]: YellowNine,
    [CardValue.SKIP]: YellowSkip,
  },
};
