import actionTypes from './actionTypes';

export default function alterarNumeroMinimo(novoNumero) {
  return {
    type: actionTypes.NUM_MIN_ALTERADO,
    payload: novoNumero,
  };
}

export function alterarNumeroMaximo(novoNumero) {
  return {
    type: actionTypes.NUM_MAX_ALTERADO,
    payload: novoNumero,
  };
}
