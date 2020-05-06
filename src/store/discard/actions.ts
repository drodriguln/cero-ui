import { CeroCard } from '../types';

export enum DiscardAction {
  ADD_CARD = 'DISCARD_ADD_CARD'
}

export const addCard = (payload: CeroCard) => ({ type: DiscardAction.ADD_CARD, payload: payload });