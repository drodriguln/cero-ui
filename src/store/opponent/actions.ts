import { CardData } from '../types';

export enum OpponentAction {
  ADD_CARD = 'OPPONENT_ADD_CARD',
  ADD_CARDS = 'OPPONENT_ADD_CARDS',
  REMOVE_CARD = 'OPPONENT_REMOVE_CARD'
}

export const addOpponentCard = (card: CardData) => ({ type: OpponentAction.ADD_CARD, payload: card });
export const addOpponentCards = (cards: CardData[]) => ({ type: OpponentAction.ADD_CARDS, payload: cards });
export const removeOpponentCard = (id: number) => ({ type: OpponentAction.REMOVE_CARD, payload: id });