export enum DeckAction {
  REMOVE_CARD = 'DECK_REMOVE_CARD',
  REMOVE_CARDS = 'DECK_REMOVE_CARDS'
}

export const removeCard = { type: DeckAction.REMOVE_CARD };
export const removeCards = (count: number) => ({ type: DeckAction.REMOVE_CARDS, payload: count });