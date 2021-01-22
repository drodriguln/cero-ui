export enum IdAction {
  SET_VALUE = 'ID_SET_VALUE',
}

export const setId = (id: string) => ({ type: IdAction.SET_VALUE, payload: id });
