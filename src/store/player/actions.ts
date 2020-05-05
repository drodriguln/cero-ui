import { CardData } from '../types';

export enum PlayerAction {
  ADD_CARD = 'ADD_CARD'
}

export const addCard = (payload: CardData) => ({ type: PlayerAction.ADD_CARD, payload: payload });