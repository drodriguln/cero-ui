import { CardData } from '../../types';

export enum DiscardAction {
  SET_VALUE = 'DISCARD_SET_VALUE',
}

export const setDiscard = (card: CardData) => ({ type: DiscardAction.SET_VALUE, payload: card });
