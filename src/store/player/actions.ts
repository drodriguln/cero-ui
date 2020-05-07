import { CardData } from '../types';

export enum PlayerAction {
  ADD_CARD = 'PLAYER_ADD_CARD',
  ADD_CARDS = 'PLAYER_ADD_CARDS',
  REMOVE_CARD = 'PLAYER_REMOVE_CARD'
}

export const addPlayerCard = (card: CardData) => ({ type: PlayerAction.ADD_CARD, payload: card });
export const addPlayerCards = (cards: CardData[]) => ({ type: PlayerAction.ADD_CARDS, payload: cards });
export const removePlayerCard = (id: number) => ({ type: PlayerAction.REMOVE_CARD, payload: id });