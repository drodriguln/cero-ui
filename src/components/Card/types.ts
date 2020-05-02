export type CardValue = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'reverse' | 'skip';
export type CardColor = 'blue' | 'green' | 'red' | 'yellow';
export type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type CardDimensions = {
  height: number;
  width: number;
}
export type CardData = {
  color: CardColor;
  value: CardValue;
}