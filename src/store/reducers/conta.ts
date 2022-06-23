import { DEPOSITAR, SACAR } from '../actions/conta.actions';

type Action = {
  type: string;
  payload?: any;
}

export const contaReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case DEPOSITAR:
      return state + action.payload.quantia;
    case SACAR:
      return state - action.payload.quantia;
    default:
      return state;
  }
}