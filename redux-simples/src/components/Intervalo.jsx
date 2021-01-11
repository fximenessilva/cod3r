/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import './Intervalo.css';
import { act } from 'react-dom/test-utils';
import Card from './Card';
import alterarNumeroMinimo, { alterarNumeroMaximo } from '../store/actions/numberActions';

function Intervalo(props) {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Numeros" red>
      <div className="Intervalo">
        <span>
          <strong>Minimo:</strong>
          <input
            onChange={(e) => props.alterarMinimo(+e.target.value)}
            type="number"
            value={min}
          />
        </span>
        <span>
          <strong>Maximo:</strong>
          <input
            onChange={(e) => props.alterarMaximo(+e.target.value)}
            type="number"
            value={max}
          />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numbersReducer.min,
    max: state.numbersReducer.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
