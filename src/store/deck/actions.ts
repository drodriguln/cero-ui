import { CardData } from '../types';

export enum DeckAction {
  ADD_CARDS = 'DECK_ADD_CARDS',
  REMOVE_CARD = 'DECK_REMOVE_CARD',
  REMOVE_CARDS = 'DECK_REMOVE_CARDS'
}

export const addDeckCards = (cards: CardData[]) => ({ type: DeckAction.ADD_CARDS, payload: cards });
export const removeDeckCard = { type: DeckAction.REMOVE_CARD };
export const removeDeckCards = (count: number) => ({ type: DeckAction.REMOVE_CARDS, payload: count });
