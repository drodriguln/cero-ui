import { CardDimensions } from '../../../store/types';

type CardSizeMap = {
  xs: CardDimensions;
  sm: CardDimensions;
  md: CardDimensions;
  lg: CardDimensions;
  xl: CardDimensions;
}

const sizeMap: CardSizeMap = {
  xs: { height: 70, width: 50 },
  sm: { height: 98, width: 70 },
  md: { height: 140, width: 100 },
  lg: { height: 196, width: 140 },
  xl: { height: 280, width: 200 },
};

export default sizeMap;