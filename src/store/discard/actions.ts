import { CardData } from '../types';

export enum DiscardAction {
  ADD_CARD = 'DISCARD_ADD_CARD'
}

export const addDiscardCard = (card: CardData) => ({ type: DiscardAction.ADD_CARD, payload: card });