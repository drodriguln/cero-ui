import { CardColor, CardValue, PlayerStatus } from './enum';

export type CardDimensions = {
  height: number;
  width: number;
}
export type CardData = {
  id: string;
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
