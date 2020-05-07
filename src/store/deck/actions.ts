export enum DeckAction {
  REMOVE_CARD = 'DECK_REMOVE_CARD',
  REMOVE_CARDS = 'DECK_REMOVE_CARDS'
}

export const removeDeckCard = { type: DeckAction.REMOVE_CARD };
export const removeDeckCards = (count: number) => ({ type: DeckAction.REMOVE_CARDS, payload: count });