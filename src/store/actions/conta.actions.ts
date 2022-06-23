export const DEPOSITAR = 'DEPOSITAR';
export const SACAR = 'SACAR';

export function depositar(quantia: number) {
  return {
    type: DEPOSITAR,
    payload: { quantia },
  }
}

export function sacar(quantia: number) {
  return {
    type: SACAR,
    payload: { quantia },
  }
}