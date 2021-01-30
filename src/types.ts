import { CardColor, PlayerStatus } from './enum';

export type CardValue = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'reverse' | 'skip';
export type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type CardDimensions = {
  height: number;
  width: number;
}
export type CardData = {
  id: number;
  color: CardColor;
  value: CardValue;
}

export type Discard = CardData;
export type Player = {
  cards: CardData[],
  status: PlayerStatus,
};

export type Session = {
  id: string,
  discard: Discard,
  opponent: Player,
  player: Player,
}
